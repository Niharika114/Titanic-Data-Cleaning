
import React, { useEffect, useState } from 'react';
import { Ship } from './visualization/Ship';
import { DataTransformationFlow } from './visualization/DataTransformationFlow';
import { FeatureEngineeringSection } from './visualization/FeatureEngineeringSection';
import { MachineLearningOutput } from './visualization/MachineLearningOutput';
import { ProcessControls } from './visualization/ProcessControls';
import { ProcessInfo } from './visualization/ProcessInfo';

const TitanicVisualization = () => {
  const [activeProcess, setActiveProcess] = useState<'raw' | 'cleaning' | 'engineering' | 'output'>('raw');
  const [isPlaying, setIsPlaying] = useState(true);
  
  useEffect(() => {
    // Auto-advance through processes for initial demo
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setActiveProcess(prev => {
        if (prev === 'raw') return 'cleaning';
        if (prev === 'cleaning') return 'engineering';
        if (prev === 'engineering') return 'output';
        return 'raw';
      });
    }, 8000);
    
    return () => clearInterval(interval);
  }, [isPlaying]);
  
  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-ocean-dark via-ocean to-ocean-light">
      {/* Ship silhouette in background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-0">
        <Ship />
      </div>
      
      {/* Distant icebergs */}
      <div className="absolute right-10 bottom-20 w-24 h-24 bg-blue-100 opacity-10 rounded-t-3xl rotate-12"></div>
      <div className="absolute right-28 bottom-16 w-16 h-20 bg-blue-100 opacity-10 rounded-t-2xl -rotate-6"></div>
      
      {/* Grid backdrop */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBoLTQweiIvPjxwYXRoIGQ9Ik00MCAyMGgtNDBNMjAgMHY0MCIgc3Ryb2tlPSIjMTcyYTQ1IiBvcGFjaXR5PSIuMiIgc3Ryb2tlLXdpZHRoPSIuNSIvPjwvZz48L3N2Zz4=')] opacity-20 z-0"></div>
      
      <div className="relative z-10 flex flex-col h-full container mx-auto px-4 py-8">
        <header className="mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dataflow-clean to-dataflow-feature">
            Titanic Data Alchemy
          </h1>
          <p className="text-lg text-blue-200 opacity-80">
            Visualizing the transformation of raw Titanic data into machine learning gold
          </p>
        </header>
        
        <div className="flex-1 flex flex-col lg:flex-row gap-6">
          {/* Main visualization area */}
          <div className="flex-1 flex flex-col border border-blue-900/30 bg-ocean-dark/50 rounded-lg backdrop-blur-sm p-6 overflow-hidden">
            <div className="flex-1 relative">
              <DataTransformationFlow activeProcess={activeProcess} />
              <FeatureEngineeringSection isVisible={activeProcess === 'engineering'} />
              <MachineLearningOutput isVisible={activeProcess === 'output'} />
            </div>
            
            <ProcessControls 
              activeProcess={activeProcess}
              setActiveProcess={setActiveProcess}
              isPlaying={isPlaying}
              setIsPlaying={setIsPlaying}
            />
          </div>
          
          {/* Information panel */}
          <div className="lg:w-1/3 border border-blue-900/30 bg-ocean-dark/50 rounded-lg backdrop-blur-sm p-6">
            <ProcessInfo activeProcess={activeProcess} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitanicVisualization;
