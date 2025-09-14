export interface ModalState {
  trainingLoss: boolean;
  validationLoss: boolean;
  performanceMetrics: boolean;
}

export interface TerminalTypingProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
}

export interface TerminalWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  fullHeight?: boolean;
  minHeight?: string;
}

export interface CommandPromptProps {
  command: string;
  output?: React.ReactNode;
}

export interface GraphModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}
