
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';

const NeuralActivityChart: React.FC = () => {
  const neuralActivityData = [
    { time: '00:00', synapses: 847, connections: 1247, processing: 89 },
    { time: '04:00', synapses: 923, connections: 1389, processing: 92 },
    { time: '08:00', synapses: 1156, connections: 1524, processing: 95 },
    { time: '12:00', synapses: 1342, connections: 1687, processing: 98 },
    { time: '16:00', synapses: 1289, connections: 1598, processing: 94 },
    { time: '20:00', synapses: 1098, connections: 1456, processing: 91 },
    { time: '24:00', synapses: 967, connections: 1323, processing: 88 }
  ];

  const chartConfig = {
    synapses: { label: 'Synapses', color: '#00D4FF' },
    connections: { label: 'Connections', color: '#00FF7F' },
    processing: { label: 'Processing', color: '#6D00FF' }
  };

  return (
    <div className="lg:col-span-2 bg-black/20 rounded-lg p-6 border border-neogenx-purple/20">
      <h3 className="font-mono font-bold text-white text-lg mb-4">NEURAL ACTIVITY (24H)</h3>
      <ChartContainer config={chartConfig} className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={neuralActivityData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#6D00FF20" />
            <XAxis dataKey="time" stroke="#8B9DC3" fontSize={12} fontFamily="monospace" />
            <YAxis stroke="#8B9DC3" fontSize={12} fontFamily="monospace" />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line type="monotone" dataKey="synapses" stroke="#00D4FF" strokeWidth={2} dot={{fill: '#00D4FF', strokeWidth: 2, r: 4}} />
            <Line type="monotone" dataKey="connections" stroke="#00FF7F" strokeWidth={2} dot={{fill: '#00FF7F', strokeWidth: 2, r: 4}} />
            <Line type="monotone" dataKey="processing" stroke="#6D00FF" strokeWidth={2} dot={{fill: '#6D00FF', strokeWidth: 2, r: 4}} />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default NeuralActivityChart;
