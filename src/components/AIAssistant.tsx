
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm ExamGenie's AI assistant. How can I help you with your studies today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponses: { [key: string]: string } = {
        "help": "I can help you with various subjects, explain concepts, quiz you on topics, or provide study tips. What subject are you studying?",
        "exam": "To prepare for your exam, I recommend creating a study schedule, reviewing key concepts, and taking practice tests. Would you like me to create a study plan for you?",
        "question": "I'd be happy to help with your question. Could you provide more details about the topic or concept you're asking about?",
        "math": "What specific math topic are you studying? I can help with algebra, calculus, geometry, statistics, and more.",
        "science": "Science is a broad field! Are you studying biology, chemistry, physics, or another scientific discipline?",
      };
      
      // Check if any keywords match
      let response = "I understand you're asking about ";
      const lowercaseInput = input.toLowerCase();
      
      for (const keyword in aiResponses) {
        if (lowercaseInput.includes(keyword)) {
          response = aiResponses[keyword];
          break;
        }
      }
      
      if (response.startsWith("I understand")) {
        response += `"${input}". Can you provide more details about what you'd like to know?`;
      }
      
      const aiMessage: Message = {
        id: Date.now().toString(),
        content: response,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat toggle button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 p-4 rounded-full shadow-lg z-50 transition-colors ${
          isOpen ? 'bg-exam-purple text-white' : 'bg-exam-blue text-white'
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-20 right-6 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-gray-200 z-40 transition-all duration-300 transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0 pointer-events-none'
        }`}
      >
        {/* Chat header */}
        <div className="bg-exam-blue text-white p-4 rounded-t-xl">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">ExamGenie Assistant</h3>
            <span className="text-xs bg-green-400 text-green-800 px-2 py-0.5 rounded-full">Online</span>
          </div>
          <p className="text-xs text-blue-100 mt-1">AI-powered study companion</p>
        </div>

        {/* Messages container */}
        <div className="h-80 overflow-y-auto p-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`mb-4 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`rounded-lg p-3 max-w-[80%] ${
                  message.isUser
                    ? 'bg-exam-blue text-white rounded-br-none'
                    : 'bg-white border border-gray-200 rounded-bl-none'
                }`}
              >
                <div className="flex items-center mb-1">
                  {!message.isUser && (
                    <div className="bg-exam-purple/10 rounded-full p-1 mr-2">
                      <MessageSquare className="h-3 w-3 text-exam-purple" />
                    </div>
                  )}
                  <span className={`text-xs ${message.isUser ? 'text-blue-100' : 'text-gray-500'}`}>
                    {message.isUser ? 'You' : 'AI Assistant'}
                  </span>
                </div>
                <p className="text-sm whitespace-pre-wrap">{message.content}</p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start mb-4">
              <div className="bg-white border border-gray-200 rounded-lg rounded-bl-none p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input area */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about your studies..."
              className="resize-none h-10 min-h-10"
            />
            <Button
              onClick={handleSendMessage}
              disabled={!input.trim()}
              className="bg-exam-blue hover:bg-blue-600 text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-xs text-gray-500 mt-2 text-center">
            Powered by AI to help with your exam preparation.
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
