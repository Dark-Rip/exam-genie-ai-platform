
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip as RechartsTooltip,
  CartesianGrid 
} from 'recharts';
import { 
  Check, 
  X, 
  AlertTriangle, 
  Clock, 
  Trophy, 
  ArrowRight,
  Download,
  Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from '@/components/ui/tooltip';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from '@/components/Navbar';

// Mock data
import { exams, questions } from '@/utils/mockData';

// Mock results data
const mockResults = {
  score: 75,
  timeSpent: '45:20', // in minutes:seconds
  startTime: '2025-05-10T10:15:00Z',
  endTime: '2025-05-10T11:00:20Z',
  questionsCorrect: 15,
  questionsWrong: 3,
  questionsSkipped: 2,
  categoryScores: [
    { name: 'Algebra', score: 80 },
    { name: 'Geometry', score: 65 },
    { name: 'Calculus', score: 90 },
    { name: 'Statistics', score: 60 },
  ],
  timePerQuestion: [
    { id: 1, time: 60, average: 75 },
    { id: 2, time: 35, average: 60 },
    { id: 3, time: 90, average: 80 },
    { id: 4, time: 45, average: 50 },
    { id: 5, time: 70, average: 70 },
  ],
  feedback: "Overall good performance! You demonstrated strong understanding of basic concepts. Areas for improvement include geometry problems and time management on complex questions. Focus on practicing more geometry problems and review angle relationships in triangles."
};

const ResultsPage: React.FC = () => {
  const { examId } = useParams();
  
  // Find the current exam from mock data
  const exam = exams.find(e => e.id === examId) || {
    id: '1',
    title: 'Default Exam',
    subject: 'General',
    timeLimit: 60,
    questionCount: questions.length,
    difficulty: 'Medium' as const,
  };
  
  // Colors for charts
  const COLORS = ['#3b82f6', '#ef4444', '#f97316'];
  
  // Data for pie chart
  const pieData = [
    { name: 'Correct', value: mockResults.questionsCorrect },
    { name: 'Incorrect', value: mockResults.questionsWrong },
    { name: 'Skipped', value: mockResults.questionsSkipped },
  ];
  
  // Function to determine result status
  const getResultStatus = () => {
    if (mockResults.score >= 80) return { label: 'Excellent', color: 'text-green-600' };
    if (mockResults.score >= 70) return { label: 'Good', color: 'text-blue-600' };
    if (mockResults.score >= 60) return { label: 'Satisfactory', color: 'text-yellow-600' };
    return { label: 'Needs Improvement', color: 'text-red-600' };
  };
  
  const status = getResultStatus();
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container-custom py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Exam Results</h1>
            <p className="text-gray-500">{exam.title} • {exam.subject}</p>
          </div>
          
          <div className="flex space-x-3 mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center">
              <Download className="h-4 w-4 mr-2" />
              Export PDF
            </Button>
            <Button variant="outline" className="flex items-center">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
        
        {/* Main results card with score */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 pr-0 lg:pr-8">
              <div className="flex items-center mb-4">
                <Trophy className="h-6 w-6 text-yellow-500 mr-2" />
                <h2 className="text-xl font-semibold">Results Summary</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Final Score</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-exam-blue">{mockResults.score}%</span>
                    <span className={`ml-2 text-sm ${status.color}`}>{status.label}</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Time Spent</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-gray-700">{mockResults.timeSpent}</span>
                    <span className="ml-2 text-sm text-gray-500">minutes</span>
                  </div>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm text-gray-600 mb-1">Questions</p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-exam-purple">
                      {mockResults.questionsCorrect}/{mockResults.questionsCorrect + mockResults.questionsWrong + mockResults.questionsSkipped}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">correct</span>
                  </div>
                </div>
              </div>
              
              {/* Question breakdown */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Question Breakdown</h3>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <div className="flex items-center">
                        <div className="h-3 w-3 bg-exam-blue rounded-full mr-2"></div>
                        <span>Correct</span>
                      </div>
                      <span>{mockResults.questionsCorrect} questions</span>
                    </div>
                    <Progress value={(mockResults.questionsCorrect / exam.questionCount) * 100} className="h-2 bg-gray-100" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <div className="flex items-center">
                        <div className="h-3 w-3 bg-exam-red rounded-full mr-2"></div>
                        <span>Incorrect</span>
                      </div>
                      <span>{mockResults.questionsWrong} questions</span>
                    </div>
                    <Progress value={(mockResults.questionsWrong / exam.questionCount) * 100} className="h-2 bg-gray-100" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <div className="flex items-center">
                        <div className="h-3 w-3 bg-exam-orange rounded-full mr-2"></div>
                        <span>Skipped</span>
                      </div>
                      <span>{mockResults.questionsSkipped} questions</span>
                    </div>
                    <Progress value={(mockResults.questionsSkipped / exam.questionCount) * 100} className="h-2 bg-gray-100" />
                  </div>
                </div>
              </div>
              
              {/* AI Feedback */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-100">
                <div className="flex items-start">
                  <div className="bg-white p-2 rounded-md mr-3 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-exam-purple"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.85.85 6.71 2.26"></path><path d="M21 3v9h-9"></path></svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-800 mb-1">AI-Generated Feedback</h3>
                    <p className="text-sm text-gray-700">{mockResults.feedback}</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pie chart */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <RechartsTooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        
        {/* Performance by Category */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Performance by Category</h2>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                {mockResults.categoryScores.map((category, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span>{category.name}</span>
                      <span className="font-medium">{category.score}%</span>
                    </div>
                    <Progress 
                      value={category.score}
                      className={`h-2 ${
                        category.score >= 80 ? 'bg-green-500' 
                        : category.score >= 60 ? 'bg-exam-blue' 
                        : 'bg-exam-orange'
                      }`}
                    />
                  </div>
                ))}
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mockResults.categoryScores}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <RechartsTooltip />
                    <Bar dataKey="score" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        
        {/* Time Analysis */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-4">Time Analysis</h2>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <div className="mb-4">
              <div className="flex items-center text-sm mb-3">
                <div className="h-3 w-3 bg-exam-blue rounded-full mr-2"></div>
                <span>Your Time</span>
                <div className="h-3 w-3 bg-gray-300 rounded-full ml-4 mr-2"></div>
                <span>Average Time</span>
              </div>
            </div>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockResults.timePerQuestion} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="id" type="category" tick={{ fontSize: 12 }} />
                  <RechartsTooltip />
                  <Bar dataKey="time" name="Your Time (seconds)" fill="#3b82f6" />
                  <Bar dataKey="average" name="Average Time (seconds)" fill="#e5e7eb" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        {/* Detailed Question Analysis */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Question Analysis</h2>
          
          <Accordion type="single" collapsible className="bg-white rounded-xl border border-gray-200 shadow-sm">
            {questions.slice(0, 5).map((question, index) => {
              // Mock answers - in a real app this would come from the backend
              const isCorrect = index % 3 === 0;
              const isSkipped = index % 5 === 4;
              const selectedOption = isSkipped ? null : question.options?.[index % question.options?.length];
              const correctOptionIndex = 0; // First option is always correct in this mock
              
              return (
                <AccordionItem value={`question-${index}`} key={index}>
                  <AccordionTrigger className="px-4 py-3 hover:bg-gray-50">
                    <div className="flex items-center text-left">
                      <div className={`h-6 w-6 rounded-full mr-3 flex items-center justify-center ${
                        isCorrect ? 'bg-green-100 text-green-600' :
                        isSkipped ? 'bg-orange-100 text-orange-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {isCorrect ? <Check className="h-4 w-4" /> : 
                         isSkipped ? <AlertTriangle className="h-4 w-4" /> : 
                         <X className="h-4 w-4" />}
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Question {index + 1}</span>
                        <div className="text-base font-medium">{question.text.substring(0, 60)}...</div>
                      </div>
                      <div className="ml-auto mr-4 flex items-center">
                        <Clock className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-500">45s</span>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 pt-0 pb-4">
                    <div className="ml-9">
                      <div className="mb-3">
                        <h4 className="font-medium">Question:</h4>
                        <p>{question.text}</p>
                      </div>
                      
                      {question.options && (
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Options:</h4>
                          <div className="space-y-2">
                            {question.options.map((option, optIdx) => (
                              <div 
                                key={option.id} 
                                className={`p-2.5 border rounded-md ${
                                  optIdx === correctOptionIndex 
                                    ? 'border-green-300 bg-green-50' 
                                    : selectedOption?.id === option.id && optIdx !== correctOptionIndex
                                    ? 'border-red-300 bg-red-50'
                                    : 'border-gray-200'
                                }`}
                              >
                                <div className="flex">
                                  {optIdx === correctOptionIndex ? (
                                    <Check className="h-5 w-5 text-green-600 mr-2" />
                                  ) : selectedOption?.id === option.id ? (
                                    <X className="h-5 w-5 text-red-600 mr-2" />
                                  ) : (
                                    <div className="w-5 mr-2" />
                                  )}
                                  <span>{option.text}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {question.type === 'short-answer' && (
                        <div className="mb-4">
                          <h4 className="font-medium mb-1">Your Answer:</h4>
                          <div className={`p-3 border rounded-md ${
                            isCorrect ? 'border-green-300 bg-green-50' : 
                            isSkipped ? 'border-gray-200 bg-gray-50 italic text-gray-500' :
                            'border-red-300 bg-red-50'
                          }`}>
                            {isSkipped ? 'No answer provided' : 'Your short answer text would appear here.'}
                          </div>
                        </div>
                      )}
                      
                      <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                        <h4 className="font-medium text-blue-800 mb-1">Explanation:</h4>
                        <p className="text-blue-700 text-sm">
                          {isCorrect 
                            ? 'Correct! This answer demonstrates a good understanding of the concept.'
                            : isSkipped 
                            ? 'This question was skipped. The correct explanation is provided above.'
                            : 'The correct answer was different. Review the highlighted option above for the correct choice.'}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
        
        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row justify-between mt-8">
          <Link to="/student-dashboard">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
            <Link to={`/practice/${examId}`}>
              <Button variant="outline" className="text-exam-teal border-exam-teal hover:bg-exam-teal/5">
                Practice Similar Questions
              </Button>
            </Link>
            
            <Link to="/student-dashboard">
              <Button className="bg-exam-blue hover:bg-blue-600">
                <span>Take Another Exam</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
