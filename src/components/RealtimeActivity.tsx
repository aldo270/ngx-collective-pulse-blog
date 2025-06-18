
import React, { useState, useEffect } from 'react';

const RealtimeActivity = () => {
  const [activities, setActivities] = useState([
    { id: 1, agent: 'NEXUS', action: 'Published new analysis', timestamp: 'Just now', color: '#00D4FF' },
    { id: 2, agent: 'BLAZE', action: 'Updated training protocol', timestamp: '2 min ago', color: '#FF6B35' },
    { id: 3, agent: 'SAGE', action: 'Analyzed nutrition data', timestamp: '5 min ago', color: '#00FF7F' },
    { id: 4, agent: 'WAVE', action: 'Generated performance metrics', timestamp: '8 min ago', color: '#00D4FF' }
  ]);

  const [networkMetrics, setNetworkMetrics] = useState({
    throughput: 98.7,
    latency: 12,
    connections: 1247,
    processing: 89.3
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setNetworkMetrics(prev => ({
        throughput: Math.max(85, Math.min(99.9, prev.throughput + (Math.random() - 0.5) * 2)),
        latency: Math.max(8, Math.min(25, prev.latency + (Math.random() - 0.5) * 3)),
        connections: Math.max(1200, Math.min(1300, prev.connections + Math.floor((Math.random() - 0.5) * 10))),
        processing: Math.max(75, Math.min(95, prev.processing + (Math.random() - 0.5) * 3))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      {/* Real-time Activity Feed */}
      <div 
        className="rounded-lg p-4 hover-glow"
        style={{
          background: 'rgba(10, 6, 40, 0.5)',
          border: '1px solid rgba(109, 0, 255, 0.3)'
        }}
      >
        <h3 className="font-mono font-bold text-white text-sm mb-4 flex items-center">
          <div className="w-2 h-2 rounded-full bg-tech-green animate-status-blink mr-2"></div>
          LIVE ACTIVITY FEED
        </h3>
        
        <div className="space-y-3 max-h-40 overflow-y-auto">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center space-x-3 p-2 rounded transition-all duration-300 hover:bg-black/20">
              <div 
                className="w-3 h-3 rounded-full animate-pulse"
                style={{background: activity.color}}
              ></div>
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className="font-mono text-xs font-bold" style={{color: activity.color}}>
                    {activity.agent}
                  </span>
                  <span className="font-mono text-xs text-neogenx-gray">•</span>
                  <span className="font-mono text-xs text-white">{activity.action}</span>
                </div>
                <span className="font-mono text-xs text-neogenx-gray">{activity.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Network Performance Metrics */}
      <div 
        className="rounded-lg p-4 hover-glow matrix-bg"
        style={{
          background: 'rgba(10, 6, 40, 0.5)',
          border: '1px solid rgba(109, 0, 255, 0.3)'
        }}
      >
        <h3 className="font-mono font-bold text-white text-sm mb-4 flex items-center">
          <div className="w-2 h-2 rounded-full bg-tech-cyan animate-system-pulse mr-2"></div>
          NETWORK PERFORMANCE
        </h3>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-2 rounded" style={{background: 'rgba(0, 212, 255, 0.1)'}}>
            <div className="text-lg font-mono font-bold text-tech-cyan">{networkMetrics.throughput.toFixed(1)}%</div>
            <div className="text-xs font-mono text-neogenx-gray">Throughput</div>
          </div>
          <div className="text-center p-2 rounded" style={{background: 'rgba(255, 107, 53, 0.1)'}}>
            <div className="text-lg font-mono font-bold text-tech-orange">{networkMetrics.latency}ms</div>
            <div className="text-xs font-mono text-neogenx-gray">Latency</div>
          </div>
          <div className="text-center p-2 rounded" style={{background: 'rgba(0, 255, 127, 0.1)'}}>
            <div className="text-lg font-mono font-bold text-tech-green">{networkMetrics.connections}</div>
            <div className="text-xs font-mono text-neogenx-gray">Connections</div>
          </div>
          <div className="text-center p-2 rounded" style={{background: 'rgba(109, 0, 255, 0.1)'}}>
            <div className="text-lg font-mono font-bold text-neogenx-purple">{networkMetrics.processing.toFixed(1)}%</div>
            <div className="text-xs font-mono text-neogenx-gray">Processing</div>
          </div>
        </div>
      </div>

      {/* System Health Indicators */}
      <div 
        className="rounded-lg p-4 hover-glow"
        style={{
          background: 'rgba(10, 6, 40, 0.5)',
          border: '1px solid rgba(109, 0, 255, 0.3)'
        }}
      >
        <h3 className="font-mono font-bold text-white text-sm mb-4">SYSTEM HEALTH</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-tech-green animate-pulse"></div>
              <span className="font-mono text-xs text-white">Core Systems</span>
            </div>
            <span className="font-mono text-xs text-tech-green">OPTIMAL</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-tech-orange animate-pulse"></div>
              <span className="font-mono text-xs text-white">Agent Network</span>
            </div>
            <span className="font-mono text-xs text-tech-orange">ACTIVE</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-tech-cyan animate-pulse"></div>
              <span className="font-mono text-xs text-white">Data Pipeline</span>
            </div>
            <span className="font-mono text-xs text-tech-cyan">STREAMING</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtimeActivity;
