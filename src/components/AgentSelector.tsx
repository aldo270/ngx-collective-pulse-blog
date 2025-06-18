
import React from 'react';

const agents = [
  { id: 'nexus', name: 'NEXUS', role: 'Orchestration Specialist', color: '#00D4FF', initials: 'NX' },
  { id: 'blaze', name: 'BLAZE', role: 'Training Specialist', color: '#FF6B35', initials: 'BZ' },
  { id: 'sage', name: 'SAGE', role: 'Nutrition Scientist', color: '#00FF7F', initials: 'SG' },
  { id: 'wave', name: 'WAVE', role: 'Analytics Expert', color: '#00D4FF', initials: 'WV' },
  { id: 'spark', name: 'SPARK', role: 'Motivation Engine', color: '#6D00FF', initials: 'SP' },
  { id: 'stella', name: 'STELLA', role: 'Progress Tracker', color: '#00FF7F', initials: 'ST' },
  { id: 'nova', name: 'NOVA', role: 'Biohacking Pioneer', color: '#FF6B35', initials: 'NV' }
];

const AgentSelector = () => {
  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="flex space-x-4 px-4 min-w-max">
        {agents.map((agent) => (
          <div
            key={agent.id}
            className="flex-shrink-0 rounded-lg p-4 transition-all duration-300 hover:scale-105 cursor-pointer min-w-[200px]"
            style={{
              background: 'rgba(10, 6, 40, 0.5)',
              border: `1px solid ${agent.color}30`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${agent.color}80`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = `${agent.color}30`;
            }}
          >
            <div className="flex items-center space-x-3">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center animate-system-pulse"
                style={{background: `${agent.color}20`}}
              >
                <span 
                  className="text-sm font-mono font-bold"
                  style={{color: agent.color}}
                >
                  {agent.initials}
                </span>
              </div>
              <div>
                <h3 className="font-mono font-bold text-white text-sm">{agent.name}</h3>
                <p className="font-mono text-xs text-neogenx-gray">{agent.role}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <div 
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{background: agent.color}}
                  ></div>
                  <span className="text-xs font-mono text-neogenx-gray">ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgentSelector;
