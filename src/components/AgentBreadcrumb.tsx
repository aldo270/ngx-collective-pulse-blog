
import React from 'react';
import { Link } from 'react-router-dom';
import { Agent } from '../data/agents';

interface AgentBreadcrumbProps {
  agent: Agent;
}

const AgentBreadcrumb: React.FC<AgentBreadcrumbProps> = ({ agent }) => {
  return (
    <div className="pt-20 pb-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center space-x-2 text-sm font-mono">
          <Link to="/" className="text-tech-cyan hover:text-white transition-colors">
            NGX COLLECTIVE
          </Link>
          <span className="text-neogenx-gray">/</span>
          <span className="text-white">{agent.name}</span>
        </div>
      </div>
    </div>
  );
};

export default AgentBreadcrumb;
