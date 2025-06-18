
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';

const SpecializationChart: React.FC = () => {
  const specializationDistribution = [
    { name: 'Training & Performance', value: 35, color: '#FF6B35' },
    { name: 'Analytics & Data', value: 28, color: '#00D4FF' },
    { name: 'Health & Nutrition', value: 22, color: '#00FF7F' },
    { name: 'Psychology & Motivation', value: 15, color: '#6D00FF' }
  ];

  const chartConfig = {};

  return (
    <div className="xl:col-span-2 bg-black/20 rounded-lg p-6 border border-neogenx-purple/20">
      <h3 className="font-mono font-bold text-white text-lg mb-4">SPECIALIZATION DISTRIBUTION</h3>
      <div className="flex items-center justify-center">
        <ChartContainer config={chartConfig} className="h-48 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={specializationDistribution}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {specializationDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <ChartTooltip content={<ChartTooltipContent />} />
            </PieChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
      <div className="grid grid-cols-2 gap-2 mt-4">
        {specializationDistribution.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-xs font-mono text-neogenx-gray">{item.name}</span>
            <span className="text-xs font-mono font-bold" style={{ color: item.color }}>
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecializationChart;
