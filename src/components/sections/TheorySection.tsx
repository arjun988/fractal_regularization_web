import React from 'react';
import { TerminalWindow, CommandPrompt } from '../ui';

interface TheorySectionProps {
  isVisible: boolean;
}

const TheorySection: React.FC<TheorySectionProps> = ({ isVisible }) => {
  return (
    <section 
      id="theory" 
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <TerminalWindow title="theoretical-foundation.md">
          <div className="space-y-6">
            <CommandPrompt 
              command="cat theory/fractal_properties.txt"
              output={
                <div className="space-y-4">
                  <div className="text-yellow-400 font-bold"># Fractal Properties in Machine Learning</div>
                  <div className="space-y-2 text-gray-300">
                    <div><span className="text-cyan-400">Self-Similarity:</span> Patterns repeat at multiple scales</div>
                    <div><span className="text-cyan-400">Multi-Resolution:</span> Captures hierarchical dependencies</div>
                    <div><span className="text-cyan-400">Non-Integer Dimensions:</span> Fractional complexity measurement</div>
                  </div>
                </div>
              }
            />
            
            <CommandPrompt 
              command="cat papers/abstract.txt"
              output={
                <div className="space-y-4">
                  <div className="text-yellow-400 font-bold"># Abstract</div>
                  <div className="text-gray-300 leading-relaxed">
                    This introduces a novel regularization technique for machine learning models based on fractal geometry principles. 
                    Our approach leverages the self-similar and multi-resolution properties of fractals to create more robust and generalizable models. 
                    The fractal regularization method demonstrates superior performance compared to traditional L1 and L2 regularization across multiple datasets, 
                    showing 92% overfitting resistance and improved convergence rates.
                  </div>
                  <div className="text-cyan-400 text-sm">
                    Keywords: Fractal Geometry, Machine Learning, Regularization, Overfitting, Multi-resolution Analysis
                  </div>
                </div>
              }
            />
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default TheorySection;
