
import React from 'react';

export const Ship: React.FC = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <svg 
        className="w-4/5 h-auto opacity-20"
        viewBox="0 0 800 300" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M50,200 Q200,150 400,180 Q600,210 750,200 L750,220 Q600,230 400,200 Q200,170 50,220 Z" 
          fill="rgba(255,255,255,0.1)" 
          stroke="rgba(255,255,255,0.3)" 
          strokeWidth="1"
        />
        <path 
          d="M200,180 L200,140 L230,140 L230,120 L260,120 L260,100 L350,100 L350,80 L450,80 L450,100 L550,100 L550,120 L600,120 L600,140 L630,140 L630,180" 
          fill="none" 
          stroke="rgba(255,255,255,0.3)" 
          strokeWidth="1"
        />
        <path 
          d="M250,100 L250,140 M300,100 L300,160 M350,80 L350,170 M400,80 L400,175 M450,80 L450,175 M500,100 L500,170 M550,100 L550,160 M580,120 L580,140" 
          fill="none" 
          stroke="rgba(255,255,255,0.2)" 
          strokeWidth="0.5"
        />
        <circle cx="300" cy="120" r="5" fill="rgba(255,255,255,0.2)" />
        <circle cx="350" cy="120" r="5" fill="rgba(255,255,255,0.2)" />
        <circle cx="400" cy="120" r="5" fill="rgba(255,255,255,0.2)" />
        <circle cx="450" cy="120" r="5" fill="rgba(255,255,255,0.2)" />
        <circle cx="500" cy="120" r="5" fill="rgba(255,255,255,0.2)" />
      </svg>
    </div>
  );
};
