
import React from 'react';

type Props = {
  isVisible: boolean;
};

export const MachineLearningOutput: React.FC<Props> = ({ isVisible }) => {
  return (
    <div 
      className={`absolute inset-0 transition-all duration-1000 flex flex-col ${
        isVisible ? 'opacity-100 z-20' : 'opacity-0 z-0'
      }`}
    >
      <h2 className="text-2xl font-bold mb-4 text-dataflow-clean">Machine Learning Ready Data</h2>
      
      <div className="flex-1 flex">
        <div className="flex-1 border border-blue-900/30 bg-ocean-dark/70 rounded-lg p-4">
          <div className="flex h-full">
            {/* Structured input data grid */}
            <div className="w-2/3 pr-4">
              <h3 className="text-lg font-medium mb-2 text-blue-300">Cleaned & Engineered Features</h3>
              
              <div className="h-[calc(100%-2rem)] overflow-hidden bg-ocean-light/20 rounded border border-blue-900/30 p-2">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-blue-900/30">
                      <th className="p-1 text-left text-blue-300">PassengerId</th>
                      <th className="p-1 text-left text-blue-300">Pclass</th>
                      <th className="p-1 text-left text-blue-300">Title</th>
                      <th className="p-1 text-left text-blue-300">Sex</th>
                      <th className="p-1 text-left text-blue-300">AgeGroup</th>
                      <th className="p-1 text-left text-blue-300">FamilySize</th>
                      <th className="p-1 text-left text-blue-300">IsAlone</th>
                      <th className="p-1 text-left text-blue-300">Fare</th>
                      <th className="p-1 text-left text-blue-300">Embarked</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 10 }).map((_, i) => (
                      <tr key={`data-row-${i}`} className="border-b border-blue-900/10 hover:bg-blue-900/20">
                        <td className="p-1">{i + 1}</td>
                        <td className="p-1">{Math.floor(Math.random() * 3) + 1}</td>
                        <td className="p-1">{['Mr', 'Mrs', 'Miss', 'Master'][Math.floor(Math.random() * 4)]}</td>
                        <td className="p-1">{Math.random() > 0.5 ? 'male' : 'female'}</td>
                        <td className="p-1">{['Child', 'Adult', 'Senior'][Math.floor(Math.random() * 3)]}</td>
                        <td className="p-1">{Math.floor(Math.random() * 6)}</td>
                        <td className="p-1">{Math.random() > 0.5 ? '1' : '0'}</td>
                        <td className="p-1">{(Math.random() * 80).toFixed(2)}</td>
                        <td className="p-1">{['S', 'C', 'Q'][Math.floor(Math.random() * 3)]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* ML model visualization */}
            <div className="w-1/3 pl-4 flex flex-col">
              <h3 className="text-lg font-medium mb-2 text-dataflow-feature">Survival Prediction</h3>
              
              <div className="flex-1 flex flex-col justify-center items-center bg-ocean-light/20 rounded border border-blue-900/30 p-4">
                {/* Abstract ML model representation */}
                <div className="relative w-full h-48">
                  {/* Input layer */}
                  <div className="absolute left-0 inset-y-0 w-1/5 flex flex-col justify-around items-center">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={`input-node-${i}`} className="w-4 h-4 rounded-full bg-blue-500/70"></div>
                    ))}
                  </div>
                  
                  {/* Hidden layer */}
                  <div className="absolute left-2/5 inset-y-0 w-1/5 flex flex-col justify-around items-center">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={`hidden-node-${i}`} className="w-4 h-4 rounded-full bg-purple-500/70"></div>
                    ))}
                  </div>
                  
                  {/* Output layer */}
                  <div className="absolute right-0 inset-y-0 w-1/5 flex flex-col justify-around items-center">
                    <div className="w-6 h-6 rounded-full bg-green-500/70 flex items-center justify-center">
                      <span className="text-xs font-bold">✓</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-red-500/70 flex items-center justify-center">
                      <span className="text-xs font-bold">✗</span>
                    </div>
                  </div>
                  
                  {/* Connections */}
                  <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                    <g opacity="0.3">
                      {/* Draw connections from input to hidden layer */}
                      {Array.from({ length: 6 }).map((_, i) => 
                        Array.from({ length: 4 }).map((_, j) => (
                          <line 
                            key={`conn-in-hid-${i}-${j}`}
                            x1="40" y1={20 + i * 28} 
                            x2="160" y2={35 + j * 38}
                            stroke="#a78bfa" 
                            strokeWidth="0.5"
                          />
                        ))
                      )}
                      
                      {/* Draw connections from hidden to output layer */}
                      {Array.from({ length: 4 }).map((_, i) => (
                        <React.Fragment key={`conn-hid-out-${i}`}>
                          <line 
                            x1="160" y1={35 + i * 38} 
                            x2="280" y2="80"
                            stroke="#10b981" 
                            strokeWidth="0.5"
                          />
                          <line 
                            x1="160" y1={35 + i * 38} 
                            x2="280" y2="150"
                            stroke="#ef4444" 
                            strokeWidth="0.5"
                          />
                        </React.Fragment>
                      ))}
                    </g>
                  </svg>
                </div>
                
                <div className="w-full flex justify-between mt-4">
                  <div className="text-xs bg-green-900/30 text-green-300 px-3 py-1 rounded">
                    Survived: 38%
                  </div>
                  <div className="text-xs bg-red-900/30 text-red-300 px-3 py-1 rounded">
                    Not Survived: 62%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
