
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  Save, 
  Flag, 
  X,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import Navbar from '@/components/Navbar';
import QuestionDisplay from '@/components/QuestionDisplay';
import Timer from '@/components/Timer';

// Mock data
import { exams, questions } from '@/utils/mockData';

const ExamPage: React.FC = () => {
  const { examId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<string>>(new Set());
  const [isExamSubmitModalOpen, setIsExamSubmitModalOpen] = useState<boolean>(false);
  const [isExitWarningModalOpen, setIsExitWarningModalOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  
  // Find the current exam from mock data
  const exam = exams.find(e => e.id === examId) || {
    id: '1',
    title: 'Default Exam',
    subject: 'General',
    timeLimit: 60,  // in minutes
    questionCount: questions.length,
    difficulty: 'Medium' as const,
  };
  
  // Convert time limit from minutes to seconds for the Timer component
  const timeLimit = exam.timeLimit * 60;
  
  useEffect(() => {
    // Initialize flagged questions from localStorage if available
    const savedFlags = localStorage.getItem(`exam_${examId}_flags`);
    if (savedFlags) {
      setFlaggedQuestions(new Set(JSON.parse(savedFlags)));
    }
    
    // Initialize answers from localStorage if available
    const savedAnswers = localStorage.getItem(`exam_${examId}_answers`);
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
    
    // Set up confirmation dialog when user tries to leave
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
      return '';
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [examId]);
  
  // Save answers to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`exam_${examId}_answers`, JSON.stringify(answers));
  }, [examId, answers]);
  
  // Save flagged questions to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(`exam_${examId}_flags`, JSON.stringify(Array.from(flaggedQuestions)));
  }, [examId, flaggedQuestions]);
  
  const currentQuestion = questions[currentQuestionIndex] || {
    id: '1',
    text: 'Question not found',
    type: 'multiple-choice' as const,
    options: [],
  };
  
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };
  
  const handleAnswerChange = (questionId: string, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };
  
  const handleFlagQuestion = (questionId: string, isFlagged: boolean) => {
    const newFlagged = new Set(flaggedQuestions);
    
    if (isFlagged) {
      newFlagged.add(questionId);
    } else {
      newFlagged.delete(questionId);
    }
    
    setFlaggedQuestions(newFlagged);
  };
  
  const handleSubmitExam = async () => {
    setIsSubmitting(true);
    
    try {
      // In a real app, this would send the answers to an API endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Calculate the number of answered questions
      const answeredCount = Object.keys(answers).length;
      
      // Clear saved data after successful submission
      localStorage.removeItem(`exam_${examId}_answers`);
      localStorage.removeItem(`exam_${examId}_flags`);
      
      // Navigate to results page
      navigate(`/results/${examId}`);
    } catch (error) {
      toast({
        title: "Error submitting exam",
        description: "Please try again",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };
  
  const handleTimeUp = () => {
    toast({
      title: "Time's up!",
      description: "Your exam will be submitted automatically.",
      variant: "destructive",
    });
    
    setIsExamSubmitModalOpen(true);
  };
  
  const attemptExit = () => {
    setIsExitWarningModalOpen(true);
  };
  
  const confirmExit = () => {
    navigate('/student-dashboard');
  };
  
  const getProgressStats = () => {
    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(answers).length;
    const flaggedCount = flaggedQuestions.size;
    
    return {
      totalQuestions,
      answeredQuestions,
      flaggedCount,
      progress: Math.round((answeredQuestions / totalQuestions) * 100),
    };
  };
  
  const stats = getProgressStats();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container-custom pt-6 pb-20">
        <div className="mb-6">
          <button 
            onClick={attemptExit}
            className="text-sm flex items-center text-gray-600 hover:text-exam-blue transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Dashboard
          </button>
          
          <h1 className="text-2xl font-bold mt-2">{exam.title}</h1>
          <p className="text-gray-600">{exam.subject} · {exam.questionCount} Questions</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar with timer and progress */}
          <div className="lg:col-span-1 space-y-6">
            <Timer 
              initialTime={timeLimit} 
              onTimeUp={handleTimeUp}
              warningTime={300} // 5 minutes warning
            />
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
              <h2 className="font-medium mb-3">Exam Progress</h2>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Questions Answered</span>
                    <span className="font-medium">{stats.answeredQuestions}/{stats.totalQuestions}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-exam-blue h-2 rounded-full" 
                      style={{ width: `${stats.progress}%` }}
                    ></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Flag className="h-4 w-4 text-exam-orange mr-2" />
                    <span className="text-sm">Flagged Questions</span>
                  </div>
                  <span className="text-sm font-medium">{stats.flaggedCount}</span>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <h3 className="text-sm font-medium mb-3">Question Navigation</h3>
                  <div className="grid grid-cols-5 gap-2">
                    {questions.map((q, index) => {
                      const isAnswered = !!answers[q.id];
                      const isFlagged = flaggedQuestions.has(q.id);
                      const isActive = index === currentQuestionIndex;
                      
                      return (
                        <button
                          key={q.id}
                          onClick={() => setCurrentQuestionIndex(index)}
                          className={`h-8 w-8 flex items-center justify-center text-xs rounded-md transition-colors ${
                            isActive
                              ? 'bg-exam-blue text-white'
                              : isAnswered
                              ? isFlagged
                                ? 'bg-yellow-100 text-yellow-800 border border-yellow-300'
                                : 'bg-green-100 text-green-800 border border-green-200'
                              : isFlagged
                              ? 'bg-orange-50 border border-orange-200 text-orange-800'
                              : 'bg-white border border-gray-200 text-gray-600'
                          }`}
                        >
                          {index + 1}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <Button 
                onClick={() => setIsExamSubmitModalOpen(true)}
                className="w-full bg-exam-blue hover:bg-blue-600"
              >
                Submit Exam
              </Button>
            </div>
          </div>
          
          {/* Main question area */}
          <div className="lg:col-span-2 space-y-6">
            <QuestionDisplay
              questionId={currentQuestion.id}
              questionNumber={currentQuestionIndex + 1}
              questionText={currentQuestion.text}
              questionType={currentQuestion.type}
              options={currentQuestion.options}
              onAnswer={handleAnswerChange}
              onFlag={handleFlagQuestion}
              currentAnswer={answers[currentQuestion.id] || ''}
              showHints={true}
            />
            
            <div className="flex justify-between">
              <Button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                variant="outline"
                className="flex items-center"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                onClick={() => {
                  handleAnswerChange(currentQuestion.id, answers[currentQuestion.id] || '');
                  toast({
                    title: "Progress saved",
                    description: "Your answer has been saved",
                  });
                }}
                variant="outline"
                className="text-exam-blue border-exam-blue hover:bg-exam-blue/5"
              >
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              
              <Button
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === questions.length - 1}
                className="flex items-center bg-exam-blue hover:bg-blue-600"
              >
                Next
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Submit Exam Confirmation Dialog */}
      <Dialog open={isExamSubmitModalOpen} onOpenChange={setIsExamSubmitModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Submit Exam</DialogTitle>
            <DialogDescription>
              Are you sure you want to submit your exam? You won't be able to change your answers after submission.
            </DialogDescription>
          </DialogHeader>
          
          <div className="bg-gray-50 p-4 rounded-md my-4">
            <div className="flex items-center justify-between mb-3">
              <span>Questions Answered:</span>
              <span className="font-medium">{stats.answeredQuestions} of {stats.totalQuestions}</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span>Unanswered Questions:</span>
              <span className="font-medium text-amber-600">{stats.totalQuestions - stats.answeredQuestions}</span>
            </div>
          </div>
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsExamSubmitModalOpen(false)}
              disabled={isSubmitting}
            >
              Continue Exam
            </Button>
            <Button 
              onClick={handleSubmitExam}
              className="bg-exam-blue hover:bg-blue-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Exam'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      {/* Exit Warning Dialog */}
      <Dialog open={isExitWarningModalOpen} onOpenChange={setIsExitWarningModalOpen}>
        <DialogContent>
          <DialogHeader>
            <div className="flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              <DialogTitle>Exit Exam</DialogTitle>
            </div>
            <DialogDescription>
              Are you sure you want to exit? Your progress is saved, but this will end your current exam session.
            </DialogDescription>
          </DialogHeader>
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsExitWarningModalOpen(false)}
            >
              Continue Exam
            </Button>
            <Button 
              variant="destructive"
              onClick={confirmExit}
            >
              Exit Exam
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExamPage;
