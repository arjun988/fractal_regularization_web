import React from 'react';
import { TerminalWindow } from '../ui';

const ResearchPaperSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <TerminalWindow title="research-paper.pdf">
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 p-4 rounded border border-green-400/30">
                <div className="text-green-400 mb-3">📊 Key Contributions</div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>• Novel fractal-based regularization framework</div>
                  <div>• Box-counting dimension analysis for ML</div>
                  <div>• Dynamic parameter adaptation algorithm</div>
                  <div>• Comprehensive experimental validation</div>
                </div>
              </div>
              
              <div className="bg-gray-900/50 p-4 rounded border border-cyan-400/30">
                <div className="text-cyan-400 mb-3">🎯 Performance Gains</div>
                <div className="space-y-2 text-sm text-gray-300">
                  <div>• 92% overfitting resistance (vs 65% L1, 80% L2)</div>
                  <div>• 15% faster convergence than L2</div>
                  <div>• 88% feature selection accuracy</div>
                  <div>• 90% noise robustness improvement</div>
                </div>
              </div>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default ResearchPaperSection;
