import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import { TerminalWindow, CommandPrompt } from '../ui';

interface MathematicsSectionProps {
  isVisible: boolean;
}

const MathematicsSection: React.FC<MathematicsSectionProps> = ({ isVisible }) => {
  return (
    <section 
      id="mathematics" 
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <TerminalWindow title="mathematical-foundation.py">
          <div className="space-y-6">
            <CommandPrompt 
              command="python -c 'import fractal_math; print(fractal_math.box_counting_dimension())'"
              output={
                <div className="bg-gray-900/50 p-4 rounded border border-cyan-400/30">
                  <div className="text-cyan-400 mb-2">Box-Counting Fractal Dimension:</div>
                  <div className="text-2xl text-yellow-400 font-mono mb-2">
                    <BlockMath math="D = \lim_{\varepsilon \to 0} \frac{\log N(\varepsilon)}{\log(1/\varepsilon)}" />
                  </div>
                  <div className="text-gray-300 text-sm">Where <InlineMath math="N(\varepsilon)" /> = number of boxes of size <InlineMath math="\varepsilon" /> to cover the structure</div>
                </div>
              }
            />
            
            <CommandPrompt 
              command="cat equations/fractal_loss.py"
              output={
                <div className="space-y-4">
                  <div className="bg-gray-900/50 p-4 rounded border border-green-400/30">
                    <div className="text-green-400 mb-2">Fractal Regularization Loss:</div>
                    <div className="text-xl text-yellow-400 font-mono mb-2">
                      <BlockMath math="L = \alpha \sum_{i,j} \left(\sum_{j} |W_{ij}|\right)^2 + \beta \sum_{k} \left(\frac{1}{N_k} \sum_{m} B_{km}\right)^{\gamma}" />
                    </div>
                    <div className="text-gray-300 text-sm space-y-1">
                      <div><InlineMath math="\alpha" />: Controls fractal sparsity strength</div>
                      <div><InlineMath math="\beta" />: Controls multi-resolution penalty weight</div>
                      <div><InlineMath math="B_{km}" />: Box counts at resolution <InlineMath math="k" /></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 p-4 rounded border border-purple-400/30">
                    <div className="text-purple-400 mb-2">Dynamic Parameter Adaptation:</div>
                    <div className="space-y-1 text-yellow-400 font-mono">
                      <div><InlineMath math="\alpha(e) = \alpha_0 \left(1 - \frac{e}{E}\right)" /></div>
                      <div><InlineMath math="\beta(e) = \beta_0 \left(1 - \frac{e}{E}\right)" /></div>
                    </div>
                    <div className="text-gray-300 text-sm mt-2">
                      Where <InlineMath math="e" /> = current epoch, <InlineMath math="E" /> = total epochs
                    </div>
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

export default MathematicsSection;
