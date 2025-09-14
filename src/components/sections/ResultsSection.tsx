import React from 'react';
import { Maximize2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { InlineMath } from 'react-katex';
import { TerminalWindow, CommandPrompt } from '../ui';
import { trainingData, validationData, performanceMetrics, alphaResults } from '../../data/constants';
import type { ModalState } from '../../types';

interface ResultsSectionProps {
  isVisible: boolean;
  modalState: ModalState;
  setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const ResultsSection: React.FC<ResultsSectionProps> = ({ isVisible, modalState, setModalState }) => {
  return (
    <section 
      id="results" 
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="max-w-7xl mx-auto space-y-8">
        <TerminalWindow title="experimental-results.log">
          <CommandPrompt 
            command="python benchmark.py --dataset housing --metrics all"
            output={
              <div className="text-yellow-400">
                Running comprehensive benchmark on Housing Dataset...
                <br />Comparing: Fractal, L1, L2, No Regularization
                <br />Metrics: Training Loss, Validation Loss, Performance Scores
              </div>
            }
          />
        </TerminalWindow>

        {/* Training Loss Chart */}
        <TerminalWindow title="training-loss-comparison.plt" minHeight="400px">
          <div className="flex items-center justify-between mb-4">
            <div className="text-cyan-400">📊 Training Loss Convergence Analysis</div>
            <button 
              onClick={() => setModalState(prev => ({ ...prev, trainingLoss: true }))}
              className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors text-sm"
            >
              <Maximize2 className="h-4 w-4" />
              <span>View Full</span>
            </button>
          </div>
          <div className="h-64 w-full cursor-pointer" onClick={() => setModalState(prev => ({ ...prev, trainingLoss: true }))}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={trainingData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#065f46" opacity={0.3} />
                <XAxis 
                  dataKey="epoch" 
                  stroke="#10b981" 
                  fontSize={12}
                  tick={{ fill: '#10b981' }}
                />
                <YAxis 
                  stroke="#10b981" 
                  fontSize={12}
                  tick={{ fill: '#10b981' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111827', 
                    border: '1px solid #10b981',
                    borderRadius: '6px',
                    color: '#10b981',
                    fontSize: '12px'
                  }} 
                />
                <Legend 
                  wrapperStyle={{ color: '#10b981', fontSize: '12px' }}
                />
                <Line type="monotone" dataKey="Fractal Reg" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }} />
                <Line type="monotone" dataKey="L1 Reg" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444', strokeWidth: 2, r: 3 }} />
                <Line type="monotone" dataKey="L2 Reg" stroke="#f59e0b" strokeWidth={2} dot={{ fill: '#f59e0b', strokeWidth: 2, r: 3 }} />
                <Line type="monotone" dataKey="No Reg" stroke="#6b7280" strokeWidth={2} dot={{ fill: '#6b7280', strokeWidth: 2, r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </TerminalWindow>

        {/* Validation Loss Chart */}
        <TerminalWindow title="validation-loss-comparison.plt" minHeight="400px">
          <div className="flex items-center justify-between mb-4">
            <div className="text-cyan-400">📊 Validation Loss (Generalization Performance)</div>
            <button 
              onClick={() => setModalState(prev => ({ ...prev, validationLoss: true }))}
              className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors text-sm"
            >
              <Maximize2 className="h-4 w-4" />
              <span>View Full</span>
            </button>
          </div>
          <div className="h-64 w-full cursor-pointer" onClick={() => setModalState(prev => ({ ...prev, validationLoss: true }))}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={validationData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#065f46" opacity={0.3} />
                <XAxis 
                  dataKey="epoch" 
                  stroke="#10b981" 
                  fontSize={12}
                  tick={{ fill: '#10b981' }}
                />
                <YAxis 
                  stroke="#10b981" 
                  fontSize={12}
                  tick={{ fill: '#10b981' }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111827', 
                    border: '1px solid #10b981',
                    borderRadius: '6px',
                    color: '#10b981',
                    fontSize: '12px'
                  }} 
                />
                <Legend 
                  wrapperStyle={{ color: '#10b981', fontSize: '12px' }}
                />
                <Line type="monotone" dataKey="Fractal Reg" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }} />
                <Line type="monotone" dataKey="L1 Reg" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444', strokeWidth: 2, r: 3 }} />
                <Line type="monotone" dataKey="L2 Reg" stroke="#f59e0b" strokeWidth={2} dot={{ fill: '#f59e0b', strokeWidth: 2, r: 3 }} />
                <Line type="monotone" dataKey="No Reg" stroke="#6b7280" strokeWidth={2} dot={{ fill: '#6b7280', strokeWidth: 2, r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </TerminalWindow>

        {/* Performance Metrics */}
        <TerminalWindow title="performance-metrics.dat" minHeight="400px">
          <div className="flex items-center justify-between mb-4">
            <div className="text-cyan-400">📊 Comparative Performance Analysis</div>
            <button 
              onClick={() => setModalState(prev => ({ ...prev, performanceMetrics: true }))}
              className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors text-sm"
            >
              <Maximize2 className="h-4 w-4" />
              <span>View Full</span>
            </button>
          </div>
          <div className="h-64 w-full cursor-pointer" onClick={() => setModalState(prev => ({ ...prev, performanceMetrics: true }))}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={performanceMetrics} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#065f46" opacity={0.3} />
                <XAxis 
                  dataKey="metric" 
                  stroke="#10b981" 
                  fontSize={12}
                  tick={{ fill: '#10b981' }}
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis 
                  stroke="#10b981" 
                  fontSize={12}
                  tick={{ fill: '#10b981' }}
                  domain={[0, 100]}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#111827', 
                    border: '1px solid #10b981',
                    borderRadius: '6px',
                    color: '#10b981',
                    fontSize: '12px'
                  }} 
                />
                <Legend 
                  wrapperStyle={{ color: '#10b981', fontSize: '12px' }}
                />
                <Bar dataKey="Fractal Reg" fill="#10b981" radius={[2, 2, 0, 0]} />
                <Bar dataKey="L1 Reg" fill="#ef4444" radius={[2, 2, 0, 0]} />
                <Bar dataKey="L2 Reg" fill="#f59e0b" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </TerminalWindow>

        {/* Alpha Parameter Analysis */}
        <TerminalWindow title="hyperparameter-analysis.csv">
          <CommandPrompt 
            command="cat results/alpha_parameter_study.csv"
            output={
              <div className="space-y-4">
                <div className="text-yellow-400">Alpha Parameter Impact Analysis:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="text-cyan-400 text-sm">Training Loss by Alpha:</div>
                    {alphaResults.map(result => (
                      <div key={result.alpha} className="flex justify-between text-sm">
                        <span className="text-gray-300"><InlineMath math={`\\alpha=${result.alpha}`} />:</span>
                        <span className={result.alpha === '0.01' ? 'text-green-400' : 'text-gray-400'}>
                          {result.training}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="text-cyan-400 text-sm">Validation Loss by Alpha:</div>
                    {alphaResults.map(result => (
                      <div key={result.alpha} className="flex justify-between text-sm">
                        <span className="text-gray-300"><InlineMath math={`\\alpha=${result.alpha}`} />:</span>
                        <span className={result.alpha === '0.01' ? 'text-green-400' : 'text-gray-400'}>
                          {result.validation}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-green-400 text-sm mt-4">
                  ✓ Optimal: <InlineMath math="\alpha=0.01" /> provides best stability and lowest final loss
                </div>
              </div>
            }
          />
        </TerminalWindow>
      </div>
    </section>
  );
};

export default ResultsSection;
