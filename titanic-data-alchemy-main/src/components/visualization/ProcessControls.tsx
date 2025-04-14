
import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, Pause, ChevronsRight } from 'lucide-react';

type ProcessControlsProps = {
  activeProcess: 'raw' | 'cleaning' | 'engineering' | 'output';
  setActiveProcess: (process: 'raw' | 'cleaning' | 'engineering' | 'output') => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
};

export const ProcessControls: React.FC<ProcessControlsProps> = ({
  activeProcess,
  setActiveProcess,
  isPlaying,
  setIsPlaying
}) => {
  const handleProcessChange = (process: 'raw' | 'cleaning' | 'engineering' | 'output') => {
    setActiveProcess(process);
    if (isPlaying) {
      setIsPlaying(false);
    }
  };
  
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mt-6 pt-4 border-t border-blue-900/30">
      <div className="flex space-x-2 mb-4 sm:mb-0">
        <Button 
          variant={activeProcess === 'raw' ? 'default' : 'outline'}
          onClick={() => handleProcessChange('raw')}
          className="text-xs"
        >
          Raw Data
        </Button>
        <Button 
          variant={activeProcess === 'cleaning' ? 'default' : 'outline'}
          onClick={() => handleProcessChange('cleaning')}
          className="text-xs"
        >
          Cleaning
        </Button>
        <Button 
          variant={activeProcess === 'engineering' ? 'default' : 'outline'}
          onClick={() => handleProcessChange('engineering')}
          className="text-xs"
        >
          Feature Engineering
        </Button>
        <Button 
          variant={activeProcess === 'output' ? 'default' : 'outline'}
          onClick={() => handleProcessChange('output')}
          className="text-xs"
        >
          ML Output
        </Button>
      </div>
      
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsPlaying(!isPlaying)}
        className="bg-blue-900/20"
      >
        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
      </Button>
    </div>
  );
};
