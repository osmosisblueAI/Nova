'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  subtitle?: string;
  description: string;
  icon: ReactNode;
}

const FeatureCard = ({ title, subtitle, description, icon }: FeatureCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)' }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-gray-800/90 p-6 rounded-xl border border-cyan-800 shadow-lg h-full flex flex-col"
    >
      <div className="text-cyan-300 text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
      {subtitle && <p className="text-sm text-cyan-300 mb-3">{subtitle}</p>}
      <p className="text-gray-200 mt-auto">{description}</p>
    </motion.div>
  );
};

export default FeatureCard; 