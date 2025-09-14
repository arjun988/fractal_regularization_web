import React from 'react';
import { Code } from 'lucide-react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-sm border-b border-green-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-400 animate-pulse"></div>
              <Code className="h-6 w-6 text-green-400" />
            </div>
            <span className="text-sm sm:text-lg font-bold text-green-400">
              fractal-regularization@1.0.0
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-sm">
            <a href="#theory" className="text-green-300 hover:text-green-100 transition-colors">./theory</a>
            <a href="#mathematics" className="text-green-300 hover:text-green-100 transition-colors">./math</a>
            <a href="#results" className="text-green-300 hover:text-green-100 transition-colors">./results</a>
            <a href="#install" className="text-green-300 hover:text-green-100 transition-colors">./install</a>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-green-400 hover:text-green-300 transition-colors">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
