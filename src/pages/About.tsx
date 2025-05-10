
import React from 'react';
import { Link } from 'react-router-dom';
import { Info, Award, Smile, GraduationCap, School, Users, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
      
      <Footer />
    </div>
  );
};

export default About;
