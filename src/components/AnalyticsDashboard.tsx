
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from './ui/chart';
import { Brain, Zap, Target, TrendingUp } from 'lucide-react';

const AnalyticsDashboard = () => {
  const [selectedMetric, setSelectedMetric] = useState('performance');
  const [liveData, setLiveData] = useState({
    performance: Math.random() * 20 + 80,
    efficiency: Math.random() * 15 + 85,
    accuracy: Math.random() * 10 + 90,
    learning: Math.random() * 25 + 75
  });

  // Simular datos en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveData(prev => ({
        performance: Math.max(75, Math.min(99, prev.performance + (Math.random() - 0.5) * 3)),
        efficiency: Math.max(80, Math.min(98, prev.efficiency + (Math.random() - 0.5) * 2)),
        accuracy: Math.max(85, Math.min(99.5, prev.accuracy + (Math.random() - 0.5) * 1.5)),
        learning: Math.max(70, Math.min(95, prev.learning + (Math.random() - 0.5) * 4))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const agentPerformanceData = [
    { name: 'NEXUS', performance: 98.7, efficiency: 96.2, accuracy: 99.1 },
    { name: 'BLAZE', performance: 95.3, efficiency: 94.8, accuracy: 97.6 },
    { name: 'SAGE', performance: 97.1, efficiency: 98.4, accuracy: 98.9 },
    { name: 'WAVE', performance: 96.8, efficiency: 95.7, accuracy: 98.2 },
    { name: 'SPARK', performance: 94.9, efficiency: 93.5, accuracy: 96.8 },
    { name: 'STELLA', performance: 96.4, efficiency: 97.1, accuracy: 97.8 }
  ];

  const neuralActivityData = [
    { time: '00:00', synapses: 847, connections: 1247, processing: 89 },
    { time: '04:00', synapses: 923, connections: 1389, processing: 92 },
    { time: '08:00', synapses: 1156, connections: 1524, processing: 95 },
    { time: '12:00', synapses: 1342, connections: 1687, processing: 98 },
    { time: '16:00', synapses: 1289, connections: 1598, processing: 94 },
    { time: '20:00', synapses: 1098, connections: 1456, processing: 91 },
    { time: '24:00', synapses: 967, connections: 1323, processing: 88 }
  ];

  const specializationDistribution = [
    { name: 'Training & Performance', value: 35, color: '#FF6B35' },
    { name: 'Analytics & Data', value: 28, color: '#00D4FF' },
    { name: 'Health & Nutrition', value: 22, color: '#00FF7F' },
    { name: 'Psychology & Motivation', value: 15, color: '#6D00FF' }
  ];

  const chartConfig = {
    performance: { label: 'Performance', color: '#00D4FF' },
    efficiency: { label: 'Efficiency', color: '#00FF7F' },
    accuracy: { label: 'Accuracy', color: '#FF6B35' },
    synapses: { label: 'Synapses', color: '#00D4FF' },
    connections: { label: 'Connections', color: '#00FF7F' },
    processing: { label: 'Processing', color: '#6D00FF' }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
      {/* Live Metrics Cards */}
      <div className="bg-black/20 rounded-lg p-6 border border-neogenx-purple/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Brain className="w-5 h-5 text-tech-cyan" />
            <h3 className="font-mono font-bold text-white text-sm">PERFORMANCE</h3>
          </div>
          <div className="w-3 h-3 rounded-full bg-tech-cyan animate-pulse"></div>
        </div>
        <div className="text-3xl font-bold text-tech-cyan mb-2">
          {liveData.performance.toFixed(1)}%
        </div>
        <div className="text-xs font-mono text-neogenx-gray">
          Neural processing efficiency
        </div>
      </div>

      <div className="bg-black/20 rounded-lg p-6 border border-neogenx-purple/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Zap className="w-5 h-5 text-tech-green" />
            <h3 className="font-mono font-bold text-white text-sm">EFFICIENCY</h3>
          </div>
          <div className="w-3 h-3 rounded-full bg-tech-green animate-pulse"></div>
        </div>
        <div className="text-3xl font-bold text-tech-green mb-2">
          {liveData.efficiency.toFixed(1)}%
        </div>
        <div className="text-xs font-mono text-neogenx-gray">
          Resource optimization
        </div>
      </div>

      <div className="bg-black/20 rounded-lg p-6 border border-neogenx-purple/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Target className="w-5 h-5 text-tech-orange" />
            <h3 className="font-mono font-bold text-white text-sm">ACCURACY</h3>
          </div>
          <div className="w-3 h-3 rounded-full bg-tech-orange animate-pulse"></div>
        </div>
        <div className="text-3xl font-bold text-tech-orange mb-2">
          {liveData.accuracy.toFixed(1)}%
        </div>
        <div className="text-xs font-mono text-neogenx-gray">
          Decision precision
        </div>
      </div>

      <div className="bg-black/20 rounded-lg p-6 border border-neogenx-purple/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-5 h-5 text-neogenx-purple" />
            <h3 className="font-mono font-bold text-white text-sm">LEARNING</h3>
          </div>
          <div className="w-3 h-3 rounded-full bg-neogenx-purple animate-pulse"></div>
        </div>
        <div className="text-3xl font-bold text-neogenx-purple mb-2">
          {liveData.learning.toFixed(1)}%
        </div>
        <div className="text-xs font-mono text-neogenx-gray">
          Adaptation rate
        </div>
      </div>

      {/* Agent Performance Chart */}
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

      {/* Neural Activity Timeline */}
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

      {/* Specialization Distribution */}
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
    </div>
  );
};

export default AnalyticsDashboard;
