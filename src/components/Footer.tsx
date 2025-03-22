'use client';

import Link from 'next/link';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="text-cyan-400 font-bold text-2xl">
              Nova<span className="text-purple-400">Tech</span>
            </Link>
            <p className="text-gray-400 mt-4 max-w-md">
              Enterprise-grade AI-powered project management platform that transforms how organizations handle complex workflows, collaborate across departments, and make data-driven decisions.
            </p>
            <div className="flex mt-6 space-x-4">
              <Link href="https://twitter.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <FaTwitter className="text-xl" />
              </Link>
              <Link href="https://linkedin.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <FaLinkedin className="text-xl" />
              </Link>
              <Link href="https://github.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <FaGithub className="text-xl" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <FaInstagram className="text-xl" />
              </Link>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#features" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/security" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Security
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/documentation" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Certification Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 pb-8 border-b border-gray-800">
          <div className="flex items-center bg-gray-800 py-2 px-4 rounded-lg">
            <span className="text-gray-400 text-sm">SOC 2 Type II Certified</span>
          </div>
          <div className="flex items-center bg-gray-800 py-2 px-4 rounded-lg">
            <span className="text-gray-400 text-sm">GDPR Compliant</span>
          </div>
          <div className="flex items-center bg-gray-800 py-2 px-4 rounded-lg">
            <span className="text-gray-400 text-sm">ISO 27001 Certified</span>
          </div>
          <div className="flex items-center bg-gray-800 py-2 px-4 rounded-lg">
            <span className="text-gray-400 text-sm">HIPAA Compliant</span>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nova Tech. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/cookies" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
              Cookies
            </Link>
            <p className="text-gray-500 text-sm">
              Designed by <Link href="https://luke-eddy.com" className="text-cyan-400 hover:text-purple-400 transition-colors">Luke Eddy</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 