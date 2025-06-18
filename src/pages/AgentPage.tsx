import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MessageCircle, Brain, Zap } from 'lucide-react';
import Header from '../components/Header';
import ChatInterface from '../components/ChatInterface';
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

  return (
    <div className="min-h-screen bg-neogenx-navy">
      <Header />
      
      {/* Breadcrumb Navigation */}
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

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Agent Profile - Left/Top Section */}
          <div className="xl:col-span-2">
            {/* Agent Hero Section */}
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
                        onClick={() => setShowChat(true)}
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
            <div className="mt-8">
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
          </div>

          {/* Chat Interface - Right Section */}
          <div className="xl:col-span-1">
            <div className="sticky top-24">
              {showChat ? (
                <div className="bg-black/20 rounded-lg h-[80vh] border border-neogenx-purple/20">
                  <div className="flex items-center justify-between p-4 border-b border-neogenx-purple/20">
                    <h3 className="font-mono font-bold text-white">CONVERSATION</h3>
                    <button
                      onClick={() => setShowChat(false)}
                      className="text-neogenx-gray hover:text-white transition-colors"
                    >
                      ✕
                    </button>
                  </div>
                  <div className="h-[calc(80vh-60px)]">
                    <ChatInterface 
                      currentAgent={currentAgent!}
                      onAgentChange={setCurrentAgent}
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-black/20 rounded-lg p-6 border border-neogenx-purple/20">
                  <h3 className="font-mono font-bold text-white mb-4">QUICK ACCESS</h3>
                  
                  <button 
                    onClick={() => setShowChat(true)}
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
        </div>
      </div>
    </div>
  );
};

export default AgentPage;
