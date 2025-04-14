
import React from 'react';

type Props = {
  isVisible: boolean;
};

export const FeatureEngineeringSection: React.FC<Props> = ({ isVisible }) => {
  return (
    <div 
      className={`absolute inset-0 transition-all duration-1000 flex flex-col ${
        isVisible ? 'opacity-100 z-20' : 'opacity-0 z-0'
      }`}
    >
      <h2 className="text-2xl font-bold mb-4 text-dataflow-feature">Feature Engineering</h2>
      
      <div className="flex-1 grid grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Feature 1: Family Size from SibSp + Parch */}
        <div className="border border-blue-900/30 bg-ocean-dark/70 rounded-lg p-4">
          <h3 className="text-lg font-medium mb-2 text-dataflow-feature">Family Size</h3>
          
          <div className="relative h-32">
            {/* Gears visualization */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <svg width="60" height="60" className="animate-rotate-gear">
                  <circle cx="30" cy="30" r="25" fill="none" stroke="#ffcc66" strokeWidth="1" />
                  <path d="M30,5 L33,10 L27,10 Z" fill="#ffcc66" />
                  <path d="M30,55 L33,50 L27,50 Z" fill="#ffcc66" />
                  <path d="M5,30 L10,33 L10,27 Z" fill="#ffcc66" />
                  <path d="M55,30 L50,33 L50,27 Z" fill="#ffcc66" />
                </svg>
                <div className="absolute -top-4 -left-4">
                  <div className="text-xs bg-dataflow-raw/20 px-2 py-1 rounded">SibSp</div>
                </div>
                <div className="absolute -bottom-4 -right-4">
                  <div className="text-xs bg-dataflow-raw/20 px-2 py-1 rounded">Parch</div>
                </div>
              </div>
            </div>
            
            {/* Output arrow */}
            <div className="absolute bottom-0 right-0">
              <div className="flex items-center">
                <div className="h-0.5 w-6 bg-dataflow-feature"></div>
                <div className="text-dataflow-feature">→</div>
                <div className="text-xs bg-dataflow-feature/20 px-2 py-1 rounded ml-1">FamilySize</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature 2: Title from Name */}
        <div className="border border-blue-900/30 bg-ocean-dark/70 rounded-lg p-4">
          <h3 className="text-lg font-medium mb-2 text-dataflow-feature">Title Extraction</h3>
          
          <div className="relative h-32">
            {/* Light beam refraction */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-24 w-full">
                {/* Input beam */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 h-4 w-16 bg-gradient-to-r from-dataflow-raw to-dataflow-raw/30 rounded-r-full"></div>
                
                {/* Prism */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16">
                  <div className="w-full h-full transform rotate-45 border border-white/30 bg-white/5"></div>
                </div>
                
                {/* Output beams */}
                <div className="absolute right-0 h-full flex flex-col justify-around">
                  <div className="h-2 w-12 bg-blue-400/50 rounded-l-full"></div>
                  <div className="h-2 w-12 bg-purple-400/50 rounded-l-full"></div>
                  <div className="h-2 w-12 bg-green-400/50 rounded-l-full"></div>
                </div>
                
                <div className="absolute top-0 right-0">
                  <div className="text-xs bg-blue-400/20 px-2 py-1 rounded">Mr.</div>
                </div>
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                  <div className="text-xs bg-purple-400/20 px-2 py-1 rounded">Mrs.</div>
                </div>
                <div className="absolute bottom-0 right-0">
                  <div className="text-xs bg-green-400/20 px-2 py-1 rounded">Miss</div>
                </div>
                
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1">
                  <div className="text-xs bg-dataflow-raw/20 px-2 py-1 rounded">Name</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Feature 3: AgeGroup from Age */}
        <div className="border border-blue-900/30 bg-ocean-dark/70 rounded-lg p-4">
          <h3 className="text-lg font-medium mb-2 text-dataflow-feature">Age Categorization</h3>
          
          <div className="relative h-32">
            {/* Forging particles into categories */}
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 relative">
                {/* Input particles */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div 
                    key={`age-particle-${i}`}
                    className="absolute rounded-full bg-dataflow-raw w-3 h-3"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: `${10 + Math.random() * 80}%`,
                      opacity: 0.5 + Math.random() * 0.5
                    }}
                  />
                ))}
              </div>
              
              {/* Output categories */}
              <div className="h-10 flex justify-around items-center">
                <div className="h-6 w-12 bg-dataflow-feature/40 rounded text-xs flex items-center justify-center">Child</div>
                <div className="h-6 w-12 bg-dataflow-feature/40 rounded text-xs flex items-center justify-center">Adult</div>
                <div className="h-6 w-12 bg-dataflow-feature/40 rounded text-xs flex items-center justify-center">Senior</div>
              </div>
            </div>
            
            {/* Forging metaphor */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-0.5 bg-yellow-500/50 animate-pulse-glow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
