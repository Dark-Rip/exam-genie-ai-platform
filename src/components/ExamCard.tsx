
import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Book, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ExamCardProps {
  id: string;
  title: string;
  subject: string;
  timeLimit: number;
  questionCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  status?: 'Not Started' | 'In Progress' | 'Completed';
}

const ExamCard: React.FC<ExamCardProps> = ({
  id,
  title,
  subject,
  timeLimit,
  questionCount,
  difficulty,
  status = 'Not Started'
}) => {
  const difficultyColor = {
    'Easy': 'bg-green-100 text-green-800',
    'Medium': 'bg-yellow-100 text-yellow-800',
    'Hard': 'bg-red-100 text-red-800'
  };

  const statusColor = {
    'Not Started': 'bg-gray-100 text-gray-800',
    'In Progress': 'bg-blue-100 text-blue-800',
    'Completed': 'bg-green-100 text-green-800'
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden card-hover">
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div>
            <Badge variant="outline" className={`mb-2 ${difficultyColor[difficulty]}`}>
              {difficulty}
            </Badge>
            <h3 className="text-lg font-semibold mb-1">{title}</h3>
            <p className="text-sm text-gray-600">{subject}</p>
          </div>
          <Badge className={statusColor[status]}>
            {status}
          </Badge>
        </div>
        
        <div className="flex items-center mt-4 text-sm text-gray-500">
          <div className="flex items-center mr-4">
            <Clock className="h-4 w-4 mr-1 text-gray-400" />
            <span>{timeLimit} min</span>
          </div>
          <div className="flex items-center">
            <Book className="h-4 w-4 mr-1 text-gray-400" />
            <span>{questionCount} questions</span>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 border-t border-gray-100">
        <Link to={`/exam/${id}`}>
          <Button variant="ghost" className="w-full justify-between hover:bg-white hover:text-exam-blue">
            <span>{status === 'Not Started' ? 'Start Exam' : 'Continue Exam'}</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ExamCard;
