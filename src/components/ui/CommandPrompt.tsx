import React from 'react';
import type { CommandPromptProps } from '../../types';

const CommandPrompt: React.FC<CommandPromptProps> = ({ command, output }) => {
  return (
    <div className="mb-4">
      <div className="flex items-center space-x-2 text-green-400">
        <span className="text-cyan-400">user@fractal-ml:~$</span>
        <span>{command}</span>
      </div>
      {output && <div className="mt-2 pl-4 border-l-2 border-green-400/30">{output}</div>}
    </div>
  );
};

export default CommandPrompt;
