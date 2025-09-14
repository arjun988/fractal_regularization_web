import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { GraphModal } from './ui';
import { trainingData, validationData, performanceMetrics } from '../data/constants';
import type { ModalState } from '../types';

interface GraphModalsProps {
  modalState: ModalState;
  setModalState: React.Dispatch<React.SetStateAction<ModalState>>;
}

const GraphModals: React.FC<GraphModalsProps> = ({ modalState, setModalState }) => {
  return (
    <>
      <GraphModal 
        isOpen={modalState.trainingLoss} 
        onClose={() => setModalState(prev => ({ ...prev, trainingLoss: false }))}
        title="Training Loss Convergence Analysis"
      >
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trainingData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#065f46" opacity={0.3} />
              <XAxis 
                dataKey="epoch" 
                stroke="#10b981" 
                fontSize={14}
                tick={{ fill: '#10b981' }}
              />
              <YAxis 
                stroke="#10b981" 
                fontSize={14}
                tick={{ fill: '#10b981' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#111827', 
                  border: '1px solid #10b981',
                  borderRadius: '6px',
                  color: '#10b981',
                  fontSize: '14px'
                }} 
              />
              <Legend 
                wrapperStyle={{ color: '#10b981', fontSize: '14px' }}
              />
              <Line type="monotone" dataKey="Fractal Reg" stroke="#10b981" strokeWidth={4} dot={{ fill: '#10b981', strokeWidth: 2, r: 5 }} />
              <Line type="monotone" dataKey="L1 Reg" stroke="#ef4444" strokeWidth={3} dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="L2 Reg" stroke="#f59e0b" strokeWidth={3} dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="No Reg" stroke="#6b7280" strokeWidth={3} dot={{ fill: '#6b7280', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </GraphModal>

      <GraphModal 
        isOpen={modalState.validationLoss} 
        onClose={() => setModalState(prev => ({ ...prev, validationLoss: false }))}
        title="Validation Loss (Generalization Performance)"
      >
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={validationData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#065f46" opacity={0.3} />
              <XAxis 
                dataKey="epoch" 
                stroke="#10b981" 
                fontSize={14}
                tick={{ fill: '#10b981' }}
              />
              <YAxis 
                stroke="#10b981" 
                fontSize={14}
                tick={{ fill: '#10b981' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#111827', 
                  border: '1px solid #10b981',
                  borderRadius: '6px',
                  color: '#10b981',
                  fontSize: '14px'
                }} 
              />
              <Legend 
                wrapperStyle={{ color: '#10b981', fontSize: '14px' }}
              />
              <Line type="monotone" dataKey="Fractal Reg" stroke="#10b981" strokeWidth={4} dot={{ fill: '#10b981', strokeWidth: 2, r: 5 }} />
              <Line type="monotone" dataKey="L1 Reg" stroke="#ef4444" strokeWidth={3} dot={{ fill: '#ef4444', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="L2 Reg" stroke="#f59e0b" strokeWidth={3} dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }} />
              <Line type="monotone" dataKey="No Reg" stroke="#6b7280" strokeWidth={3} dot={{ fill: '#6b7280', strokeWidth: 2, r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </GraphModal>

      <GraphModal 
        isOpen={modalState.performanceMetrics} 
        onClose={() => setModalState(prev => ({ ...prev, performanceMetrics: false }))}
        title="Comparative Performance Analysis"
      >
        <div className="h-96 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={performanceMetrics} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#065f46" opacity={0.3} />
              <XAxis 
                dataKey="metric" 
                stroke="#10b981" 
                fontSize={14}
                tick={{ fill: '#10b981' }}
                angle={-45}
                textAnchor="end"
                height={100}
              />
              <YAxis 
                stroke="#10b981" 
                fontSize={14}
                tick={{ fill: '#10b981' }}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#111827', 
                  border: '1px solid #10b981',
                  borderRadius: '6px',
                  color: '#10b981',
                  fontSize: '14px'
                }} 
              />
              <Legend 
                wrapperStyle={{ color: '#10b981', fontSize: '14px' }}
              />
              <Bar dataKey="Fractal Reg" fill="#10b981" radius={[4, 4, 0, 0]} />
              <Bar dataKey="L1 Reg" fill="#ef4444" radius={[4, 4, 0, 0]} />
              <Bar dataKey="L2 Reg" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </GraphModal>
    </>
  );
};

export default GraphModals;
