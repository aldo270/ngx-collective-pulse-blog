
import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { Agent } from '../data/agents';
import ChatInterface from './ChatInterface';

interface AgentSidebarProps {
  agent: Agent;
  showChat: boolean;
  onToggleChat: () => void;
  allAgents: Agent[];
  currentAgent: Agent;
  onAgentChange: (agent: Agent) => void;
}

const AgentSidebar: React.FC<AgentSidebarProps> = ({ 
  agent, 
  showChat, 
  onToggleChat, 
  allAgents, 
  currentAgent, 
  onAgentChange 
}) => {
  return (
    <div className="xl:col-span-1">
      <div className="sticky top-24">
        {showChat ? (
          <div className="bg-black/20 rounded-lg h-[80vh] border border-neogenx-purple/20">
            <div className="flex items-center justify-between p-4 border-b border-neogenx-purple/20">
              <h3 className="font-mono font-bold text-white">CONVERSATION</h3>
              <button
                onClick={onToggleChat}
                className="text-neogenx-gray hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="h-[calc(80vh-60px)]">
              <ChatInterface 
                currentAgent={currentAgent}
                onAgentChange={onAgentChange}
              />
            </div>
          </div>
        ) : (
          <div className="bg-black/20 rounded-lg p-6 border border-neogenx-purple/20">
            <h3 className="font-mono font-bold text-white mb-4">QUICK ACCESS</h3>
            
            <button 
              onClick={onToggleChat}
              className="w-full mb-4 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg transition-all duration-300 hover:scale-105"
              style={{ 
                background: `${agent.color}20`, 
                border: `1px solid ${agent.color}`,
                color: agent.color 
              }}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-mono text-sm">START CHAT</span>
            </button>

            <div className="space-y-3">
              <h4 className="text-sm font-mono font-bold text-neogenx-gray">OTHER AGENTS</h4>
              {allAgents.filter(a => a.id !== agent.id).slice(0, 3).map((otherAgent) => (
                <Link
                  key={otherAgent.id}
                  to={`/agent/${otherAgent.id}`}
                  className="flex items-center space-x-3 p-2 rounded transition-colors hover:bg-black/20"
                >
                  <div 
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: `${otherAgent.color}20` }}
                  >
                    <span 
                      className="text-xs font-mono font-bold"
                      style={{ color: otherAgent.color }}
                    >
                      {otherAgent.initials}
                    </span>
                  </div>
                  <div>
                    <div className="text-sm font-mono text-white">{otherAgent.name}</div>
                    <div className="text-xs text-neogenx-gray">{otherAgent.role}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgentSidebar;
