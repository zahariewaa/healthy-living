import React from 'react';
import { Heart, Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-green-500" />
              <span className="ml-2 text-lg font-semibold text-gray-800">Healthy Living</span>
            </div>
            <p className="mt-2 text-sm text-gray-500 text-center md:text-left">
              Empowering you to live your healthiest life through nutrition, exercise, and mental wellness.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Connect With Us</h3>
            <div className="flex space-x-6 mt-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors duration-200">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-sm font-semibold text-gray-600 tracking-wider uppercase">Newsletter</h3>
            <p className="mt-2 text-sm text-gray-500 text-center md:text-right">
              Subscribe to our newsletter for health tips and updates.
            </p>
            <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="px-4 py-2 bg-green-500 text-white rounded-r-md hover:bg-green-600 transition-colors duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Healthy Living. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;