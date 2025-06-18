
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header';
import AgentBreadcrumb from '../components/AgentBreadcrumb';
import AgentHero from '../components/AgentHero';
import AgentCapabilities from '../components/AgentCapabilities';
import AgentSidebar from '../components/AgentSidebar';
import { getAgentById, getVisibleAgents } from '../data/agents';

const AgentPage = () => {
  const { agentId } = useParams<{ agentId: string }>();
  const agent = agentId ? getAgentById(agentId) : null;
  const [showChat, setShowChat] = useState(false);
  const [currentAgent, setCurrentAgent] = useState(agent);
  const allAgents = getVisibleAgents();

  if (!agent) {
    return (
      <div className="min-h-screen bg-neogenx-navy flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Agent Not Found</h1>
          <Link to="/" className="text-tech-cyan hover:underline">
            Return to Collective
          </Link>
        </div>
      </div>
    );
  }

  const handleStartChat = () => {
    setShowChat(true);
  };

  const handleToggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="min-h-screen bg-neogenx-navy">
      <Header />
      
      <AgentBreadcrumb agent={agent} />

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Agent Profile - Left/Top Section */}
          <div className="xl:col-span-2">
            <AgentHero agent={agent} onStartChat={handleStartChat} />
            <AgentCapabilities agent={agent} />
          </div>

          {/* Chat Interface - Right Section */}
          <AgentSidebar
            agent={agent}
            showChat={showChat}
            onToggleChat={handleToggleChat}
            allAgents={allAgents}
            currentAgent={currentAgent!}
            onAgentChange={setCurrentAgent}
          />
        </div>
      </div>
    </div>
  );
};

export default AgentPage;
