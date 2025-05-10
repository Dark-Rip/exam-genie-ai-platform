
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Flag, HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Option {
  id: string;
  text: string;
}

interface QuestionDisplayProps {
  questionId: string;
  questionNumber: number;
  questionText: string;
  questionType: 'multiple-choice' | 'short-answer';
  options?: Option[];
  onAnswer: (questionId: string, answer: string) => void;
  onFlag: (questionId: string, isFlagged: boolean) => void;
  currentAnswer?: string;
  showHints?: boolean;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  questionId,
  questionNumber,
  questionText,
  questionType,
  options = [],
  onAnswer,
  onFlag,
  currentAnswer = '',
  showHints = false,
}) => {
  const [answer, setAnswer] = useState<string>(currentAnswer);
  const [isFlagged, setIsFlagged] = useState<boolean>(false);
  const [isHintVisible, setIsHintVisible] = useState<boolean>(false);

  const handleAnswerChange = (value: string) => {
    setAnswer(value);
    onAnswer(questionId, value);
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(e.target.value);
    onAnswer(questionId, e.target.value);
  };

  const handleFlag = () => {
    const newFlaggedState = !isFlagged;
    setIsFlagged(newFlaggedState);
    onFlag(questionId, newFlaggedState);
  };

  const getHint = () => {
    // In a real app, this would be provided by the AI integration
    return "Consider the key concepts covered in the chapter and focus on how they relate to each other.";
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-sm font-medium text-gray-500">Question {questionNumber}</span>
          <h2 className="text-xl font-semibold mt-1">{questionText}</h2>
        </div>
        <div className="flex space-x-2">
          {showHints && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsHintVisible(!isHintVisible)}
                    className="text-exam-teal border-exam-teal hover:bg-exam-teal/5"
                  >
                    <HelpCircle className="h-4 w-4 mr-1" />
                    <span>Hint</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Get an AI-powered hint</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          <Button
            variant={isFlagged ? "destructive" : "outline"}
            size="sm"
            onClick={handleFlag}
            className={!isFlagged ? "border-exam-orange text-exam-orange hover:bg-exam-orange/5" : ""}
          >
            <Flag className="h-4 w-4 mr-1" />
            <span>{isFlagged ? "Flagged" : "Flag"}</span>
          </Button>
        </div>
      </div>

      {isHintVisible && (
        <div className="bg-teal-50 border border-exam-teal/20 rounded-lg p-4 mb-6">
          <div className="flex">
            <HelpCircle className="h-5 w-5 text-exam-teal mr-2 flex-shrink-0" />
            <div>
              <p className="font-medium text-exam-teal mb-1">Hint</p>
              <p className="text-sm text-gray-700">{getHint()}</p>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6">
        {questionType === 'multiple-choice' ? (
          <RadioGroup value={answer} onValueChange={handleAnswerChange} className="space-y-3">
            {options.map((option) => (
              <div key={option.id} className="flex items-center space-x-2 border border-gray-200 rounded-lg p-3 hover:bg-gray-50">
                <RadioGroupItem value={option.id} id={option.id} />
                <Label htmlFor={option.id} className="flex-grow cursor-pointer font-normal">
                  {option.text}
                </Label>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <Textarea
            placeholder="Type your answer here..."
            value={answer}
            onChange={handleTextAreaChange}
            className="min-h-[150px] text-base"
          />
        )}
      </div>
    </div>
  );
};

export default QuestionDisplay;
