import React from 'react';
import { Download } from 'lucide-react';
import { InlineMath } from 'react-katex';
import { TerminalWindow, TerminalTyping } from '../ui';

interface HeroSectionProps {
  isLoaded: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isLoaded }) => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto">
        <TerminalWindow title="fractal-regularization-v1.0.0" className="mb-8">
          <div className="space-y-6">
            {/* Animated startup sequence */}
            <div className="space-y-3">
              <div className="text-cyan-400">
                {isLoaded && <TerminalTyping text="Initializing Fractal Regularization Framework..." speed={30} />}
              </div>
              <div className="text-green-400 text-sm">
                <span className="animate-pulse">●</span> Loading fractal geometry modules...
              </div>
              <div className="text-green-400 text-sm">
                <span className="animate-pulse">●</span> Initializing box-counting algorithms...
              </div>
            </div>

            {/* Enhanced main content */}
            <div className="border-l-4 border-green-400 pl-6 space-y-3">
              <div className="text-3xl font-bold text-green-400 tracking-wider">
                FRACTAL-REGULARIZATION    (1.6K+ downloads)
              </div>
              <div className="text-gray-300 text-lg">
                Revolutionary ML regularization using fractal geometry principles
              </div>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="text-yellow-400 bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30">
                  Status: ACTIVE
                </span>
                <span className="text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/30">
                  Version: 1.0.0
                </span>
                <span className="text-green-400 bg-green-400/10 px-3 py-1 rounded-full border border-green-400/30">
                  License: MIT
                </span>
              </div>
            </div>
            
            {/* Enhanced feature cards */}
            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-4 rounded-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div className="text-cyan-400 font-semibold">Self-Similar Patterns</div>
                </div>
                <div className="text-gray-300 text-sm">Multi-scale structure preservation with hierarchical dependencies</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-4 rounded-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <div className="text-green-400 font-semibold">Box-Counting Analysis</div>
                </div>
                <div className="text-gray-300 text-sm">Advanced fractal dimension computation algorithms</div>
              </div>
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-4 rounded-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/10">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                  <div className="text-yellow-400 font-semibold">Dynamic Adaptation</div>
                </div>
                <div className="text-gray-300 text-sm"><InlineMath math="\alpha(e) = \alpha_0(1 - e/E)" /> intelligent parameter scaling</div>
              </div>
            </div>

            {/* Enhanced action button */}
            <div className="flex justify-center mt-8">
              <a 
                href="https://pypi.org/project/fractal-regularization/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-gradient-to-r from-green-900/50 to-green-800/30 hover:from-green-900/70 hover:to-green-800/50 px-8 py-4 rounded-lg border border-green-400 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20 group"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                <span className="text-base font-medium">pip install fractal-regularization</span>
              </a>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default HeroSection;
