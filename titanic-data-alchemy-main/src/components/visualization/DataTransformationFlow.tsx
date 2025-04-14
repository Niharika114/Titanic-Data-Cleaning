
import React from 'react';

type Props = {
  activeProcess: 'raw' | 'cleaning' | 'engineering' | 'output';
};

export const DataTransformationFlow: React.FC<Props> = ({ activeProcess }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      {/* Raw data section - always visible */}
      <div className={`transition-all duration-1000 ${activeProcess === 'raw' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
        <h2 className="text-2xl font-bold mb-4 text-dataflow-raw">Raw Titanic Data</h2>
        
        <div className="relative h-36 border border-blue-900/30 bg-ocean-dark/70 rounded-lg p-4 mb-8">
          {/* Vintage ledger graphic */}
          <div className="absolute left-4 top-4 bottom-4 w-24 bg-yellow-900/20 border border-yellow-900/40 rounded">
            <div className="h-full w-full flex flex-col justify-around px-2 py-3">
              <div className="h-0.5 bg-yellow-900/30"></div>
              <div className="h-0.5 bg-yellow-900/30"></div>
              <div className="h-0.5 bg-yellow-900/30"></div>
              <div className="h-0.5 bg-yellow-900/30"></div>
            </div>
          </div>
          
          {/* Raw data particles */}
          <div className="absolute left-32 inset-y-4 right-4">
            <div className="relative h-full">
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={`raw-particle-${i}`}
                  className="data-particle" 
                  style={{
                    width: `${Math.random() * 12 + 4}px`,
                    height: `${Math.random() * 12 + 4}px`,
                    left: `${Math.random() * 80}%`,
                    top: `${Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
              
              {/* Missing data indicators */}
              {Array.from({ length: 4 }).map((_, i) => (
                <div 
                  key={`missing-data-${i}`}
                  className="data-particle missing-data"
                  style={{
                    width: '14px',
                    height: '14px',
                    left: `${20 + Math.random() * 70}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                />
              ))}
              
              {/* Data streams */}
              <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2">
                <div className="data-stream data-stream-raw">
                  <div className="data-flow data-flow-raw"></div>
                </div>
                <div className="data-stream data-stream-raw">
                  <div className="data-flow data-flow-raw" style={{ animationDelay: '1s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Data cleaning section */}
      <div className={`transition-all duration-1000 ${activeProcess === 'cleaning' ? 'opacity-100 scale-100' : 'opacity-50 scale-95'}`}>
        <h2 className="text-2xl font-bold mb-4 text-dataflow-clean">Data Cleaning</h2>
        
        <div className="relative h-36 border border-blue-900/30 bg-ocean-dark/70 rounded-lg p-4 mb-8">
          {/* Cleaning tools */}
          <div className="absolute left-4 top-4 bottom-4 w-24 flex flex-col justify-around items-center">
            <div className="w-12 h-12 relative">
              <div className="absolute inset-0 rounded-full border border-dataflow-clean rotate-45 opacity-80"></div>
              <div className="absolute inset-2 rounded-full border border-dataflow-clean -rotate-45 opacity-80"></div>
              <div className="absolute inset-4 bg-dataflow-clean/30 rounded-full animate-pulse-glow"></div>
            </div>
            
            <div className="w-14 h-8 rounded-full border border-dataflow-clean flex items-center justify-center">
              <div className="w-10 h-4 bg-dataflow-clean/30 rounded-full animate-pulse-glow"></div>
            </div>
          </div>
          
          {/* Data being cleaned */}
          <div className="absolute left-32 inset-y-4 right-4">
            <div className="relative h-full">
              {Array.from({ length: 8 }).map((_, i) => (
                <div 
                  key={`clean-particle-${i}`}
                  className="data-particle" 
                  style={{
                    width: `${Math.random() * 8 + 6}px`,
                    height: `${Math.random() * 8 + 6}px`,
                    left: `${Math.random() * 80}%`,
                    top: `${Math.random() * 80}%`,
                    backgroundColor: Math.random() > 0.5 ? 'rgb(var(--dataflow-raw))' : 'rgb(var(--dataflow-clean))',
                    animationDelay: `${Math.random() * 2}s`,
                  }}
                />
              ))}
              
              {/* Holographic tool effects */}
              <div 
                className="holographic-glow" 
                style={{ width: '40px', height: '40px', left: '20%', top: '40%' }}
              />
              
              <div 
                className="holographic-glow" 
                style={{ width: '50px', height: '30px', left: '60%', top: '30%' }}
              />
              
              {/* Data streams */}
              <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2">
                <div className="data-stream data-stream-raw">
                  <div className="data-flow data-flow-raw"></div>
                </div>
                <div className="data-stream data-stream-clean">
                  <div className="data-flow data-flow-clean"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Only the output stream is always visible at the bottom */}
      <div className="mb-4">
        <div className="data-stream data-stream-feature h-2">
          <div className={`data-flow data-flow-feature ${activeProcess === 'output' ? 'opacity-100' : 'opacity-50'}`}></div>
        </div>
      </div>
    </div>
  );
};
