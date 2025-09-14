import React from 'react';
import { Terminal } from 'lucide-react';
import type { TerminalWindowProps } from '../../types';

const TerminalWindow: React.FC<TerminalWindowProps> = ({ 
  title, 
  children, 
  className = '', 
  fullHeight = false, 
  minHeight = 'auto' 
}) => {
  return (
    <div className={`bg-gray-900/95 backdrop-blur-sm border border-green-400/40 rounded-lg overflow-hidden shadow-2xl shadow-green-400/10 terminal-glow ${className}`} style={{ minHeight }}>
      {/* Terminal header */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-3 flex items-center space-x-2 border-b border-green-400/40">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm animate-pulse"></div>
        </div>
        <div className="flex items-center space-x-2 ml-4">
          <Terminal className="h-4 w-4 text-green-400" />
          <span className="text-green-400 font-mono text-sm font-semibold">{title}</span>
        </div>
      </div>
      {/* Terminal content */}
      <div className={`p-4 sm:p-6 font-mono text-green-400 bg-gray-900/80 ${fullHeight ? 'h-96 overflow-y-auto' : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default TerminalWindow;
