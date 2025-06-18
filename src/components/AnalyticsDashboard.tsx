
import React, { useState, useEffect } from 'react';
import LiveMetricsCards from './LiveMetricsCards';
import AgentPerformanceChart from './AgentPerformanceChart';
import NeuralActivityChart from './NeuralActivityChart';
import SpecializationChart from './SpecializationChart';

const AnalyticsDashboard = () => {
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

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
      <LiveMetricsCards liveData={liveData} />
      <AgentPerformanceChart />
      <NeuralActivityChart />
      <SpecializationChart />
    </div>
  );
};

export default AnalyticsDashboard;
