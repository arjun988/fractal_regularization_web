import React from 'react';
import { Download } from 'lucide-react';
import { TerminalWindow, CommandPrompt } from '../ui';

interface InstallationSectionProps {
  isVisible: boolean;
}

const InstallationSection: React.FC<InstallationSectionProps> = ({ isVisible }) => {
  return (
    <section 
      id="install" 
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gray-950/50 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <TerminalWindow title="installation-guide.sh">
          <div className="space-y-6">
            <CommandPrompt 
              command="pip install fractal-regularization"
              output={
                <div className="space-y-2">
                  <div className="text-yellow-400">Collecting fractal-regularization...</div>
                  <div className="text-green-400">✓ Successfully installed fractal-regularization-1.0.0</div>
                  <div className="text-green-400">✓ Dependencies: numpy, tensorflow, scikit-learn</div>
                </div>
              }
            />
            
            <CommandPrompt 
              command="cat examples/quick_start.py"
              output={
                <pre className="text-sm text-gray-300 overflow-x-auto">
{`# Quick Start Example
from fractal_regularization import FractalRegularizer
import tensorflow as tf

# Initialize with research-validated parameters
fractal_reg = FractalRegularizer(
    alpha=0.01,        # Optimal from paper
    beta=0.001,        # Multi-resolution weight
    resolution_factor=2 # Scaling depth
)

# Apply to your neural network
model = tf.keras.Sequential([
    tf.keras.layers.Dense(128, activation='relu',
                         kernel_regularizer=fractal_reg),
    tf.keras.layers.Dense(64, activation='relu',
                         kernel_regularizer=fractal_reg),
    tf.keras.layers.Dense(1, activation='sigmoid')
])

# Compile with dynamic adaptation
model.compile(
    optimizer='adam',
    loss='binary_crossentropy',
    metrics=['accuracy']
)

# Train with fractal regularization
model.fit(X_train, y_train, 
         validation_data=(X_val, y_val),
         epochs=50)`}
                </pre>
              }
            />
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://pypi.org/project/fractal-regularization/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-900/50 hover:bg-green-900/70 px-4 py-2 rounded border border-green-400 transition-colors"
              >
                <Download className="h-4 w-4" />
                <span className="text-sm sm:text-base">pip install fractal-regularization</span>
              </a>
            </div>
          </div>
        </TerminalWindow>
      </div>
    </section>
  );
};

export default InstallationSection;
