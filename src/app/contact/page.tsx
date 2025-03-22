'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaBuilding, FaUsers, FaChartLine, FaGlobe, FaShieldAlt, FaPhoneAlt, FaEnvelope, FaCalendarAlt } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    employees: '',
    interests: [],
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      if (checked) {
        return { ...prev, interests: [...prev.interests, value] };
      } else {
        return { ...prev, interests: prev.interests.filter(item => item !== value) };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would submit the form data to a backend
    console.log(formData);
    alert("Thank you for your interest in Nova Tech. Our enterprise team will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-16">
      {/* Hero Section */}
      <div className="w-full bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise <span className="text-cyan-300">Consultation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Connect with our enterprise team to discover how Nova Tech can transform your organization's project management capabilities.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Left Column - Contact Form */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Request Enterprise Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-gray-300 mb-2">First Name*</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-gray-300 mb-2">Last Name*</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Work Email*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-gray-300 mb-2">Company Name*</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="jobTitle" className="block text-gray-300 mb-2">Job Title*</label>
                    <input
                      type="text"
                      id="jobTitle"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="employees" className="block text-gray-300 mb-2">Company Size*</label>
                  <select
                    id="employees"
                    name="employees"
                    value={formData.employees}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="">Select Company Size</option>
                    <option value="1-50">1-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="501-1000">501-1000 employees</option>
                    <option value="1001-5000">1001-5000 employees</option>
                    <option value="5000+">5000+ employees</option>
                  </select>
                </div>
                
                <div>
                  <p className="block text-gray-300 mb-3">Areas of Interest*</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="aiAutomation"
                        name="interests"
                        value="AI Automation"
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-600 rounded"
                      />
                      <label htmlFor="aiAutomation" className="ml-2 text-gray-300">AI Automation</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="enterpriseAnalytics"
                        name="interests"
                        value="Enterprise Analytics"
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-600 rounded"
                      />
                      <label htmlFor="enterpriseAnalytics" className="ml-2 text-gray-300">Enterprise Analytics</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="crossDepartment"
                        name="interests"
                        value="Cross-Department Collaboration"
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-600 rounded"
                      />
                      <label htmlFor="crossDepartment" className="ml-2 text-gray-300">Cross-Department Collaboration</label>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="securityCompliance"
                        name="interests"
                        value="Security & Compliance"
                        onChange={handleCheckboxChange}
                        className="h-4 w-4 text-cyan-500 focus:ring-cyan-500 border-gray-600 rounded"
                      />
                      <label htmlFor="securityCompliance" className="ml-2 text-gray-300">Security & Compliance</label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Tell us about your enterprise needs</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
                  >
                    Submit Request
                  </button>
                </div>
                
                <p className="text-gray-400 text-sm">
                  By submitting this form, you agree to our <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</Link> and consent to Nova Tech contacting you about our products and services.
                </p>
              </form>
            </motion.div>
          </div>
          
          {/* Right Column - Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700 mb-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Enterprise Contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <FaPhoneAlt className="text-cyan-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-medium">Enterprise Sales</h3>
                    <p className="text-gray-300">+1 (888) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <FaEnvelope className="text-cyan-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-medium">Email Us</h3>
                    <p className="text-gray-300">enterprise@novatech.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <FaGlobe className="text-cyan-400" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-white font-medium">Global Offices</h3>
                    <p className="text-gray-300">New York • London • Singapore • Sydney</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-800 rounded-xl p-8 border border-gray-700"
            >
              <div className="flex items-center mb-6">
                <FaCalendarAlt className="text-cyan-400 mr-3 text-xl" />
                <h2 className="text-2xl font-bold text-white">Schedule a Demo</h2>
              </div>
              
              <p className="text-gray-300 mb-6">
                See how Nova Tech can transform your enterprise with a personalized demonstration.
              </p>
              
              <Link 
                href="https://calendly.com/novatech-enterprise"
                target="_blank"
                className="block w-full bg-gray-700 hover:bg-gray-600 text-white text-center font-bold py-3 px-6 rounded-lg transition-colors duration-300"
              >
                Book a Time Slot
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Enterprise Testimonials Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Trusted by <span className="text-cyan-300">Enterprise Leaders</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold mr-4">FC</div>
              <div>
                <h4 className="text-white font-medium">Fortune 500 CIO</h4>
                <p className="text-gray-400 text-sm">Financial Services</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "Nova Tech's enterprise solution enabled us to standardize project management across 12 departments while maintaining the unique workflows each team required."
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold mr-4">HC</div>
              <div>
                <h4 className="text-white font-medium">Global VP of Operations</h4>
                <p className="text-gray-400 text-sm">Healthcare</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "The implementation process was seamless, and the enterprise security features gave our compliance team the confidence to roll out globally."
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold mr-4">TC</div>
              <div>
                <h4 className="text-white font-medium">Chief Technology Officer</h4>
                <p className="text-gray-400 text-sm">Manufacturing</p>
              </div>
            </div>
            <p className="text-gray-300 italic">
              "We've reduced cross-functional project delivery time by 37% thanks to Nova Tech's enterprise collaboration tools and AI-driven insights."
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 