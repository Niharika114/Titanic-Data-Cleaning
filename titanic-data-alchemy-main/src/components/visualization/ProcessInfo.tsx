
import React from 'react';

type ProcessInfoProps = {
  activeProcess: 'raw' | 'cleaning' | 'engineering' | 'output';
};

export const ProcessInfo: React.FC<ProcessInfoProps> = ({ activeProcess }) => {
  const getProcessInfo = () => {
    switch (activeProcess) {
      case 'raw':
        return {
          title: 'Raw Titanic Dataset',
          description: 'The raw Titanic dataset contains information about passengers including their survival status, age, gender, ticket class, fare, cabin, and embarkation point. However, it has many challenges:',
          bulletPoints: [
            'Missing values in Age, Cabin, and Embarked columns',
            'Inconsistent format in Name field',
            'Outliers in Fare values',
            'No standardization of categorical values'
          ]
        };
      case 'cleaning':
        return {
          title: 'Data Cleaning Process',
          description: 'Before analysis, we need to clean the data to handle missing values and inconsistencies:',
          bulletPoints: [
            'Impute missing Age values using median grouped by class and gender',
            'Fill missing Embarked values with the most common port',
            'Fix inconsistent formats and outliers',
            'Remove duplicates and standardize text fields'
          ]
        };
      case 'engineering':
        return {
          title: 'Feature Engineering',
          description: 'Creating new features from existing data can improve model performance:',
          bulletPoints: [
            'Extract Title from Name (Mr., Mrs., Miss, etc.)',
            'Combine SibSp and Parch into FamilySize',
            'Create IsAlone binary feature',
            'Group Age into categories (Child, Adult, Senior)',
            'Create Fare bins for better representation'
          ]
        };
      case 'output':
        return {
          title: 'Machine Learning Ready Data',
          description: 'The cleaned and engineered dataset is now ready for machine learning:',
          bulletPoints: [
            'No missing values',
            'Categorical variables encoded properly',
            'New meaningful features created',
            'Outliers handled',
            'Ready for training survival prediction models'
          ]
        };
    };
  };
  
  const info = getProcessInfo();
  
  return (
    <div className="h-full flex flex-col">
      <h2 className="text-xl font-bold mb-2">{info.title}</h2>
      <p className="text-sm mb-4 text-blue-200/80">{info.description}</p>
      
      <div className="bg-ocean-light/20 rounded border border-blue-900/30 p-4 mb-4">
        <h3 className="text-sm font-medium mb-2 text-blue-300">Key Points:</h3>
        <ul className="list-disc pl-5 space-y-2">
          {info.bulletPoints.map((point, index) => (
            <li key={index} className="text-sm text-blue-100/80">{point}</li>
          ))}
        </ul>
      </div>
      
      {activeProcess === 'output' && (
        <div className="mt-auto pt-4 border-t border-blue-900/30">
          <h3 className="text-sm font-medium mb-2 text-dataflow-feature">Model Performance</h3>
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="bg-blue-900/20 p-3 rounded">
              <div className="text-xl font-bold text-dataflow-feature">82.3%</div>
              <div className="text-xs text-blue-300">Accuracy</div>
            </div>
            <div className="bg-blue-900/20 p-3 rounded">
              <div className="text-xl font-bold text-dataflow-feature">0.79</div>
              <div className="text-xs text-blue-300">F1 Score</div>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-auto pt-4 border-t border-blue-900/30 text-xs text-blue-300/60">
        <p>
          {activeProcess === 'raw' && "Begin the data transformation journey with the raw Titanic dataset."}
          {activeProcess === 'cleaning' && "Watch as algorithms and tools clean the messy data."}
          {activeProcess === 'engineering' && "Observe the creation of powerful new features."}
          {activeProcess === 'output' && "The final data is now ready for machine learning algorithms."}
        </p>
      </div>
    </div>
  );
};
