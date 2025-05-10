
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Check, Timer, BookOpen } from 'lucide-react';

interface ProgressTrackerProps {
  totalExams: number;
  completedExams: number;
  totalHours: number;
  averageScore: number;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({
  totalExams,
  completedExams,
  totalHours,
  averageScore
}) => {
  const completionPercentage = Math.round((completedExams / totalExams) * 100) || 0;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
      <h2 className="text-lg font-semibold mb-4">Your Progress</h2>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Exam Completion</span>
          <span className="font-medium">{completionPercentage}%</span>
        </div>
        <Progress value={completionPercentage} className="h-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-start">
            <div className="bg-white p-2 rounded-md mr-3">
              <Check className="h-5 w-5 text-exam-blue" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Completed</p>
              <p className="text-xl font-semibold">{completedExams} exams</p>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-start">
            <div className="bg-white p-2 rounded-md mr-3">
              <Timer className="h-5 w-5 text-exam-purple" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Study Time</p>
              <p className="text-xl font-semibold">{totalHours} hours</p>
            </div>
          </div>
        </div>

        <div className="bg-teal-50 rounded-lg p-4">
          <div className="flex items-start">
            <div className="bg-white p-2 rounded-md mr-3">
              <BookOpen className="h-5 w-5 text-exam-teal" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Avg. Score</p>
              <p className="text-xl font-semibold">{averageScore}%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
