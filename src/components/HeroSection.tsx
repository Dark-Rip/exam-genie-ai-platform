
import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Lightbulb } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50">
      <div className="container-custom py-20">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                <span className="block">Transform Your</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-exam-blue to-exam-purple">
                  Exam Experience
                </span>
                <span className="block"> with AI</span>
              </h1>
              
              <p className="text-lg text-gray-600 mb-8">
                ExamGenie combines intelligent assessment tools with AI-powered tutoring 
                to help you master any subject with confidence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" className="btn-primary text-center">
                  Try for Free
                </Link>
                <Link to="/login" className="btn-outline text-center">
                  Admin Login
                </Link>
              </div>
              
              <div className="flex items-center mt-8 text-sm text-gray-500">
                <div className="flex items-center mr-6">
                  <BookOpen className="h-5 w-5 mr-2 text-exam-blue" />
                  <span>10,000+ Questions</span>
                </div>
                <div className="flex items-center mr-6">
                  <Users className="h-5 w-5 mr-2 text-exam-purple" />
                  <span>50,000+ Users</span>
                </div>
                <div className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2 text-exam-teal" />
                  <span>AI-Powered</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="rounded-xl bg-white shadow-xl overflow-hidden border border-gray-200">
              <div className="p-1">
                <img 
                  src="/placeholder.svg" 
                  alt="Exam Platform Interface" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
              
              {/* Floating elements for design */}
              <div className="absolute -top-4 -right-4 h-20 w-20 bg-exam-purple/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 h-24 w-24 bg-exam-blue/10 rounded-full blur-xl"></div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute top-4 -right-4 bg-exam-blue text-white py-2 px-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Lightbulb className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
