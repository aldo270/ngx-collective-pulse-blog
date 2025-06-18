
import React, { useEffect, useState } from 'react';

interface VoiceVisualizerProps {
  isActive: boolean;
  agentColor: string;
  type: 'recording' | 'speaking';
}

const VoiceVisualizer: React.FC<VoiceVisualizerProps> = ({ 
  isActive, 
  agentColor, 
  type 
}) => {
  const [bars, setBars] = useState<number[]>(Array(20).fill(0));

  useEffect(() => {
    if (!isActive) {
      setBars(Array(20).fill(0));
      return;
    }

    const interval = setInterval(() => {
      setBars(prev => prev.map(() => Math.random() * 100));
    }, 100);

    return () => clearInterval(interval);
  }, [isActive]);

  const getBarColor = (height: number) => {
    if (type === 'recording') {
      return height > 70 ? '#FF6B35' : height > 40 ? '#00D4FF' : agentColor;
    }
    return agentColor;
  };

  return (
    <div className="flex items-center justify-center space-x-1 h-16">
      <div className="flex items-center space-x-1">
        {bars.map((height, index) => (
          <div
            key={index}
            className="w-1 transition-all duration-100 ease-out rounded-full"
            style={{
              height: isActive ? `${Math.max(height, 10)}%` : '10%',
              backgroundColor: getBarColor(height),
              opacity: isActive ? 0.8 : 0.3,
              animationDelay: `${index * 50}ms`
            }}
          />
        ))}
      </div>
      
      <div className="ml-4 text-center">
        <div 
          className="text-sm font-mono font-bold mb-1"
          style={{ color: agentColor }}
        >
          {type === 'recording' ? 'RECORDING' : 'SPEAKING'}
        </div>
        <div className="flex items-center justify-center space-x-1">
          <div 
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: agentColor }}
          />
          <span className="text-xs text-neogenx-gray font-mono">
            {type === 'recording' ? 'Listening...' : 'AI Responding...'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default VoiceVisualizer;
