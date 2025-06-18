
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';

const AgentPerformanceChart: React.FC = () => {
  const agentPerformanceData = [
    { name: 'NEXUS', performance: 98.7, efficiency: 96.2, accuracy: 99.1 },
    { name: 'BLAZE', performance: 95.3, efficiency: 94.8, accuracy: 97.6 },
    { name: 'SAGE', performance: 97.1, efficiency: 98.4, accuracy: 98.9 },
    { name: 'WAVE', performance: 96.8, efficiency: 95.7, accuracy: 98.2 },
    { name: 'SPARK', performance: 94.9, efficiency: 93.5, accuracy: 96.8 },
    { name: 'STELLA', performance: 96.4, efficiency: 97.1, accuracy: 97.8 }
  ];

  const chartConfig = {
    performance: { label: 'Performance', color: '#00D4FF' },
    efficiency: { label: 'Efficiency', color: '#00FF7F' },
    accuracy: { label: 'Accuracy', color: '#FF6B35' }
  };

  return (
    <div className="lg:col-span-2 bg-black/20 rounded-lg p-6 border border-neogenx-purple/20">
      <h3 className="font-mono font-bold text-white text-lg mb-4">AGENT PERFORMANCE MATRIX</h3>
      <ChartContainer config={chartConfig} className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={agentPerformanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#6D00FF20" />
            <XAxis dataKey="name" stroke="#8B9DC3" fontSize={12} fontFamily="monospace" />
            <YAxis stroke="#8B9DC3" fontSize={12} fontFamily="monospace" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="performance" fill="#00D4FF" radius={[2, 2, 0, 0]} />
            <Bar dataKey="efficiency" fill="#00FF7F" radius={[2, 2, 0, 0]} />
            <Bar dataKey="accuracy" fill="#FF6B35" radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default AgentPerformanceChart;
