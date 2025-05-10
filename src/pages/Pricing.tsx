
import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Check, Shield, Clock, Users, BookOpen } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';

const Pricing: React.FC = () => {
  const tiers = [
    {
      name: "Basic",
      price: "Free",
      description: "Perfect for individual students just getting started",
      features: [
        "Access to 50+ practice exams",
        "Basic performance analytics",
        "5 AI-powered explanations per month",
        "Community forum access"
      ],
      popular: false,
      color: "blue"
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "per month",
      description: "Ideal for dedicated students preparing for important exams",
      features: [
        "Unlimited practice exams",
        "Detailed performance analytics",
        "Unlimited AI explanations",
        "Personalized study plans",
        "Priority support",
        "Ad-free experience"
      ],
      popular: true,
      color: "purple"
    },
    {
      name: "Educator",
      price: "$29.99",
      period: "per month",
      description: "For teachers and small educational organizations",
      features: [
        "Everything in Pro",
        "Create custom exams",
        "Track student performance",
        "AI-powered question generation",
        "Export reports and analytics",
        "Up to 100 student accounts"
      ],
      popular: false,
      color: "teal"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-block p-3 bg-white rounded-full shadow-sm mb-6">
              <DollarSign className="h-8 w-8 text-exam-blue" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-lg text-gray-600 mb-8">
              Choose the plan that's right for you. All plans include a 14-day free trial.
            </p>
            <div className="inline-flex items-center bg-white rounded-full p-1 border border-gray-200">
              <button className="px-4 py-2 rounded-full bg-exam-blue text-white">Monthly</button>
              <button className="px-4 py-2 rounded-full text-gray-700">Annual (Save 20%)</button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pricing Tiers */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tiers.map((tier, index) => {
              const colorClasses = {
                blue: "border-exam-blue/20 bg-gradient-to-b from-blue-50/50 to-transparent",
                purple: "border-exam-purple/30 bg-gradient-to-b from-purple-50/50 to-transparent",
                teal: "border-exam-teal/20 bg-gradient-to-b from-teal-50/50 to-transparent"
              };
              
              const buttonClasses = {
                blue: "bg-exam-blue hover:bg-blue-600",
                purple: "bg-exam-purple hover:bg-purple-600",
                teal: "bg-exam-teal hover:bg-teal-600"
              };
              
              return (
                <Card 
                  key={index} 
                  className={`rounded-xl shadow-sm border-2 transition-transform duration-300 hover:shadow-md hover:-translate-y-1 ${tier.popular ? 'relative border-exam-purple' : 'border-gray-100'} ${tier.popular ? colorClasses[tier.color] : ''}`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-exam-purple text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pt-8">
                    <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      {tier.period && (
                        <span className="text-gray-500 text-sm ml-1">{tier.period}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{tier.description}</p>
                  </CardHeader>
                  
                  <CardContent className="pt-4">
                    <ul className="space-y-3">
                      {tier.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  
                  <CardFooter className="pt-4 flex justify-center">
                    <Link to="/register" className="w-full">
                      <Button className={`w-full ${buttonClasses[tier.color]}`}>
                        {tier.price === "Free" ? "Sign Up Free" : "Start Free Trial"}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          
          <div className="mt-12 text-center text-sm text-gray-500">
            <p>All plans include a 14-day money-back guarantee. No credit card required for free plan.</p>
          </div>
        </div>
      </section>
      
      {/* Features Included Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">All Plans Include</h2>
            <p className="text-lg text-gray-600">
              Every ExamGenie subscription comes with these essential features to support your learning journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
            <div className="text-center">
              <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
                <Shield className="h-6 w-6 text-exam-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Testing Environment</h3>
              <p className="text-gray-600">
                Enterprise-grade security ensures your data and exam integrity are always protected.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-3 bg-purple-100 rounded-full mb-4">
                <Clock className="h-6 w-6 text-exam-purple" />
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
              <p className="text-gray-600">
                Access your exams and practice materials anytime, anywhere, from any device.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-3 bg-teal-100 rounded-full mb-4">
                <BookOpen className="h-6 w-6 text-exam-teal" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Regular Content Updates</h3>
              <p className="text-gray-600">
                New questions and exam materials are added regularly to keep content fresh and relevant.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-3 bg-indigo-100 rounded-full mb-4">
                <Users className="h-6 w-6 text-exam-indigo" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community Support</h3>
              <p className="text-gray-600">
                Connect with fellow students and educators to share tips and study strategies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-3 bg-orange-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-exam-orange">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Mobile App</h3>
              <p className="text-gray-600">
                Study on the go with our fully-featured mobile application for iOS and Android.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-block p-3 bg-red-100 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-exam-red">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Help & Documentation</h3>
              <p className="text-gray-600">
                Comprehensive guides and responsive customer support to help you get the most out of ExamGenie.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Have more questions? We're here to help you make the right choice.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: "Can I switch plans later?",
                a: "Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the change will take effect immediately. If you downgrade, the change will take effect at the end of your current billing cycle."
              },
              {
                q: "Is there a discount for educational institutions?",
                a: "Yes, we offer special pricing for schools and universities. Please contact our sales team for more information about our educational discounts and campus-wide licenses."
              },
              {
                q: "How does the 14-day free trial work?",
                a: "You can sign up for any paid plan and use all its features for 14 days without being charged. If you decide ExamGenie isn't right for you, cancel before the trial ends and you won't be billed."
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and Apple Pay. For enterprise plans, we can also arrange alternative payment methods."
              },
              {
                q: "Can I cancel my subscription at any time?",
                a: "Yes, you can cancel your subscription at any time from your account settings. If you cancel, you'll still have access to your plan until the end of your current billing period."
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
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
                Start Your Free Trial
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Contact Sales
              </Button>
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/80">No credit card required for free plan or trial</p>
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

export default Pricing;
