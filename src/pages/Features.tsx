
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Book, 
  Brain, 
  ChartBar, 
  Clock, 
  Database, 
  GraduationCap,
  Shield, 
  Users, 
  Zap 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeatureCard from '@/components/FeatureCard';

const Features: React.FC = () => {
  const featureSections = [
    {
      title: "Student Experience",
      description: "Tools designed to enhance learning and improve exam performance",
      features: [
        {
          icon: <Brain className="h-6 w-6" />,
          title: "AI-Powered Study Assistant",
          description: "Get instant help on difficult concepts with our intelligent study companion that adapts to your learning style.",
          color: "blue" as const
        },
        {
          icon: <Clock className="h-6 w-6" />,
          title: "Adaptive Test Timing",
          description: "Practice under real exam conditions with customizable timers that help build time management skills.",
          color: "purple" as const
        },
        {
          icon: <Book className="h-6 w-6" />,
          title: "Interactive Practice Mode",
          description: "Receive instant feedback and explanations as you work through practice questions at your own pace.",
          color: "teal" as const
        },
        {
          icon: <ChartBar className="h-6 w-6" />,
          title: "Personalized Analytics",
          description: "Track your progress with detailed performance metrics identifying strengths and improvement areas.",
          color: "indigo" as const
        }
      ]
    },
    {
      title: "Educator Tools",
      description: "Advanced features for teachers and administrators",
      features: [
        {
          icon: <GraduationCap className="h-6 w-6" />,
          title: "Question Bank Generator",
          description: "Create comprehensive question banks using our AI assistant to generate relevant content for any subject.",
          color: "purple" as const
        },
        {
          icon: <Database className="h-6 w-6" />,
          title: "Secure Exam Repository",
          description: "Store and organize your exams in a centralized, searchable database with version control.",
          color: "blue" as const
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "Student Performance Insights",
          description: "Gain actionable insights into class performance with detailed analytics and reporting tools.",
          color: "teal" as const
        },
        {
          icon: <Zap className="h-6 w-6" />,
          title: "Automated Grading",
          description: "Save time with intelligent grading for multiple choice and short answer questions with configurable rubrics.",
          color: "indigo" as const
        }
      ]
    },
    {
      title: "Platform Capabilities",
      description: "Core technology that powers ExamGenie's innovative solutions",
      features: [
        {
          icon: <Shield className="h-6 w-6" />,
          title: "Advanced Security Protocols",
          description: "Ensure exam integrity with our comprehensive security measures including randomized questions and anti-cheating technology.",
          color: "teal" as const
        },
        {
          icon: <Brain className="h-6 w-6" />,
          title: "Natural Language Processing",
          description: "Our AI engine understands context and nuance in both questions and answers for more accurate assessment.",
          color: "blue" as const
        },
        {
          icon: <Users className="h-6 w-6" />,
          title: "Collaborative Learning Tools",
          description: "Enable peer learning with discussion forums and group study features integrated into the platform.",
          color: "purple" as const
        },
        {
          icon: <ChartBar className="h-6 w-6" />,
          title: "Comprehensive Reporting",
          description: "Generate detailed reports on individual and group performance with exportable data for further analysis.",
          color: "indigo" as const
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features for Modern Learning</h1>
            <p className="text-lg text-gray-600 mb-8">
              ExamGenie combines cutting-edge AI technology with educational expertise to create a comprehensive exam preparation platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-exam-blue hover:bg-blue-600">
                  Get Started Free
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="border-exam-blue text-exam-blue hover:bg-exam-blue/5">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Feature Sections */}
      {featureSections.map((section, index) => (
        <section 
          key={index} 
          className={`py-20 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
              <p className="text-lg text-gray-600">{section.description}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.features.map((feature, featureIndex) => (
                <FeatureCard
                  key={featureIndex}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  color={feature.color}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
      
      {/* AI Integration Section */}
      <section className="py-20 bg-gradient-to-r from-exam-blue to-exam-purple text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">AI-Powered Learning Experience</h2>
              <p className="text-lg mb-6">
                Our advanced AI technology transforms how students learn and educators teach. ExamGenie's intelligent algorithms provide personalized guidance at every step of the learning journey.
              </p>
              <ul className="space-y-4">
                {[
                  "Adaptive question selection based on performance",
                  "Natural language feedback on written responses",
                  "Personalized study plans that evolve with your progress",
                  "Intelligent content recommendations for targeted improvement"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-white/20 rounded-full p-1 mr-3 flex-shrink-0 mt-0.5">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-exam-blue hover:bg-gray-100">
                    Try ExamGenie Free
                  </Button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-white/20">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1000&auto=format&fit=crop" 
                  alt="AI-powered learning technology" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Comparison Table */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Compare Plans & Features</h2>
            <p className="text-lg text-gray-600">
              Choose the plan that best fits your needs, whether you're an individual student or an educational institution.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left text-gray-500 font-semibold text-sm uppercase">Features</th>
                  <th className="px-6 py-4 text-center text-gray-500 font-semibold text-sm uppercase">Basic</th>
                  <th className="px-6 py-4 text-center text-exam-purple font-semibold text-sm uppercase">Pro</th>
                  <th className="px-6 py-4 text-center text-gray-500 font-semibold text-sm uppercase">Educator</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  { feature: "Practice Exams", basic: "50+", pro: "Unlimited", educator: "Unlimited" },
                  { feature: "AI Study Assistant", basic: "5 queries/day", pro: "Unlimited", educator: "Unlimited" },
                  { feature: "Performance Analytics", basic: "Basic", pro: "Advanced", educator: "Comprehensive" },
                  { feature: "Question Creation", basic: "No", pro: "Limited", educator: "Unlimited" },
                  { feature: "Student Management", basic: "No", pro: "No", educator: "Up to 100 students" },
                  { feature: "Custom Branding", basic: "No", pro: "No", educator: "Yes" },
                  { feature: "Exam Creation", basic: "No", pro: "5 per month", educator: "Unlimited" },
                  { feature: "Export Reports", basic: "No", pro: "Yes", educator: "Advanced formats" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">{row.basic}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-900 bg-purple-50">{row.pro}</td>
                    <td className="px-6 py-4 text-center text-sm text-gray-500">{row.educator}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/pricing">
              <Button size="lg" className="bg-exam-purple hover:bg-purple-600">
                See Detailed Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-6 text-exam-blue opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
            <p className="text-xl md:text-2xl font-medium text-gray-900 mb-8">
              "ExamGenie has transformed how our university prepares students for exams. The AI-powered features provide personalized guidance that would be impossible to deliver at scale otherwise. Our students are more confident and better prepared."
            </p>
            <div>
              <div className="h-12 w-12 rounded-full bg-gray-200 mx-auto mb-2 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?q=80&w=120&auto=format&fit=crop" 
                  alt="Professor Sarah Johnson" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="font-medium">Professor Sarah Johnson</div>
              <div className="text-sm text-gray-500">Department of Education, Stanford University</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-exam-blue">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Transform Your Learning Experience?</h2>
            <p className="text-lg text-white/80 mb-8">
              Join thousands of students and educators using ExamGenie to achieve better results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="bg-white text-exam-blue hover:bg-gray-100">
                  Start Free Trial
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>
            <p className="mt-4 text-sm text-white/70">No credit card required. 14-day free trial on all paid plans.</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Features;

