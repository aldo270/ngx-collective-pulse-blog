
import React, { useState, useEffect } from 'react';
import { getVisibleAgents } from '../data/agents';
import { Share2, Cpu, MessageSquare } from 'lucide-react';

const NetworkGraph = () => {
  const agents = getVisibleAgents();
  const [connections, setConnections] = useState<{ from: string; to: string; type: string; strength: number }[]>([]);
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  useEffect(() => {
    // Simular conexiones dinámicas entre agentes
    const generateConnections = () => {
      const newConnections = [];
      const connectionTypes = ['collaboration', 'data-sharing', 'handoff'];
      
      for (let i = 0; i < agents.length; i++) {
        for (let j = i + 1; j < agents.length; j++) {
          if (Math.random() > 0.3) { // 70% probabilidad de conexión
            newConnections.push({
              from: agents[i].id,
              to: agents[j].id,
              type: connectionTypes[Math.floor(Math.random() * connectionTypes.length)],
              strength: Math.random() * 0.8 + 0.2
            });
          }
        }
      }
      setConnections(newConnections);
    };

    generateConnections();
    const interval = setInterval(generateConnections, 5000);
    return () => clearInterval(interval);
  }, [agents]);

  const getConnectionIcon = (type: string) => {
    switch (type) {
      case 'collaboration': return <Share2 className="w-3 h-3" />;
      case 'data-sharing': return <Cpu className="w-3 h-3" />;
      case 'handoff': return <MessageSquare className="w-3 h-3" />;
      default: return <Share2 className="w-3 h-3" />;
    }
  };

  const getConnectionColor = (type: string) => {
    switch (type) {
      case 'collaboration': return '#00D4FF';
      case 'data-sharing': return '#00FF7F';
      case 'handoff': return '#FF6B35';
      default: return '#6D00FF';
    }
  };

  // Calcular posiciones en círculo
  const getAgentPosition = (index: number, total: number, radius = 200) => {
    const angle = (index * 2 * Math.PI) / total;
    return {
      x: 250 + radius * Math.cos(angle),
      y: 250 + radius * Math.sin(angle)
    };
  };

  const agentPositions = agents.reduce((acc, agent, index) => {
    acc[agent.id] = getAgentPosition(index, agents.length);
    return acc;
  }, {} as { [key: string]: { x: number; y: number } });

  return (
    <div className="bg-black/20 rounded-lg p-6 border border-neogenx-purple/20">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-mono font-bold text-white text-lg">NEURAL NETWORK TOPOLOGY</h3>
        <div className="flex items-center space-x-4 text-xs font-mono">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-tech-cyan"></div>
            <span className="text-neogenx-gray">Collaboration</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-tech-green"></div>
            <span className="text-neogenx-gray">Data Sharing</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-tech-orange"></div>
            <span className="text-neogenx-gray">Handoff</span>
          </div>
        </div>
      </div>

      <div className="relative w-full h-96 overflow-hidden rounded-lg" style={{ background: 'radial-gradient(circle at center, rgba(109, 0, 255, 0.1) 0%, rgba(10, 6, 40, 0.8) 70%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 500 500" className="absolute inset-0">
          {/* Conexiones */}
          {connections.map((connection, index) => {
            const fromPos = agentPositions[connection.from];
            const toPos = agentPositions[connection.to];
            if (!fromPos || !toPos) return null;

            return (
              <g key={index}>
                <line
                  x1={fromPos.x}
                  y1={fromPos.y}
                  x2={toPos.x}
                  y2={toPos.y}
                  stroke={getConnectionColor(connection.type)}
                  strokeWidth={connection.strength * 3}
                  opacity={0.6}
                  className="animate-pulse"
                  style={{
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
                {/* Punto de conexión animado */}
                <circle
                  cx={fromPos.x + (toPos.x - fromPos.x) * 0.5}
                  cy={fromPos.y + (toPos.y - fromPos.y) * 0.5}
                  r="2"
                  fill={getConnectionColor(connection.type)}
                  className="animate-ping"
                  style={{
                    animationDelay: `${Math.random() * 3}s`
                  }}
                />
              </g>
            );
          })}

          {/* Agentes */}
          {agents.map((agent, index) => {
            const position = agentPositions[agent.id];
            const isSelected = selectedAgent === agent.id;
            const agentConnections = connections.filter(
              c => c.from === agent.id || c.to === agent.id
            );

            return (
              <g key={agent.id}>
                {/* Halo de selección */}
                {isSelected && (
                  <circle
                    cx={position.x}
                    cy={position.y}
                    r="35"
                    fill="none"
                    stroke={agent.color}
                    strokeWidth="2"
                    opacity="0.5"
                    className="animate-pulse"
                  />
                )}
                
                {/* Círculo del agente */}
                <circle
                  cx={position.x}
                  cy={position.y}
                  r="25"
                  fill={`${agent.color}20`}
                  stroke={agent.color}
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300 hover:scale-110"
                  onClick={() => setSelectedAgent(isSelected ? null : agent.id)}
                />
                
                {/* Initials del agente */}
                <text
                  x={position.x}
                  y={position.y + 5}
                  textAnchor="middle"
                  fill={agent.color}
                  fontSize="12"
                  fontWeight="bold"
                  fontFamily="monospace"
                  className="cursor-pointer select-none"
                  onClick={() => setSelectedAgent(isSelected ? null : agent.id)}
                >
                  {agent.initials}
                </text>
                
                {/* Indicador de actividad */}
                <circle
                  cx={position.x + 18}
                  cy={position.y - 18}
                  r="4"
                  fill={agentConnections.length > 2 ? '#00FF7F' : '#FF6B35'}
                  className="animate-pulse"
                />
              </g>
            );
          })}
        </svg>

        {/* Información del agente seleccionado */}
        {selectedAgent && (
          <div className="absolute top-4 right-4 bg-black/80 rounded-lg p-4 border border-neogenx-purple/30 max-w-xs">
            {(() => {
              const agent = agents.find(a => a.id === selectedAgent);
              const agentConnections = connections.filter(
                c => c.from === selectedAgent || c.to === selectedAgent
              );
              
              if (!agent) return null;
              
              return (
                <div>
                  <div className="flex items-center space-x-3 mb-3">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: `${agent.color}20`, border: `1px solid ${agent.color}` }}
                    >
                      <span 
                        className="text-xs font-mono font-bold"
                        style={{ color: agent.color }}
                      >
                        {agent.initials}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-mono font-bold text-white text-sm">{agent.name}</h4>
                      <p className="text-xs text-neogenx-gray">{agent.role}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-neogenx-gray">Connections:</span>
                      <span className="text-xs font-mono text-white font-bold">{agentConnections.length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-neogenx-gray">Activity:</span>
                      <span className="text-xs font-mono text-tech-green font-bold">
                        {agentConnections.length > 2 ? 'HIGH' : 'MODERATE'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-neogenx-gray">Specialization:</span>
                      <span className="text-xs font-mono text-tech-cyan font-bold">{agent.specialization.split(' ')[0]}</span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}
      </div>

      {/* Estadísticas de red */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-tech-cyan font-mono">{connections.length}</div>
          <div className="text-xs font-mono text-neogenx-gray">Active Connections</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-tech-green font-mono">{agents.length}</div>
          <div className="text-xs font-mono text-neogenx-gray">Neural Nodes</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-tech-orange font-mono">
            {(connections.reduce((sum, c) => sum + c.strength, 0) / connections.length * 100).toFixed(0)}%
          </div>
          <div className="text-xs font-mono text-neogenx-gray">Network Strength</div>
        </div>
      </div>
    </div>
  );
};

export default NetworkGraph;
