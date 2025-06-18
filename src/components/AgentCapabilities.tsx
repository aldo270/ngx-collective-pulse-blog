
import React from 'react';
import { Brain, Zap } from 'lucide-react';
import { Agent } from '../data/agents';

interface AgentCapabilitiesProps {
  agent: Agent;
}

const AgentCapabilities: React.FC<AgentCapabilitiesProps> = ({ agent }) => {
  return (
    <div className="space-y-8">
      {/* Capabilities Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Core Capabilities */}
        <div className="bg-black/20 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Brain className="w-5 h-5 text-tech-cyan" />
            <h3 className="text-lg font-bold text-white font-mono">CORE CAPABILITIES</h3>
          </div>
          <div className="space-y-3">
            {agent.capabilities.map((capability, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ background: agent.color }}
                ></div>
                <span className="text-neogenx-gray text-sm">{capability}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Program Adaptation */}
        <div className="bg-black/20 rounded-lg p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-5 h-5 text-tech-cyan" />
            <h3 className="text-lg font-bold text-white font-mono">PROGRAM ADAPTATION</h3>
          </div>
          <div className="space-y-4">
            <div className="border-l-2 border-tech-orange pl-4">
              <h4 className="text-tech-orange font-mono font-bold text-sm mb-1">NGX PRIME</h4>
              <p className="text-neogenx-gray text-sm">{agent.programAdaptation.prime}</p>
            </div>
            <div className="border-l-2 border-tech-green pl-4">
              <h4 className="text-tech-green font-mono font-bold text-sm mb-1">NGX LONGEVITY</h4>
              <p className="text-neogenx-gray text-sm">{agent.programAdaptation.longevity}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Features */}
      <div className="bg-gradient-to-r from-tech-purple/10 to-tech-cyan/10 rounded-lg p-6 border border-tech-purple/20">
        <h3 className="text-lg font-bold text-white font-mono mb-4">COMING SOON</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-neogenx-gray">
          <div>• Live Conversation Interface</div>
          <div>• Real-time Performance Metrics</div>
          <div>• Cross-Agent Collaboration View</div>
          <div>• Predictive Analytics Dashboard</div>
          <div>• Voice Command Integration</div>
          <div>• Memory & Learning Insights</div>
        </div>
      </div>
    </div>
  );
};

export default AgentCapabilities;
