
import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { Agent } from '../data/agents';

interface AgentHandoffProps {
  fromAgent: Agent;
  message: string;
  timestamp: Date;
}

const AgentHandoff: React.FC<AgentHandoffProps> = ({ 
  fromAgent, 
  message, 
  timestamp 
}) => {
  return (
    <div className="flex justify-center my-6">
      <div className="bg-gradient-to-r from-neogenx-purple/10 to-tech-cyan/10 rounded-lg p-4 border border-neogenx-purple/20 max-w-md">
        <div className="flex items-center justify-center space-x-3 mb-3">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ 
              background: `${fromAgent.color}20`,
              border: `1px solid ${fromAgent.color}`
            }}
          >
            <span 
              className="text-xs font-mono font-bold"
              style={{ color: fromAgent.color }}
            >
              {fromAgent.initials}
            </span>
          </div>
          
          <ArrowRight className="w-4 h-4 text-neogenx-gray" />
          
          <div className="w-8 h-8 rounded-full bg-tech-cyan/20 border border-tech-cyan flex items-center justify-center">
            <Users className="w-4 h-4 text-tech-cyan" />
          </div>
        </div>
        
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="text-sm font-mono font-bold text-neogenx-purple">
              AGENT HANDOFF
            </span>
            <span className="text-xs text-neogenx-gray">
              {timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
          
          <p className="text-sm text-neogenx-gray leading-relaxed">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentHandoff;
