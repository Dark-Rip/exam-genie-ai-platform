
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Quote, ChevronRight, ChevronLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Emma Thompson",
      role: "Biology Student, Harvard University",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "ExamGenie completely transformed my study habits. The AI assistant helped me understand complex concepts that I was struggling with. After using it for just one semester, my GPA improved significantly!",
      rating: 5
    },
    {
      name: "Dr. James Wilson",
      role: "Professor of Computer Science, MIT",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "As an educator, I've tried many assessment platforms, but ExamGenie stands out for its intuitive interface and powerful AI capabilities. It makes creating balanced assessments easy and gives me valuable insights into how my students are performing.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "High School Senior, Stuyvesant High School",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      quote: "I used ExamGenie to prepare for my AP exams, and the personalized feedback was incredibly helpful. The way it adapts to your knowledge gaps and provides targeted practice is amazing. I scored 5s on all three of my AP science exams!",
      rating: 5
    }
  ];

  const featuredTestimonials = [
    {
      name: "Stanford University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Stanford_Cardinal_logo.svg/200px-Stanford_Cardinal_logo.svg.png",
      quote: "ExamGenie has helped our faculty create more effective assessments while reducing the time spent on exam creation by 40%. The analytics provided have been invaluable for understanding student learning patterns.",
      author: "Dr. Sarah Martinez, Director of Educational Technology"
    },
    {
      name: "Phillips Academy",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Phillips_Academy_Seal.svg/200px-Phillips_Academy_Seal.svg.png",
      quote: "Since implementing ExamGenie across our school, we've seen measurable improvements in student performance and engagement. The adaptive learning features have been particularly helpful for students who need additional support.",
      author: "William Davis, Academic Dean"
    }
  ];

  const reviews = [
    {
      name: "Rebecca L.",
      role: "Medical Student",
      content: "The AI-powered study assistant is like having a private tutor available 24/7. It's incredibly helpful for difficult subjects like anatomy and physiology.",
      rating: 5
    },
    {
      name: "Jason T.",
      role: "Engineering Student",
      content: "I appreciate how the platform adapts to my learning style. The more I use it, the better it gets at identifying my weak areas and providing targeted practice.",
      rating: 4
    },
    {
      name: "Prof. Alicia Ramirez",
      role: "University Faculty",
      content: "ExamGenie has streamlined our assessment process and provided valuable data on student progress. The question generation tool saves hours of work.",
      rating: 5
    },
    {
      name: "David Kim",
      role: "High School Teacher",
      content: "My students love the interactive nature of ExamGenie. The gamification elements keep them engaged, and the immediate feedback helps them learn faster.",
      rating: 5
    },
    {
      name: "Sophia W.",
      role: "Law Student",
      content: "Preparing for the bar exam was much less stressful with ExamGenie. The practice tests closely mirrored the actual exam format, and the explanations were clear and comprehensive.",
      rating: 5
    },
    {
      name: "Mark Johnson",
      role: "School Administrator",
      content: "From an administrative perspective, ExamGenie offers excellent value. The robust analytics help us identify curriculum gaps and improve teaching strategies.",
      rating: 4
    }
  ];

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block p-3 bg-white rounded-full shadow-sm mb-6">
              <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">What Our Users Say</h1>
            <p className="text-lg text-gray-600">
              Thousands of students and educators trust ExamGenie for their assessment needs.
              Here's what they have to say about their experience.
            </p>
          </div>
        </div>
      </div>
      
      {/* Featured Testimonials Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <blockquote className="text-gray-700 mb-6 relative">
                  <Quote className="h-8 w-8 text-gray-200 absolute -left-2 -top-4 opacity-50" />
                  <p className="relative z-10">"{testimonial.quote}"</p>
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-12 w-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Featured Case Studies</h2>
            <p className="text-lg text-gray-600">
              See how leading educational institutions are using ExamGenie to improve 
              learning outcomes and enhance teaching efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredTestimonials.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 transition-all duration-300 hover:shadow-md">
                <div className="flex items-center mb-6">
                  <img src={item.logo} alt={item.name} className="h-16 mr-4" />
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                </div>
                
                <blockquote className="text-gray-700 mb-6">
                  <p>"{item.quote}"</p>
                </blockquote>
                
                <p className="text-gray-600 text-sm">- {item.author}</p>
                
                <Link to="/case-studies" className="inline-flex items-center mt-6 text-exam-blue font-medium">
                  Read Full Case Study
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* User Reviews Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">User Reviews</h2>
            <p className="text-lg text-gray-600">
              See what students and educators are saying about their experience with ExamGenie.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-md">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <p className="text-gray-600">{review.content}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <div className="inline-flex rounded-md">
              <button className="inline-flex items-center justify-center rounded-l-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </button>
              <button className="inline-flex items-center justify-center rounded-r-md border border-gray-300 border-l-0 bg-white px-3 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                Next
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-exam-blue/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <p className="text-4xl font-bold text-exam-blue mb-2">4.9/5</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            
            <div className="text-center p-6">
              <p className="text-4xl font-bold text-exam-blue mb-2">50,000+</p>
              <p className="text-gray-600">Active Students</p>
            </div>
            
            <div className="text-center p-6">
              <p className="text-4xl font-bold text-exam-blue mb-2">500+</p>
              <p className="text-gray-600">Educational Institutions</p>
            </div>
            
            <div className="text-center p-6">
              <p className="text-4xl font-bold text-exam-blue mb-2">98%</p>
              <p className="text-gray-600">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Submit Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-exam-blue to-exam-purple rounded-xl text-white p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Share Your Experience</h2>
              <p className="text-lg opacity-90">
                Had a great experience with ExamGenie? We'd love to hear your story!
              </p>
            </div>
            
            <div className="flex justify-center">
              <Link to="/submit-testimonial">
                <Button size="lg" className="bg-white text-exam-purple hover:bg-gray-100">
                  Submit Your Testimonial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-exam-blue to-exam-purple text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Thousands of Satisfied Users</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the difference that ExamGenie can make in your academic journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-white text-exam-blue hover:bg-gray-100">
                Get Started Free
              </Button>
            </Link>
            <Link to="/pricing">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ExamGenie</h3>
              <p className="text-gray-400">
                AI-powered exam platform for students and educators.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/features" className="hover:text-white">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                <li><Link to="/testimonials" className="hover:text-white">Testimonials</Link></li>
                <li><Link to="/case-studies" className="hover:text-white">Case Studies</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/help-center" className="hover:text-white">Help Center</Link></li>
                <li><Link to="/documentation" className="hover:text-white">Documentation</Link></li>
                <li><Link to="/api" className="hover:text-white">API</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">© 2025 ExamGenie. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Testimonials;
