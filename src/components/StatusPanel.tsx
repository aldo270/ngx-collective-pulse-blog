
import React, { useState, useEffect } from 'react';
import { Cpu, Zap, Brain, Activity, Wifi, Database, Shield, TrendingUp } from 'lucide-react';

const StatusPanel = () => {
  const [systemMetrics, setSystemMetrics] = useState({
    cpuUsage: 78.4,
    memoryUsage: 65.2,
    networkLatency: 12,
    activeConnections: 247,
    securityLevel: 99.8,
    learningRate: 94.3
  });

  const [pulseState, setPulseState] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSystemMetrics(prev => ({
        cpuUsage: Math.max(60, Math.min(95, prev.cpuUsage + (Math.random() - 0.5) * 8)),
        memoryUsage: Math.max(50, Math.min(85, prev.memoryUsage + (Math.random() - 0.5) * 6)),
        networkLatency: Math.max(8, Math.min(25, prev.networkLatency + (Math.random() - 0.5) * 4)),
        activeConnections: Math.max(200, Math.min(300, prev.activeConnections + Math.floor((Math.random() - 0.5) * 20))),
        securityLevel: Math.max(95, Math.min(100, prev.securityLevel + (Math.random() - 0.5) * 2)),
        learningRate: Math.max(85, Math.min(99, prev.learningRate + (Math.random() - 0.5) * 5))
      }));
      setPulseState(prev => (prev + 1) % 4);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (value: number, threshold: number = 80) => {
    if (value >= 95) return '#00FF7F';
    if (value >= threshold) return '#00D4FF';
    if (value >= 60) return '#FF6B35';
    return '#FF4444';
  };

  const MetricBar = ({ value, label, icon: Icon, unit = '%', reverse = false }: {
    value: number;
    label: string;
    icon: any;
    unit?: string;
    reverse?: boolean;
  }) => {
    const displayValue = reverse ? 100 - value : value;
    const color = reverse ? getStatusColor(100 - value) : getStatusColor(value);
    
    return (
      <div className="bg-black/30 rounded-lg p-4 border border-neogenx-purple/10 hover:border-neogenx-purple/30 transition-all duration-300 group">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <Icon className="w-4 h-4 text-tech-cyan group-hover:scale-110 transition-transform" />
            <span className="text-xs font-mono text-neogenx-gray group-hover:text-white transition-colors">
              {label}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-sm font-mono font-bold" style={{ color }}>
              {displayValue.toFixed(1)}{unit}
            </span>
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: color }}
            ></div>
          </div>
        </div>
        <div className="relative h-2 bg-neogenx-navy rounded-full overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full rounded-full transition-all duration-1000 ease-out"
            style={{ 
              width: `${displayValue}%`,
              background: `linear-gradient(90deg, ${color}60, ${color})`
            }}
          ></div>
          <div 
            className="absolute left-0 top-0 h-full w-full rounded-full opacity-20 animate-pulse"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${color}40, transparent)`
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-black/20 rounded-lg border border-neogenx-purple/20 overflow-hidden">
      {/* Header con efecto neural */}
      <div className="relative p-6 neural-network-bg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white font-mono">SYSTEM STATUS</h3>
          <div className="flex items-center space-x-2">
            <div className="flex space-x-1">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className={`w-1 h-4 rounded-full transition-all duration-300 ${
                    pulseState === i ? 'bg-tech-green' : 'bg-tech-green/30'
                  }`}
                  style={{
                    animationDelay: `${i * 200}ms`
                  }}
                ></div>
              ))}
            </div>
            <Wifi className="w-4 h-4 text-tech-green animate-pulse" />
          </div>
        </div>
        
        {/* Status Overview */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-tech-green mb-1">ONLINE</div>
            <div className="text-xs font-mono text-neogenx-gray">SYSTEM</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-tech-cyan mb-1">{systemMetrics.activeConnections}</div>
            <div className="text-xs font-mono text-neogenx-gray">CONNECTIONS</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-tech-orange mb-1">{systemMetrics.networkLatency}ms</div>
            <div className="text-xs font-mono text-neogenx-gray">LATENCY</div>
          </div>
        </div>
      </div>

      {/* Métricas detalladas */}
      <div className="p-6 space-y-4">
        <MetricBar 
          value={systemMetrics.cpuUsage} 
          label="NEURAL PROCESSING" 
          icon={Cpu}
        />
        <MetricBar 
          value={systemMetrics.memoryUsage} 
          label="MEMORY USAGE" 
          icon={Brain}
        />
        <MetricBar 
          value={systemMetrics.securityLevel} 
          label="SECURITY SHIELD" 
          icon={Shield}
        />
        <MetricBar 
          value={systemMetrics.learningRate} 
          label="LEARNING RATE" 
          icon={TrendingUp}
        />
      </div>

      {/* Footer con información adicional */}
      <div className="px-6 pb-6">
        <div className="bg-gradient-to-r from-tech-purple/10 to-tech-cyan/10 rounded-lg p-4 border border-tech-purple/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Activity className="w-4 h-4 text-tech-purple animate-pulse" />
              <span className="text-xs font-mono text-white">NEURAL SYNC ACTIVE</span>
            </div>
            <div className="text-xs font-mono text-neogenx-gray">
              UPTIME: 247:15:42
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPanel;
