'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaShieldAlt, FaLock, FaUserLock, FaServer, FaFileContract, FaGlobe } from 'react-icons/fa';

export default function Security() {
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
              Enterprise-Grade <span className="text-cyan-300">Security</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Nova Tech prioritizes the security, privacy, and compliance needs of global enterprises with industry-leading practices and certifications.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Security Features */}
      <div className="container mx-auto px-4 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16 text-white"
        >
          Our <span className="text-cyan-300 underline decoration-2 underline-offset-8 decoration-cyan-500">Security Framework</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-xl border border-gray-700"
          >
            <div className="w-14 h-14 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
              <FaLock className="text-cyan-400 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Data Security</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">End-to-end AES 256-bit encryption</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Secure data processing pipelines</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Regular penetration testing</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Dedicated security operations team</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 p-8 rounded-xl border border-gray-700"
          >
            <div className="w-14 h-14 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
              <FaUserLock className="text-cyan-400 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Access Controls</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">SSO/SAML/OIDC integration</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Multi-factor authentication</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Role-based access controls</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Comprehensive audit logs</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-xl border border-gray-700"
          >
            <div className="w-14 h-14 bg-cyan-500/20 rounded-full flex items-center justify-center mb-6">
              <FaServer className="text-cyan-400 text-2xl" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Infrastructure</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">99.99% uptime guarantee</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Distributed systems architecture</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Multiple regional data centers</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-cyan-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300">Automated backup and recovery</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Certifications */}
      <div className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-16 text-white"
          >
            Compliance <span className="text-cyan-300 underline decoration-2 underline-offset-8 decoration-cyan-500">Certifications</span>
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-700 p-6 rounded-xl flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                <FaShieldAlt className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-white font-bold mb-2">SOC 2 Type II</h3>
              <p className="text-gray-300 text-sm">Independently audited controls for security, availability, and confidentiality</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-700 p-6 rounded-xl flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                <FaGlobe className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-white font-bold mb-2">GDPR</h3>
              <p className="text-gray-300 text-sm">Full compliance with European data protection regulations</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-700 p-6 rounded-xl flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                <FaFileContract className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-white font-bold mb-2">ISO 27001</h3>
              <p className="text-gray-300 text-sm">International standard for information security management</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gray-700 p-6 rounded-xl flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mb-4">
                <FaShieldAlt className="text-cyan-400 text-2xl" />
              </div>
              <h3 className="text-white font-bold mb-2">HIPAA</h3>
              <p className="text-gray-300 text-sm">Healthcare information privacy and security compliance</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">Ready to discuss your enterprise security requirements?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Our security experts can provide detailed information about our security architecture and compliance frameworks.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Contact Security Team
            </Link>
            <Link
              href="/security/whitepaper"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              Download Security Whitepaper
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 