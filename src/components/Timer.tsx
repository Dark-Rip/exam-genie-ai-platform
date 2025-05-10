
import React, { useState, useEffect, useCallback } from 'react';
import { Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { useToast } from '@/hooks/use-toast';

interface TimerProps {
  initialTime: number; // in seconds
  onTimeUp: () => void;
  warningTime?: number; // in seconds
}

const Timer: React.FC<TimerProps> = ({ initialTime, onTimeUp, warningTime = 300 }) => {
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const { toast } = useToast();

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getProgressPercentage = useCallback((): number => {
    return (timeLeft / initialTime) * 100;
  }, [timeLeft, initialTime]);

  const getTimerColor = useCallback((): string => {
    if (timeLeft <= warningTime) {
      return timeLeft <= warningTime / 3 ? 'text-exam-red' : 'text-exam-orange';
    }
    return 'text-exam-blue';
  }, [timeLeft, warningTime]);

  const getProgressColor = useCallback((): string => {
    if (timeLeft <= warningTime) {
      return timeLeft <= warningTime / 3 ? 'bg-exam-red' : 'bg-exam-orange';
    }
    return 'bg-exam-blue';
  }, [timeLeft, warningTime]);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    // Show warnings at specific intervals
    if (timeLeft === warningTime) {
      toast({
        title: "Time running out",
        description: "You have 5 minutes remaining in this exam.",
        variant: "default",
      });
    }

    if (timeLeft === 60) {
      toast({
        title: "Almost finished",
        description: "You have 1 minute remaining in this exam.",
        variant: "destructive",
      });
    }

    const timer = isPaused ? null : setTimeout(() => setTimeLeft(timeLeft - 1), 1000);

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timeLeft, isPaused, onTimeUp, toast, warningTime]);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <Clock className={`h-5 w-5 mr-2 ${getTimerColor()}`} />
          <span className="font-medium">Time Remaining</span>
        </div>
        <button 
          onClick={togglePause} 
          className="text-sm text-exam-blue hover:underline"
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>

      <div className={`text-2xl font-semibold mb-2 ${getTimerColor()}`}>
        {formatTime(timeLeft)}
      </div>

      <Progress
        value={getProgressPercentage()}
        className={`h-1.5 ${getProgressColor()}`}
      />
    </div>
  );
};

export default Timer;
