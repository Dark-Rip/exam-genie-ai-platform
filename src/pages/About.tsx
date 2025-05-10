
import React from 'react';
import { Info, Award, Smile, GraduationCap, School, Users, Heart } from 'lucide-react';
import Navbar from '@/components/Navbar';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block p-3 bg-white rounded-full shadow-sm mb-6">
              <Info className="h-8 w-8 text-exam-blue" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About ExamGenie</h1>
            <p className="text-lg text-gray-600">
              Founded in 2023, ExamGenie is revolutionizing exam preparation and assessment with 
              AI-powered technology that adapts to each learner's unique needs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our Story Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                ExamGenie began with a simple observation: traditional exams don't effectively measure 
                a student's true understanding or potential. Our founder, Dr. Emily Chen, experienced this 
                firsthand as both a student and later as an education researcher at Stanford University.
              </p>
              <p className="text-gray-600 mb-4">
                After years of research into adaptive learning technologies, Dr. Chen assembled a team of 
                educators, AI specialists, and software engineers to create an exam platform that could do more 
                than just test—it could teach, adapt, and provide meaningful insights.
              </p>
              <p className="text-gray-600">
                Today, ExamGenie serves over 500 educational institutions and 50,000+ students worldwide, 
                continuously evolving to meet the changing landscape of education and assessment.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                    alt="ExamGenie Team" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-exam-purple/10 rounded-full blur-xl"></div>
                <div className="absolute -top-6 -left-6 h-24 w-24 bg-exam-blue/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              We believe that assessment should be a catalyst for growth, not just evaluation. 
              Our mission is to transform exams from sources of stress into opportunities for 
              deeper understanding and personalized learning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <GraduationCap className="h-6 w-6 text-exam-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalized Learning</h3>
              <p className="text-gray-600">
                We tailor the assessment experience to each student's strengths and areas for growth, 
                ensuring that every interaction promotes meaningful progress.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-6">
                <Award className="h-6 w-6 text-exam-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Academic Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of assessment integrity while creating a supportive 
                environment that reduces test anxiety and promotes authentic demonstration of knowledge.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-exam-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Educational Equity</h3>
              <p className="text-gray-600">
                We're committed to making advanced educational tools accessible to all learners, 
                regardless of background or circumstance, to help close achievement gaps.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Meet Our Leadership Team</h2>
            <p className="text-lg text-gray-600">
              ExamGenie brings together experts in education, artificial intelligence, and user experience 
              to create a platform that truly understands how people learn.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Emily Chen",
                role: "Founder & CEO",
                bio: "Former Stanford researcher specializing in adaptive learning technologies.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Marcus Johnson",
                role: "Chief Technology Officer",
                bio: "AI specialist with 15+ years experience in educational technology.",
                image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "Dr. Sarah Patel",
                role: "Chief Education Officer",
                bio: "Former university professor and curriculum design specialist.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              },
              {
                name: "David Kim",
                role: "Head of Product",
                bio: "UX expert focused on creating intuitive educational experiences.",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md hover:scale-[1.02]">
                <div className="aspect-w-1 aspect-h-1">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-exam-blue text-sm mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-exam-blue/5 to-exam-purple/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
            <p className="text-lg text-gray-600">
              These core principles guide everything we do at ExamGenie, from product development 
              to customer support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                <Heart className="h-6 w-6 text-exam-blue" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Student-Centered Innovation</h3>
                <p className="text-gray-600">
                  We design every feature with students' needs, comfort, and success in mind. Their feedback 
                  drives our development roadmap and inspires our innovations.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                <School className="h-6 w-6 text-exam-purple" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Educational Excellence</h3>
                <p className="text-gray-600">
                  We hold ourselves to the highest pedagogical standards, ensuring our platform reflects 
                  current research and best practices in teaching and assessment.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                <Smile className="h-6 w-6 text-exam-teal" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Empathy & Support</h3>
                <p className="text-gray-600">
                  We understand the pressures of academic life and design our platform to be a supportive, 
                  stress-reducing tool that builds confidence alongside knowledge.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                <Award className="h-6 w-6 text-exam-indigo" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Continuous Improvement</h3>
                <p className="text-gray-600">
                  We're never satisfied with the status quo. Our team constantly seeks better ways to serve 
                  learners and educators through technology and human-centered design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-exam-blue to-exam-purple text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students and educators who use ExamGenie to achieve their academic goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-white text-exam-blue hover:bg-gray-100">
                Get Started Free
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Sales
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

export default About;
