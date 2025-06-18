
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Agent } from '../data/agents';

interface AgentHeroProps {
  agent: Agent;
  onStartChat: () => void;
}

const AgentHero: React.FC<AgentHeroProps> = ({ agent, onStartChat }) => {
  return (
    <div className="pb-8">
      <div className="neural-network-bg rounded-lg p-8 animate-glow-pulse">
        <div className="flex items-start justify-between mb-6">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-tech-cyan hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-mono text-sm">BACK TO COLLECTIVE</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <div 
              className="w-3 h-3 rounded-full animate-pulse" 
              style={{ background: agent.color }}
            ></div>
            <span className="text-xs font-mono text-neogenx-gray">ACTIVE</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Agent Avatar & Basic Info */}
          <div className="flex flex-col items-center text-center">
            <div 
              className="w-24 h-24 rounded-full flex items-center justify-center mb-4 animate-system-pulse"
              style={{ background: `${agent.color}20`, border: `2px solid ${agent.color}` }}
            >
              <span 
                className="text-2xl font-mono font-bold"
                style={{ color: agent.color }}
              >
                {agent.initials}
              </span>
            </div>
            <h1 className="text-3xl font-black text-white font-mono mb-2">{agent.name}</h1>
            <p className="text-lg text-tech-cyan font-mono mb-4">{agent.role}</p>
            <div className="bg-black/20 rounded-lg p-3 mb-4">
              <p className="text-sm font-mono text-neogenx-gray mb-1">MBTI TYPE</p>
              <p className="text-white font-bold">{agent.mbti}</p>
            </div>
          </div>

          {/* Specialization & Description */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-tech-cyan font-mono mb-4">
              {agent.specialization}
            </h2>
            <p className="text-neogenx-gray leading-relaxed mb-6">
              {agent.description}
            </p>
            
            <div className="bg-black/20 rounded-lg p-4 mb-6">
              <h3 className="text-lg font-bold text-white mb-2">Personality Profile</h3>
              <p className="text-neogenx-gray text-sm">{agent.personality}</p>
            </div>

            <div className="flex space-x-4">
              <button 
                onClick={onStartChat}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
                style={{ 
                  background: `${agent.color}20`, 
                  border: `1px solid ${agent.color}`,
                  color: agent.color 
                }}
              >
                <MessageCircle className="w-4 h-4" />
                <span className="font-mono text-sm">START CONVERSATION</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentHero;
