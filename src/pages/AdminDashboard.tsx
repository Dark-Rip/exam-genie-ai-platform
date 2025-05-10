import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  PlusCircle, 
  Users, 
  FileText, 
  BarChart2, 
  Search,
  Book, 
  Clock,
  Trash2,
  Edit,
  Lightbulb
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';

// Mock data
import { exams } from '@/utils/mockData';

// Other mock data for admin dashboard
const studentsPerformanceData = [
  { name: 'Math', average: 78, highest: 95, lowest: 55 },
  { name: 'Physics', average: 65, highest: 88, lowest: 42 },
  { name: 'Chemistry', average: 82, highest: 97, lowest: 60 },
  { name: 'Biology', average: 71, highest: 90, lowest: 45 },
];

const examActivityData = [
  { name: 'Mon', exams: 45 },
  { name: 'Tue', exams: 52 },
  { name: 'Wed', exams: 38 },
  { name: 'Thu', exams: 65 },
  { name: 'Fri', exams: 70 },
  { name: 'Sat', exams: 25 },
  { name: 'Sun', exams: 15 },
];

const studentDistributionData = [
  { name: 'A (90-100%)', value: 15 },
  { name: 'B (80-89%)', value: 25 },
  { name: 'C (70-79%)', value: 35 },
  { name: 'D (60-69%)', value: 18 },
  { name: 'F (<60%)', value: 7 },
];

const COLORS = ['#22c55e', '#3b82f6', '#a855f7', '#f97316', '#ef4444'];

const recentStudents = [
  { id: 1, name: 'Alex Johnson', exams: 5, avgScore: 85, lastActive: '2 hours ago' },
  { id: 2, name: 'Maria Garcia', exams: 8, avgScore: 92, lastActive: '1 day ago' },
  { id: 3, name: 'James Chen', exams: 3, avgScore: 78, lastActive: '6 hours ago' },
  { id: 4, name: 'Emma Wilson', exams: 7, avgScore: 64, lastActive: '3 hours ago' },
  { id: 5, name: 'Ahmed Hassan', exams: 4, avgScore: 90, lastActive: '2 days ago' },
];

const AdminDashboard: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filter exams based on search
  const filteredExams = exams.filter(exam => 
    exam.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    exam.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            <p className="text-gray-500">Manage exams and monitor student performance</p>
          </div>
          <Link to="/create-exam">
            <Button className="mt-4 md:mt-0 bg-exam-blue hover:bg-blue-600">
              <PlusCircle className="h-4 w-4 mr-2" />
              Create New Exam
            </Button>
          </Link>
        </div>
        
        {/* Summary cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Students</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Users className="h-6 w-6 text-exam-blue mr-2" />
                <span className="text-2xl font-bold">243</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">↑ 12% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Total Exams Created</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <FileText className="h-6 w-6 text-exam-purple mr-2" />
                <span className="text-2xl font-bold">48</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">↑ 8% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Exams Completed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <BarChart2 className="h-6 w-6 text-exam-teal mr-2" />
                <span className="text-2xl font-bold">1,254</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">↑ 24% from last month</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Avg. Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <Book className="h-6 w-6 text-exam-orange mr-2" />
                <span className="text-2xl font-bold">76%</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">↓ 3% from last month</p>
            </CardContent>
          </Card>
        </div>
        
        {/* Charts section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Student Performance Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Student Performance by Subject</CardTitle>
              <CardDescription>Average, highest, and lowest scores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={studentsPerformanceData}
                    margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="lowest" stackId="a" fill="#ef4444" />
                    <Bar dataKey="average" stackId="a" fill="#3b82f6" />
                    <Bar dataKey="highest" stackId="a" fill="#22c55e" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Score Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Grade Distribution</CardTitle>
              <CardDescription>Student performance breakdown</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={studentDistributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {studentDistributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Second row of charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Exam Activity */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Exam Activity</CardTitle>
              <CardDescription>Number of exams taken per day</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={examActivityData}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="exams" stroke="#3b82f6" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          {/* Recent Students */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Recent Students</CardTitle>
              <CardDescription>Latest student activity</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Student</TableHead>
                    <TableHead>Exams</TableHead>
                    <TableHead>Avg. Score</TableHead>
                    <TableHead>Last Active</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell>{student.name}</TableCell>
                      <TableCell>{student.exams}</TableCell>
                      <TableCell>
                        <Badge variant={student.avgScore >= 80 ? "default" : student.avgScore >= 60 ? "outline" : "destructive"}>
                          {student.avgScore}%
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm text-gray-500">{student.lastActive}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter className="border-t border-gray-100 pt-4 pb-3">
              <Button variant="ghost" className="text-exam-blue hover:text-blue-700 hover:bg-blue-50">
                View All Students
              </Button>
            </CardFooter>
          </Card>
        </div>
        
        {/* Manage Exams */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <h2 className="text-xl font-semibold">Manage Exams</h2>
            <div className="mt-3 md:mt-0 w-full md:w-auto">
              <div className="relative">
                <Search className="absolute top-2.5 left-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search exams..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 w-full md:w-64"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Exam Title</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead>Questions</TableHead>
                  <TableHead>Time Limit</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredExams.map((exam) => (
                  <TableRow key={exam.id}>
                    <TableCell>
                      <div className="font-medium">{exam.title}</div>
                    </TableCell>
                    <TableCell>{exam.subject}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`
                        ${exam.difficulty === 'Easy' ? 'bg-green-50 text-green-700 border-green-200' : 
                          exam.difficulty === 'Medium' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' : 
                          'bg-red-50 text-red-700 border-red-200'}
                      `}>
                        {exam.difficulty}
                      </Badge>
                    </TableCell>
                    <TableCell>{exam.questionCount}</TableCell>
                    <TableCell className="flex items-center">
                      <Clock className="h-4 w-4 mr-1 text-gray-400" />
                      {exam.timeLimit} mins
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            Actions
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Users className="h-4 w-4 mr-2" />
                            Students
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <BarChart2 className="h-4 w-4 mr-2" />
                            Analytics
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Lightbulb className="h-4 w-4 mr-2" />
                            AI Suggestions
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
                {filteredExams.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={6} className="text-center py-6">
                      No exams found matching your search.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
          
          <div className="flex justify-center mt-6">
            <Button variant="outline">Load More</Button>
          </div>
        </div>
        
        {/* AI Assistant Card */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-exam-purple" />
              AI Exam Generator
            </CardTitle>
            <CardDescription>
              Let AI help you create well-structured exams with balanced question difficulty
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="bg-exam-purple hover:bg-purple-600">
              Create AI-Generated Exam
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
