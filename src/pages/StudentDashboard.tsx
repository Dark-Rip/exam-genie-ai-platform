
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Book, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import ExamCard from '@/components/ExamCard';
import ProgressTracker from '@/components/ProgressTracker';
import AIAssistant from '@/components/AIAssistant';

// Mock data
import { exams } from '@/utils/mockData';

const StudentDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Filter exams based on search and filters
  const filteredExams = exams.filter((exam) => {
    const matchesSearch = exam.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          exam.subject.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesSubject = selectedSubject === 'all' || exam.subject === selectedSubject;
    const matchesDifficulty = selectedDifficulty === 'all' || exam.difficulty === selectedDifficulty;
    
    return matchesSearch && matchesSubject && matchesDifficulty;
  });

  // Get unique subjects for filter
  const subjects = ['all', ...new Set(exams.map(exam => exam.subject))];
  
  // Count completed exams
  const completedExamsCount = exams.filter(exam => exam.status === 'Completed').length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Student Dashboard</h1>
            <p className="text-gray-500">Welcome back! Continue your exam preparation.</p>
          </div>
          <Link to="/exam/practice">
            <Button className="mt-4 md:mt-0 bg-exam-blue hover:bg-blue-600">
              Practice Mode
            </Button>
          </Link>
        </div>
        
        {/* Progress tracker */}
        <div className="mb-8">
          <ProgressTracker 
            totalExams={exams.length}
            completedExams={completedExamsCount}
            totalHours={24}
            averageScore={78}
          />
        </div>
        
        {/* Tabs for different exam views */}
        <Tabs defaultValue="available" className="mb-8">
          <TabsList>
            <TabsTrigger value="available">Available Exams</TabsTrigger>
            <TabsTrigger value="progress">In Progress</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <div className="mt-4 flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search exams..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="flex gap-2">
              <select 
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="input-field text-gray-700"
              >
                {subjects.map(subject => (
                  <option key={subject} value={subject}>
                    {subject === 'all' ? 'All Subjects' : subject}
                  </option>
                ))}
              </select>
              
              <select 
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="input-field text-gray-700"
              >
                <option value="all">All Difficulties</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              
              <Button variant="outline" size="icon" className="shrink-0">
                <Filter className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <TabsContent value="available" className="mt-6">
            {filteredExams.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExams.map((exam) => (
                  <ExamCard key={exam.id} {...exam} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
                  <X className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No exams found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="progress" className="mt-6">
            {filteredExams.filter(exam => exam.status === 'In Progress').length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExams
                  .filter(exam => exam.status === 'In Progress')
                  .map((exam) => (
                    <ExamCard key={exam.id} {...exam} />
                  ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
                  <Book className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No exams in progress</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Start an exam to see it listed here
                </p>
                <div className="mt-6">
                  <Link to="/">
                    <Button variant="outline">
                      Browse Available Exams
                    </Button>
                  </Link>
                </div>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed" className="mt-6">
            {filteredExams.filter(exam => exam.status === 'Completed').length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredExams
                  .filter(exam => exam.status === 'Completed')
                  .map((exam) => (
                    <ExamCard key={exam.id} {...exam} />
                  ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
                  <Check className="h-6 w-6 text-gray-400" />
                </div>
                <h3 className="mt-2 text-lg font-medium text-gray-900">No completed exams</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Complete an exam to see your results here
                </p>
              </div>
            )}
          </TabsContent>
        </Tabs>
        
        {/* Recent activity section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {[
                { id: 1, type: 'exam_started', title: 'Advanced Mathematics', date: '2 hours ago' },
                { id: 2, type: 'exam_completed', title: 'Biology Basics', score: '85%', date: 'Yesterday' },
                { id: 3, type: 'practice_session', title: 'Chemistry Practice', duration: '45 minutes', date: '2 days ago' },
              ].map((activity) => (
                <li key={activity.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      {activity.type === 'exam_started' && (
                        <Badge variant="outline" className="bg-blue-50 text-exam-blue">Started</Badge>
                      )}
                      {activity.type === 'exam_completed' && (
                        <Badge variant="outline" className="bg-green-50 text-green-700">Completed</Badge>
                      )}
                      {activity.type === 'practice_session' && (
                        <Badge variant="outline" className="bg-purple-50 text-exam-purple">Practice</Badge>
                      )}
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                        <p className="text-xs text-gray-500">
                          {activity.type === 'exam_completed' && `Score: ${activity.score} · `}
                          {activity.type === 'practice_session' && `Duration: ${activity.duration} · `}
                          {activity.date}
                        </p>
                      </div>
                    </div>
                    <Link to="/results/1" className="text-sm text-exam-blue hover:underline">
                      {activity.type === 'exam_completed' ? 'View Results' : 'Details'}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default StudentDashboard;
