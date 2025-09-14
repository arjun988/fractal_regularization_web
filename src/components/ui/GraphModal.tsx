import React from 'react';
import { X, Maximize2 } from 'lucide-react';
import type { GraphModalProps } from '../../types';

const GraphModal: React.FC<GraphModalProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  children 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gray-900/95 border border-green-400/40 rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl shadow-green-400/20">
        {/* Modal header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-700 px-6 py-4 flex items-center justify-between border-b border-green-400/40">
          <div className="flex items-center space-x-3">
            <Maximize2 className="h-5 w-5 text-green-400" />
            <span className="text-green-400 font-mono text-lg font-semibold">{title}</span>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-green-400 transition-colors p-1"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        {/* Modal content */}
        <div className="p-6 bg-gray-900/80">
          {children}
        </div>
      </div>
    </div>
  );
};

export default GraphModal;
