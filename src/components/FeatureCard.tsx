
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "blue" | "purple" | "teal" | "indigo";
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, color }) => {
  const colorClasses = {
    blue: "bg-blue-50 text-exam-blue",
    purple: "bg-purple-50 text-exam-purple",
    teal: "bg-teal-50 text-exam-teal",
    indigo: "bg-indigo-50 text-exam-indigo",
  };

  const hoverClasses = {
    blue: "hover:border-exam-blue",
    purple: "hover:border-exam-purple",
    teal: "hover:border-exam-teal",
    indigo: "hover:border-exam-indigo",
  };

  return (
    <div className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 transition-all duration-300 card-hover ${hoverClasses[color]}`}>
      <div className={`p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 ${colorClasses[color]}`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
