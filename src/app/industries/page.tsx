'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBuilding, FaPlane, FaHospital, FaShoppingCart, FaUniversity, FaIndustry, FaChartLine, FaUsers, FaShieldAlt, FaClock } from 'react-icons/fa';

export default function Industries() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Industry data with detailed enterprise use cases
  const industries = [
    {
      name: "Finance & Banking",
      icon: <FaBuilding />,
      description: "From risk assessment to portfolio management, Nova Tech streamlines financial operations across the enterprise.",
      useCases: [
        "Automated risk assessment and compliance monitoring",
        "Portfolio tracking with real-time performance metrics",
        "Multi-department project coordination for complex financial initiatives",
        "Secure client engagement portals with permission-based access"
      ],
      metrics: {
        efficiency: "32% reduction in compliance reporting time",
        roi: "41% increase in cross-departmental collaboration efficiency"
      },
      color: "from-cyan-600 to-blue-700"
    },
    {
      name: "Healthcare & Pharmaceuticals",
      icon: <FaHospital />,
      description: "Enhance patient care and accelerate research with AI-powered project management built for healthcare.",
      useCases: [
        "Clinical trial coordination across research sites",
        "Regulatory compliance tracking with automated alerts",
        "Supply chain management for critical medical supplies",
        "Cross-functional team collaboration for patient care initiatives"
      ],
      metrics: {
        efficiency: "28% reduction in trial documentation processing time",
        roi: "47% improvement in cross-department resource allocation"
      },
      color: "from-teal-600 to-green-700"
    },
    {
      name: "Manufacturing & Supply Chain",
      icon: <FaIndustry />,
      description: "Optimize complex production processes and supply networks with enterprise-grade project visibility.",
      useCases: [
        "End-to-end production timeline management with predictive insights",
        "Supplier coordination and performance tracking",
        "Quality assurance workflow automation",
        "Inventory optimization with AI demand forecasting"
      ],
      metrics: {
        efficiency: "34% reduction in production bottlenecks",
        roi: "26% decrease in inventory carrying costs"
      },
      color: "from-blue-600 to-indigo-700"
    },
    {
      name: "Retail & E-commerce",
      icon: <FaShoppingCart />,
      description: "Coordinate multichannel operations and optimize customer experiences with unified project visibility.",
      useCases: [
        "Product launch campaign coordination across marketing, sales, and distribution",
        "Supply chain visibility from warehouse to delivery",
        "Omnichannel customer experience initiatives",
        "Promotion and pricing strategy implementation"
      ],
      metrics: {
        efficiency: "37% faster product-to-market timeline",
        roi: "43% improvement in promotion execution accuracy"
      },
      color: "from-pink-600 to-red-700"
    },
    {
      name: "Travel & Hospitality",
      icon: <FaPlane />,
      description: "Create seamless guest experiences by coordinating complex service operations across your enterprise.",
      useCases: [
        "Multi-property management and resource allocation",
        "Event planning and coordination across departments",
        "Customer service improvement initiatives",
        "Operational efficiency tracking across locations"
      ],
      metrics: {
        efficiency: "29% improvement in staff resource allocation",
        roi: "31% increase in customer satisfaction metrics"
      },
      color: "from-purple-600 to-violet-700"
    },
    {
      name: "Education & Research",
      icon: <FaUniversity />,
      description: "Streamline academic initiatives and research projects with collaborative tools built for institutions.",
      useCases: [
        "Multi-department research initiative coordination",
        "Grant application and compliance tracking",
        "Curriculum development project management",
        "Student engagement and retention programs"
      ],
      metrics: {
        efficiency: "36% improvement in cross-department collaboration",
        roi: "42% increase in successful grant applications"
      },
      color: "from-amber-600 to-orange-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-16">
      {/* Hero Section */}
      <div className="w-full bg-gray-800 py-16 mb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise Solutions for <span className="text-cyan-300">Every Industry</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Nova Tech's AI-powered project management platform adapts to the unique challenges of your industry with custom workflows, compliance features, and specialized analytics.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#9F7AEA' }}
                className="bg-cyan-500 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
              >
                Request Enterprise Demo
              </motion.button>
              <Link href="#industry-details" className="inline-flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
                Explore Industries
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Enterprise Capabilities */}
      <div className="container mx-auto px-4 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          Enterprise-Grade <span className="text-cyan-300 underline decoration-2 underline-offset-8 decoration-cyan-500">Capabilities</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mb-4">
              <FaShieldAlt className="text-cyan-300 text-xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
            <p className="text-gray-300">SOC 2 Type II compliance, end-to-end encryption, and role-based access controls.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mb-4">
              <FaUsers className="text-cyan-300 text-xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Cross-Department Sync</h3>
            <p className="text-gray-300">Unified visibility across all enterprise functions with customized department views.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mb-4">
              <FaChartLine className="text-cyan-300 text-xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Executive Dashboards</h3>
            <p className="text-gray-300">Real-time KPI tracking with high-level insights for strategic decision making.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mb-4">
              <FaClock className="text-cyan-300 text-xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Rapid Deployment</h3>
            <p className="text-gray-300">Enterprise-wide implementation in weeks, not months, with dedicated onboarding support.</p>
          </motion.div>
        </div>
      </div>

      {/* Industry Details */}
      <div id="industry-details" className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
        >
          Industry-Specific <span className="text-cyan-300 underline decoration-2 underline-offset-8 decoration-cyan-500">Solutions</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div 
              key={index} 
              variants={item}
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-lg"
            >
              <div className={`bg-gradient-to-r ${industry.color} p-6`}>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-2xl">{industry.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">{industry.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-6">{industry.description}</p>
                
                <h4 className="text-white font-semibold mb-3">Enterprise Use Cases:</h4>
                <ul className="mb-6 space-y-2">
                  {industry.useCases.map((useCase, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-200">{useCase}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-3">Enterprise Impact:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-400 text-sm">Efficiency</p>
                      <p className="text-cyan-300 font-medium">{industry.metrics.efficiency}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">ROI</p>
                      <p className="text-cyan-300 font-medium">{industry.metrics.roi}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Ready to transform your enterprise?</h3>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-cyan-500 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
          >
            Schedule Enterprise Consultation
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 