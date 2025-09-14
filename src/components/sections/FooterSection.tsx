import React from 'react';
import { TerminalWindow } from '../ui';

const FooterSection: React.FC = () => {
  return (
    <footer className="bg-gray-950 border-t border-green-400/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <TerminalWindow title="contact-info.txt">
          <div className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-green-400 mb-3">🔬 Research Team</div>
                <div className="space-y-1 text-sm text-gray-300">
                  <div>Arjun Shukla - AI-ML Engineer</div>
                </div>
              </div>
              
              <div>
                <div className="text-cyan-400 mb-3">📧 Contact</div>
                <div className="space-y-1 text-sm text-gray-300">
                  <div>arjunshukla6558@gmail.com</div>
                  <div>
                    <a 
                      href="https://github.com/arjun988/fractal_regularization" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors underline"
                    >
                      Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="border-t border-green-400/30 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 animate-pulse"></div>
                  <span className="text-green-400 font-mono">fractal-regularization@1.0.0</span>
                </div>
                
                <div className="flex items-center space-x-6 text-sm">
                  <a href="#" className="text-green-300 hover:text-green-100 transition-colors">License: MIT</a>
                  <a href="#" className="text-green-300 hover:text-green-100 transition-colors">Privacy</a>
                  <a href="#" className="text-green-300 hover:text-green-100 transition-colors">Terms</a>
                </div>
              </div>
              
              <div className="text-center text-gray-400 text-sm mt-4">
                © 2024 Fractal Regularization Research Team. All rights reserved.
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </footer>
  );
};

export default FooterSection;
