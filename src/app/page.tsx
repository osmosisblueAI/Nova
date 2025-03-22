'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { FaBrain, FaChartLine, FaUsers, FaQuoteLeft, FaBuilding, FaPlane, FaHospital, FaShoppingCart, FaUniversity, FaIndustry } from 'react-icons/fa';

import FeatureCard from '@/components/FeatureCard';
import Faq from '@/components/Faq';

// Dynamic import of Globe component to improve initial load performance
const Globe = dynamic(() => import('@/components/Globe'), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-gray-900"></div>
});

export default function Home() {
  // Animation variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  // Handle smooth scrolling for anchor links
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    
    if (targetId) {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Update URL without reload
        window.history.pushState({}, '', `#${targetId}`);
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Globe />
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-gray-900/70 backdrop-blur-sm p-8 rounded-xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Enterprise AI Project Management</h1>
            <p className="text-xl text-cyan-300 mb-8">Transform your organization with enterprise-grade workflows and insights</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#9F7AEA' }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="bg-cyan-500 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
              >
                Enterprise Solutions
              </motion.button>
              <Link href="/contact" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
                Schedule Demo
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-cyan-300">
                SOC 2 Compliant
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-cyan-300">
                GDPR Ready
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-cyan-300">
                99.9% Uptime SLA
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-cyan-300">
                24/7 Enterprise Support
              </span>
            </div>
          </motion.div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
        >
          <span className="text-sm text-gray-300 mb-2">Scroll to explore</span>
          <svg className="animate-bounce w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-white"
          >
            Enterprise-Grade <span className="text-cyan-300 underline decoration-2 underline-offset-8 decoration-cyan-500">Features</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-300 mb-16 max-w-3xl mx-auto"
          >
            Powerful tools designed for enterprise scalability, security, and compliance
          </motion.p>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={item}>
              <FeatureCard 
                title="AI Task Automation" 
                subtitle="Enterprise Scale Automation"
                description="Leverage our AI to automate complex workflows, intelligently prioritize critical tasks, and optimize resource allocation across departments."
                icon={<FaBrain />}
              />
            </motion.div>
            <motion.div variants={item}>
              <FeatureCard 
                title="Enterprise Analytics" 
                subtitle="Executive Decision Support"
                description="Gain actionable insights with customizable dashboards, advanced forecasting, and cross-department performance metrics for strategic planning."
                icon={<FaChartLine />}
              />
            </motion.div>
            <motion.div variants={item}>
              <FeatureCard 
                title="Cross-Department Collaboration" 
                subtitle="Unified Organization View"
                description="Break down silos with secure, role-based collaboration tools that provide consistent visibility across your entire enterprise."
                icon={<FaUsers />}
              />
            </motion.div>
          </motion.div>

          {/* Product Overview Section */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold text-white">
                Meet the Nova<span className="text-purple-400">Tech</span> <span className="text-cyan-300">Interface</span>
              </h3>
              <p className="text-gray-300 mt-4 max-w-3xl mx-auto">
                Intuitive, powerful, and designed for enterprise workflows
              </p>
            </div>
            
            <div className="relative rounded-xl overflow-hidden border border-gray-700 shadow-2xl bg-gray-800 max-w-5xl mx-auto">
              {/* Mock Navigation */}
              <div className="bg-gray-900 p-4 border-b border-gray-700 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 text-center text-gray-400 text-sm">NovaOS Dashboard</div>
                <div className="w-12"></div>
              </div>
              
              {/* Mock Content */}
              <div className="grid grid-cols-12 gap-4 p-6">
                {/* Sidebar */}
                <div className="col-span-3 bg-gray-900 rounded-lg p-4 flex flex-col gap-4">
                  <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-md p-3 text-cyan-300 font-medium">Dashboard</div>
                  <div className="bg-transparent hover:bg-gray-800 rounded-md p-3 text-gray-300 transition-colors duration-200 cursor-pointer">Projects</div>
                  <div className="bg-transparent hover:bg-gray-800 rounded-md p-3 text-gray-300 transition-colors duration-200 cursor-pointer">Resources</div>
                  <div className="bg-transparent hover:bg-gray-800 rounded-md p-3 text-gray-300 transition-colors duration-200 cursor-pointer">Analytics</div>
                  <div className="bg-transparent hover:bg-gray-800 rounded-md p-3 text-gray-300 transition-colors duration-200 cursor-pointer">AI Assistant</div>
                  <div className="mt-auto bg-transparent hover:bg-gray-800 rounded-md p-3 text-gray-300 transition-colors duration-200 cursor-pointer">Settings</div>
                </div>
                
                {/* Main Content */}
                <div className="col-span-9">
                  {/* Stats Row */}
                  <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-cyan-800 transition-colors duration-300">
                      <p className="text-gray-400 text-sm">Active Projects</p>
                      <p className="text-2xl font-bold text-white">24</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-green-400 text-xs">↑ 12%</span>
                        <span className="text-gray-500 text-xs ml-1">vs last month</span>
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-cyan-800 transition-colors duration-300">
                      <p className="text-gray-400 text-sm">Tasks Completed</p>
                      <p className="text-2xl font-bold text-white">432</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-green-400 text-xs">↑ 8%</span>
                        <span className="text-gray-500 text-xs ml-1">vs last month</span>
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-cyan-800 transition-colors duration-300">
                      <p className="text-gray-400 text-sm">Team Efficiency</p>
                      <p className="text-2xl font-bold text-white">76%</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-green-400 text-xs">↑ 5%</span>
                        <span className="text-gray-500 text-xs ml-1">vs last month</span>
                      </div>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 border border-gray-700 hover:border-cyan-800 transition-colors duration-300">
                      <p className="text-gray-400 text-sm">AI Suggestions</p>
                      <p className="text-2xl font-bold text-white">18</p>
                      <div className="mt-2 flex items-center">
                        <span className="text-purple-400 text-xs">New</span>
                        <span className="text-gray-500 text-xs ml-1">actionable items</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Chart Area */}
                  <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="text-white font-medium">Project Performance</h4>
                      <div className="bg-gray-800 rounded-md px-3 py-1 text-gray-300 text-sm">Last 30 days</div>
                    </div>
                    {/* Mock Chart */}
                    <div className="h-40 flex items-end gap-1">
                      {[35, 45, 30, 25, 40, 50, 60, 55, 70, 65, 75, 80, 75, 90, 85, 95, 100, 90, 80, 85].map((height, i) => (
                        <div key={i} className="h-full flex-1 flex items-end">
                          <div 
                            className={`w-full rounded-sm ${i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-gray-400'}`} 
                            style={{height: `${height}%`}}
                          ></div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between mt-2">
                      <span className="text-gray-500 text-xs">Jun 01</span>
                      <span className="text-gray-500 text-xs">Jun 30</span>
                    </div>
                  </div>
                  
                  {/* AI Insights */}
                  <div className="bg-gray-900 rounded-lg border border-gray-700">
                    <div className="border-b border-gray-700 p-4">
                      <h4 className="text-white font-medium">AI Insights</h4>
                    </div>
                    <div className="p-4">
                      <div className="bg-gray-800 rounded-lg p-4 mb-3 border-l-4 border-cyan-500">
                        <div className="flex justify-between">
                          <span className="text-cyan-300 font-medium">Resource Allocation</span>
                          <span className="text-gray-400 text-sm">High Priority</span>
                        </div>
                        <p className="text-gray-300 text-sm mt-2">Marketing team is approaching capacity. Consider reassigning 3 tasks or adding resources.</p>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4 mb-3 border-l-4 border-purple-500">
                        <div className="flex justify-between">
                          <span className="text-purple-300 font-medium">Process Improvement</span>
                          <span className="text-gray-400 text-sm">Medium Priority</span>
                        </div>
                        <p className="text-gray-300 text-sm mt-2">QA approval process is taking 30% longer than average. Recommend process review.</p>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-4 border-l-4 border-green-500">
                        <div className="flex justify-between">
                          <span className="text-green-300 font-medium">Performance Alert</span>
                          <span className="text-gray-400 text-sm">Positive</span>
                        </div>
                        <p className="text-gray-300 text-sm mt-2">Development team velocity increased by 15% this sprint. Automation efforts showing results.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                href="/contact"
                className="inline-flex items-center text-cyan-300 hover:text-cyan-200 font-medium"
              >
                Request a personalized demo
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          >
            Trusted Across <span className="text-cyan-300 underline decoration-2 underline-offset-8 decoration-cyan-500">Industries</span>
          </motion.h2>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto"
          >
            <motion.div variants={item} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4 border border-cyan-800">
                <FaBuilding className="text-cyan-300 text-3xl" />
              </div>
              <h3 className="text-white font-medium text-center">Finance</h3>
              <p className="text-gray-300 text-sm text-center mt-2">Portfolio tracking & risk analysis</p>
            </motion.div>
            
            <motion.div variants={item} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4 border border-cyan-800">
                <FaHospital className="text-cyan-300 text-3xl" />
              </div>
              <h3 className="text-white font-medium text-center">Healthcare</h3>
              <p className="text-gray-300 text-sm text-center mt-2">Clinical trial management</p>
            </motion.div>
            
            <motion.div variants={item} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4 border border-cyan-800">
                <FaIndustry className="text-cyan-300 text-3xl" />
              </div>
              <h3 className="text-white font-medium text-center">Manufacturing</h3>
              <p className="text-gray-300 text-sm text-center mt-2">Supply chain optimization</p>
            </motion.div>
            
            <motion.div variants={item} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4 border border-cyan-800">
                <FaShoppingCart className="text-cyan-300 text-3xl" />
              </div>
              <h3 className="text-white font-medium text-center">Retail</h3>
              <p className="text-gray-300 text-sm text-center mt-2">Inventory & logistics</p>
            </motion.div>
            
            <motion.div variants={item} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4 border border-cyan-800">
                <FaPlane className="text-cyan-300 text-3xl" />
              </div>
              <h3 className="text-white font-medium text-center">Travel</h3>
              <p className="text-gray-300 text-sm text-center mt-2">Itinerary management</p>
            </motion.div>
            
            <motion.div variants={item} className="flex flex-col items-center">
              <div className="w-20 h-20 bg-gray-700 rounded-full flex items-center justify-center mb-4 border border-cyan-800">
                <FaUniversity className="text-cyan-300 text-3xl" />
              </div>
              <h3 className="text-white font-medium text-center">Education</h3>
              <p className="text-gray-300 text-sm text-center mt-2">Research coordination</p>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link href="/#industries" onClick={handleSmoothScroll} className="text-cyan-300 hover:text-cyan-200 font-medium inline-flex items-center">
              Learn how Nova Tech transforms your industry
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          >
            Client <span className="text-cyan-300 underline decoration-2 underline-offset-8 decoration-cyan-500">Testimonials</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-600"
            >
              <div className="flex items-start mb-4">
                <FaQuoteLeft className="text-cyan-300 text-3xl mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-200 italic">"Nova Tech has completely transformed how our team manages projects. The AI automation has saved us countless hours on repetitive tasks."</p>
              </div>
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold mr-4">SJ</div>
                <div>
                  <h4 className="text-white font-medium">Sarah Johnson</h4>
                  <p className="text-gray-300 text-sm">CTO, TechForward</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-700 rounded-xl p-6 shadow-lg border border-gray-600"
            >
              <div className="flex items-start mb-4">
                <FaQuoteLeft className="text-cyan-300 text-3xl mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-200 italic">"The real-time analytics have given us unprecedented visibility into our team's performance. We can now make data-driven decisions that improve our workflow."</p>
              </div>
              <div className="flex items-center mt-6">
                <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold mr-4">MR</div>
                <div>
                  <h4 className="text-white font-medium">Michael Rodriguez</h4>
                  <p className="text-gray-300 text-sm">Project Manager, InnovateCorp</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-white"
          >
            Enterprise <span className="text-cyan-300 underline decoration-2 underline-offset-8 decoration-cyan-500">Pricing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-300 mb-16 max-w-3xl mx-auto"
          >
            Flexible plans designed to scale with your organization's needs
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Business Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-700 rounded-xl overflow-hidden shadow-lg border border-gray-600"
            >
              <div className="p-6 text-center border-b border-gray-600">
                <h3 className="text-2xl font-bold text-white">Business</h3>
                <div className="mt-4 flex justify-center">
                  <span className="text-4xl font-bold text-white">$49</span>
                  <span className="text-gray-300 ml-2 self-end">/user/mo</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-100">
                    <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Full AI automation suite
                  </li>
                  <li className="flex items-center text-gray-100">
                    <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Up to 50 team members
                  </li>
                  <li className="flex items-center text-gray-100">
                    <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited projects
                  </li>
                  <li className="flex items-center text-gray-100">
                    <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Standard SLA
                  </li>
                </ul>
                <div className="mt-6">
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: '#9F7AEA' }}
                    className="w-full bg-cyan-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    Schedule Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Enterprise Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-700 rounded-xl overflow-hidden shadow-lg border border-cyan-400 relative transform scale-105 z-10"
            >
              <div className="absolute top-0 right-0 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                RECOMMENDED
              </div>
              <div className="p-6 text-center border-b border-gray-600">
                <h3 className="text-2xl font-bold text-white">Enterprise</h3>
                <div className="mt-4 flex justify-center">
                  <span className="text-4xl font-bold text-white">$99</span>
                  <span className="text-gray-300 ml-2 self-end">/user/mo</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-100">
                    <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Advanced AI customization
                  </li>
                  <li className="flex items-center text-gray-100">
                    <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Unlimited team members
                  </li>
                  <li className="flex items-center text-gray-100">
                    <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Cross-department analytics
                  </li>
                  <li className="flex items-center text-gray-100">
                    <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    99.9% uptime SLA
                  </li>
                  <li className="flex items-center text-gray-100">
                    <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 priority support
                  </li>
                </ul>
                <div className="mt-6">
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: '#9F7AEA' }}
                    className="w-full bg-cyan-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    Schedule Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* Global Enterprise Plan */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-700 rounded-xl overflow-hidden shadow-lg border border-gray-600"
            >
              <div className="p-6 text-center border-b border-gray-600">
                <h3 className="text-2xl font-bold text-white">Global Enterprise</h3>
                <div className="mt-4 flex justify-center">
                  <span className="text-xl font-bold text-white">Custom Pricing</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-100">
                    <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom AI solutions
                  </li>
                  <li className="flex items-center text-gray-100">
                    <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Multi-region deployment
                  </li>
                  <li className="flex items-center text-gray-100">
                    <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dedicated infrastructure
                  </li>
                  <li className="flex items-center text-gray-100">
                    <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom SLA agreements
                  </li>
                  <li className="flex items-center text-gray-100">
                    <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dedicated account team
                  </li>
                </ul>
                <div className="mt-6">
                  <motion.button
                    whileHover={{ scale: 1.03, backgroundColor: '#9F7AEA' }}
                    className="w-full bg-cyan-500 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
                  >
                    Contact Sales
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Partners Section */}
      <section className="py-20 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-white"
          >
            Enterprise <span className="text-cyan-300 underline decoration-2 underline-offset-8 decoration-cyan-500">Ecosystem</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-gray-300 mb-16 max-w-3xl mx-auto"
          >
            Seamlessly integrate with your existing enterprise infrastructure
          </motion.p>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
            >
              {/* Enterprise Technology Logos */}
              <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-20">
                <p className="text-gray-300 font-semibold">Microsoft</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-20">
                <p className="text-gray-300 font-semibold">Salesforce</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-20">
                <p className="text-gray-300 font-semibold">SAP</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-20">
                <p className="text-gray-300 font-semibold">Oracle</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-20">
                <p className="text-gray-300 font-semibold">AWS</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-20">
                <p className="text-gray-300 font-semibold">Google Cloud</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-20">
                <p className="text-gray-300 font-semibold">Azure</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 flex items-center justify-center h-20">
                <p className="text-gray-300 font-semibold">Workday</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-800 p-6 rounded-xl border border-gray-700"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Enterprise Compliance</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-200">
                      <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      SOC 2 Type II Certified
                    </li>
                    <li className="flex items-center text-gray-200">
                      <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      GDPR Compliant
                    </li>
                    <li className="flex items-center text-gray-200">
                      <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      HIPAA Ready
                    </li>
                    <li className="flex items-center text-gray-200">
                      <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      ISO 27001 Certified
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-200">
                      <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Advanced Encryption
                    </li>
                    <li className="flex items-center text-gray-200">
                      <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      SSO/SAML Integration
                    </li>
                    <li className="flex items-center text-gray-200">
                      <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Role-Based Access Control
                    </li>
                    <li className="flex items-center text-gray-200">
                      <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Multi-factor Authentication
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Enterprise Support</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-200">
                      <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      24/7 Premium Support
                    </li>
                    <li className="flex items-center text-gray-200">
                      <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Dedicated Account Manager
                    </li>
                    <li className="flex items-center text-gray-200">
                      <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Technical Success Team
                    </li>
                    <li className="flex items-center text-gray-200">
                      <svg className="h-5 w-5 text-cyan-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      SLA Guarantees
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center mb-16 text-white"
          >
            Frequently Asked <span className="text-cyan-300 underline decoration-2 underline-offset-8 decoration-cyan-500">Questions</span>
          </motion.h2>
          
          <Faq />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to <span className="text-cyan-300">Transform</span> Your Enterprise?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-200 mb-10"
            >
              Join industry leaders already leveraging Nova Tech to streamline operations, improve cross-department collaboration, and drive strategic growth.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#9F7AEA' }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="bg-cyan-500 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300"
              >
                Request Enterprise Demo
              </motion.button>
              <Link href="/contact" className="flex items-center justify-center text-white bg-gray-700 hover:bg-gray-600 font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300">
                Schedule Consultation
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            >
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-cyan-300 mb-1">98%</p>
                <p className="text-gray-400 text-sm">Enterprise Satisfaction</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-cyan-300 mb-1">43%</p>
                <p className="text-gray-400 text-sm">Productivity Increase</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-cyan-300 mb-1">57%</p>
                <p className="text-gray-400 text-sm">Faster Decision Making</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-cyan-300 mb-1">29%</p>
                <p className="text-gray-400 text-sm">Operational Cost Savings</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
