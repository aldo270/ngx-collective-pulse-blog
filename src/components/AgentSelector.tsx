
import React from 'react';
import { Link } from 'react-router-dom';
import { getVisibleAgents } from '../data/agents';

const AgentSelector = () => {
  const agents = getVisibleAgents();

  return (
    <div className="w-full overflow-x-auto pb-4">
      <div className="flex space-x-4 px-4 min-w-max">
        {agents.map((agent) => (
          <Link
            key={agent.id}
            to={`/agent/${agent.id}`}
            className="flex-shrink-0 rounded-lg p-4 transition-all duration-300 hover:scale-105 cursor-pointer min-w-[200px] group"
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
                className="w-12 h-12 rounded-full flex items-center justify-center animate-system-pulse group-hover:scale-110 transition-transform"
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
                <h3 className="font-mono font-bold text-white text-sm group-hover:text-tech-cyan transition-colors">{agent.name}</h3>
                <p className="font-mono text-xs text-neogenx-gray">{agent.role}</p>
                <p className="font-mono text-xs text-neogenx-gray/70 mt-1">{agent.mbti}</p>
                <div className="flex items-center space-x-1 mt-1">
                  <div 
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{background: agent.color}}
                  ></div>
                  <span className="text-xs font-mono text-neogenx-gray">ACTIVE</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AgentSelector;
