
import React from 'react';
import { Brain, Zap, Target, TrendingUp } from 'lucide-react';

interface LiveMetricsCardsProps {
  liveData: {
    performance: number;
    efficiency: number;
    accuracy: number;
    learning: number;
  };
}

const LiveMetricsCards: React.FC<LiveMetricsCardsProps> = ({ liveData }) => {
  const metrics = [
    {
      key: 'performance',
      icon: Brain,
      label: 'PERFORMANCE',
      color: 'tech-cyan',
      description: 'Neural processing efficiency'
    },
    {
      key: 'efficiency',
      icon: Zap,
      label: 'EFFICIENCY',
      color: 'tech-green',
      description: 'Resource optimization'
    },
    {
      key: 'accuracy',
      icon: Target,
      label: 'ACCURACY',
      color: 'tech-orange',
      description: 'Decision precision'
    },
    {
      key: 'learning',
      icon: TrendingUp,
      label: 'LEARNING',
      color: 'neogenx-purple',
      description: 'Adaptation rate'
    }
  ];

  return (
    <>
      {metrics.map((metric) => {
        const Icon = metric.icon;
        const value = liveData[metric.key as keyof typeof liveData];
        
        return (
          <div key={metric.key} className="bg-black/20 rounded-lg p-6 border border-neogenx-purple/20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Icon className={`w-5 h-5 text-${metric.color}`} />
                <h3 className="font-mono font-bold text-white text-sm">{metric.label}</h3>
              </div>
              <div className={`w-3 h-3 rounded-full bg-${metric.color} animate-pulse`}></div>
            </div>
            <div className={`text-3xl font-bold text-${metric.color} mb-2`}>
              {value.toFixed(1)}%
            </div>
            <div className="text-xs font-mono text-neogenx-gray">
              {metric.description}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default LiveMetricsCards;
