'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left"
      >
        <h3 className="text-lg font-medium text-white">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown className="text-cyan-300" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-3 text-gray-300">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: "How does Nova Tech's AI automate project management?",
      answer: "Our AI analyzes project patterns, identifies bottlenecks, and automates routine tasks like status updates, meeting scheduling, and resource allocation. It learns from your team's workflow to make increasingly accurate predictions and suggestions over time."
    },
    {
      question: "Can I integrate Nova Tech with my existing tools?",
      answer: "Yes, Nova Tech integrates seamlessly with popular tools like Slack, JIRA, GitHub, Trello, Asana, and many more. Our API also allows for custom integrations with your organization's proprietary software."
    },
    {
      question: "Is my data secure with Nova Tech?",
      answer: "Absolutely. We implement enterprise-grade security measures including end-to-end encryption, regular security audits, and comply with GDPR, CCPA, and other privacy regulations. Your data is stored on secure servers with redundant backups."
    },
    {
      question: "How long does it take to set up Nova Tech?",
      answer: "Most teams are up and running within a day. Our onboarding process is designed to be quick and intuitive, with guided setup and pre-built templates. For larger organizations, we offer personalized onboarding assistance."
    },
    {
      question: "Do you offer support for teams of all sizes?",
      answer: "Yes, our pricing plans are designed to scale with your team size. Whether you're a small startup or a large enterprise, we have solutions that fit your needs and can grow with you."
    },
    {
      question: "How does Nova Tech scale for enterprise organizations?",
      answer: "Our infrastructure is built to handle enterprise workloads with multi-region deployment options, unlimited users, and custom scaling configurations. Our architecture automatically adjusts to your organization's needs, whether you have hundreds or thousands of users across multiple departments."
    },
    {
      question: "What security certifications does Nova Tech maintain?",
      answer: "Nova Tech maintains SOC 2 Type II, ISO 27001, GDPR, HIPAA, and CCPA compliance. We employ enterprise-grade security measures including end-to-end encryption, regular penetration testing, and advanced access controls. Our security practices are audited quarterly by independent third parties."
    },
    {
      question: "Can Nova Tech integrate with our existing enterprise systems?",
      answer: "Yes, we provide robust enterprise integrations with major platforms like SAP, Oracle, Salesforce, Microsoft, and Workday. Our REST API and secure data connectors enable custom integrations with proprietary systems. We also offer dedicated integration specialists for complex enterprise environments."
    },
    {
      question: "What level of customization is available for enterprise clients?",
      answer: "Enterprise clients receive extensive customization options, including dedicated AI models trained on your organization's specific workflows, custom dashboards for different departments, role-based permissions tailored to your organizational structure, and industry-specific compliance modules."
    },
    {
      question: "What kind of implementation support do you provide for enterprise deployments?",
      answer: "Enterprise clients receive white-glove implementation support including a dedicated project manager, technical account representative, and solutions architect. We offer custom migration assistance, phased roll-out planning, and comprehensive training programs for all organizational levels from C-suite to end users."
    },
    {
      question: "How does Nova Tech support global enterprise operations?",
      answer: "Our platform supports multi-region deployments with data residency options, 30+ language localizations, and 24/7 global support across all major time zones. We maintain compliance with regional regulations and provide region-specific reporting capabilities for decentralized organizations."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {faqs.map((faq, index) => (
        <FaqItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Faq; 