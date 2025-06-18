
import React from 'react';

const StatusPanel = () => {
  const systemMetrics = [
    { label: 'Processing Power', value: '98.1%', color: '#00D4FF' },
    { label: 'Memory Usage', value: '67.3%', color: '#00FF7F' },
    { label: 'Network Latency', value: '12ms', color: '#FF6B35' },
    { label: 'Active Connections', value: '1,247', color: '#6D00FF' }
  ];

  const activeAgents = [
    { name: 'NEXUS', status: 'Publishing', color: '#00D4FF' },
    { name: 'BLAZE', status: 'Training', color: '#FF6B35' },
    { name: 'SAGE', status: 'Analyzing', color: '#00FF7F' },
    { name: 'WAVE', status: 'Computing', color: '#00D4FF' }
  ];

  return (
    <div className="space-y-6">
      <div 
        className="rounded-lg p-4"
        style={{
          background: 'rgba(10, 6, 40, 0.5)',
          border: '1px solid rgba(109, 0, 255, 0.3)'
        }}
      >
        <h3 className="font-mono font-bold text-white text-sm mb-4 flex items-center">
          <div className="w-2 h-2 rounded-full bg-tech-green animate-pulse mr-2"></div>
          SYSTEM STATUS
        </h3>
        
        <div className="space-y-3">
          {systemMetrics.map((metric, index) => (
            <div key={index}>
              <div className="flex justify-between items-center mb-1">
                <span className="font-mono text-xs text-white">{metric.label}</span>
                <span className="font-mono text-xs" style={{color: metric.color}}>
                  {metric.value}
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-neogenx-navy">
                <div 
                  className="h-full rounded-full animate-data-flow"
                  style={{
                    background: `linear-gradient(90deg, ${metric.color}50 0%, ${metric.color} 50%, ${metric.color}50 100%)`,
                    width: metric.label === 'Processing Power' ? '98%' : 
                           metric.label === 'Memory Usage' ? '67%' : 
                           metric.label === 'Network Latency' ? '25%' : '85%'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div 
        className="rounded-lg p-4"
        style={{
          background: 'rgba(10, 6, 40, 0.5)',
          border: '1px solid rgba(109, 0, 255, 0.3)'
        }}
      >
        <h3 className="font-mono font-bold text-white text-sm mb-4">ACTIVE AGENTS</h3>
        
        <div className="space-y-3">
          {activeAgents.map((agent, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{background: agent.color}}
                ></div>
                <span className="font-mono text-xs text-white">{agent.name}</span>
              </div>
              <span className="font-mono text-xs text-neogenx-gray">{agent.status}</span>
            </div>
          ))}
        </div>
      </div>

      <div 
        className="rounded-lg p-4"
        style={{
          background: 'rgba(10, 6, 40, 0.5)',
          border: '1px solid rgba(109, 0, 255, 0.3)'
        }}
      >
        <h3 className="font-mono font-bold text-white text-sm mb-4">NEURAL ACTIVITY</h3>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="font-mono text-xs text-neogenx-gray">Synaptic Connections</span>
            <span className="font-mono text-xs text-tech-cyan">847.2K</span>
          </div>
          <div className="flex justify-between">
            <span className="font-mono text-xs text-neogenx-gray">Learning Rate</span>
            <span className="font-mono text-xs text-tech-green">0.0001</span>
          </div>
          <div className="flex justify-between">
            <span className="font-mono text-xs text-neogenx-gray">Model Accuracy</span>
            <span className="font-mono text-xs text-tech-orange">99.7%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPanel;
