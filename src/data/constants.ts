// Research paper data - Training loss comparison
export const trainingData = [
  { epoch: 0, 'Fractal Reg': 19.4038, 'L1 Reg': 20.5, 'L2 Reg': 19.8, 'No Reg': 21.2 },
  { epoch: 10, 'Fractal Reg': 5.2, 'L1 Reg': 6.8, 'L2 Reg': 6.1, 'No Reg': 8.5 },
  { epoch: 20, 'Fractal Reg': 2.1, 'L1 Reg': 3.2, 'L2 Reg': 2.8, 'No Reg': 4.2 },
  { epoch: 30, 'Fractal Reg': 1.2, 'L1 Reg': 2.1, 'L2 Reg': 1.8, 'No Reg': 2.9 },
  { epoch: 40, 'Fractal Reg': 0.8, 'L1 Reg': 1.6, 'L2 Reg': 1.4, 'No Reg': 2.1 },
  { epoch: 50, 'Fractal Reg': 0.4088, 'L1 Reg': 1.2, 'L2 Reg': 1.0, 'No Reg': 1.8 },
];

// Research paper data - Validation loss comparison
export const validationData = [
  { epoch: 0, 'Fractal Reg': 18.5788, 'L1 Reg': 19.8, 'L2 Reg': 19.2, 'No Reg': 20.9 },
  { epoch: 10, 'Fractal Reg': 5.8, 'L1 Reg': 7.2, 'L2 Reg': 6.5, 'No Reg': 8.8 },
  { epoch: 20, 'Fractal Reg': 2.4, 'L1 Reg': 3.8, 'L2 Reg': 3.2, 'No Reg': 4.9 },
  { epoch: 30, 'Fractal Reg': 1.5, 'L1 Reg': 2.6, 'L2 Reg': 2.2, 'No Reg': 3.4 },
  { epoch: 40, 'Fractal Reg': 1.1, 'L1 Reg': 2.0, 'L2 Reg': 1.7, 'No Reg': 2.8 },
  { epoch: 50, 'Fractal Reg': 0.4500, 'L1 Reg': 1.5, 'L2 Reg': 1.2, 'No Reg': 2.2 },
];

// Performance metrics from the paper
export const performanceMetrics = [
  { metric: 'Convergence Speed', 'Fractal Reg': 85, 'L1 Reg': 70, 'L2 Reg': 75 },
  { metric: 'Overfitting Resistance', 'Fractal Reg': 92, 'L1 Reg': 65, 'L2 Reg': 80 },
  { metric: 'Feature Selection', 'Fractal Reg': 88, 'L1 Reg': 90, 'L2 Reg': 45 },
  { metric: 'Noise Robustness', 'Fractal Reg': 90, 'L1 Reg': 60, 'L2 Reg': 70 },
];

export const alphaResults = [
  { alpha: '0.01', training: 0.4088, validation: 0.4500 },
  { alpha: '0.05', training: 0.5247, validation: 0.5264 },
  { alpha: '0.1', training: 0.5818, validation: 0.5914 },
  { alpha: '0.5', training: 6.4836, validation: 6.4862 },
];
