
import React, { useState, useEffect } from 'react';
import { MessageSquare, Zap, Brain, Users, ArrowRight, Clock, Target } from 'lucide-react';

interface ActivityItem {
  id: string;
  type: 'message' | 'analysis' | 'collaboration' | 'learning';
  agent: string;
  action: string;
  timestamp: string;
  priority: 'low' | 'medium' | 'high';
  color: string;
}

const RealtimeActivity = () => {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [isStreaming, setIsStreaming] = useState(true);

  const activityTemplates = [
    { type: 'message', action: 'Processing user query about nutrition optimization', agent: 'SAGE', priority: 'medium', color: '#00FF7F' },
    { type: 'analysis', action: 'Analyzing performance metrics for optimization', agent: 'WAVE', priority: 'high', color: '#00D4FF' },
    { type: 'collaboration', action: 'Coordinating multi-agent training protocol', agent: 'NEXUS', priority: 'high', color: '#00D4FF' },
    { type: 'learning', action: 'Updating training model with new data', agent: 'BLAZE', priority: 'medium', color: '#FF6B35' },
    { type: 'message', action: 'Generating motivational strategy', agent: 'SPARK', priority: 'low', color: '#6D00FF' },
    { type: 'analysis', action: 'Tracking progress metrics and milestones', agent: 'STELLA', priority: 'medium', color: '#00FF7F' },
    { type: 'collaboration', action: 'Sharing insights across agent network', agent: 'NEXUS', priority: 'high', color: '#00D4FF' },
    { type: 'learning', action: 'Adapting behavioral patterns', agent: 'SPARK', priority: 'low', color: '#6D00FF' }
  ];

  useEffect(() => {
    const generateActivity = () => {
      const template = activityTemplates[Math.floor(Math.random() * activityTemplates.length)];
      const newActivity: ActivityItem = {
        id: Date.now().toString(),
        ...template,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      } as ActivityItem;

      setActivities(prev => [newActivity, ...prev.slice(0, 9)]);
    };

    if (isStreaming) {
      generateActivity(); // Generate initial activity
      const interval = setInterval(generateActivity, 3000 + Math.random() * 4000);
      return () => clearInterval(interval);
    }
  }, [isStreaming]);

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'message': return MessageSquare;
      case 'analysis': return Target;
      case 'collaboration': return Users;
      case 'learning': return Brain;
      default: return Zap;
    }
  };

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case 'high': return 'border-l-red-500 bg-red-500/5';
      case 'medium': return 'border-l-yellow-500 bg-yellow-500/5';
      case 'low': return 'border-l-green-500 bg-green-500/5';
      default: return 'border-l-gray-500 bg-gray-500/5';
    }
  };

  return (
    <div className="bg-black/20 rounded-lg border border-neogenx-purple/20 overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-neogenx-purple/20">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white font-mono">REALTIME ACTIVITY</h3>
          <button
            onClick={() => setIsStreaming(!isStreaming)}
            className={`flex items-center space-x-2 px-3 py-1 rounded-lg transition-all ${
              isStreaming 
                ? 'bg-tech-green/20 text-tech-green border border-tech-green/30' 
                : 'bg-neogenx-gray/20 text-neogenx-gray border border-neogenx-gray/30'
            }`}
          >
            <div className={`w-2 h-2 rounded-full ${isStreaming ? 'animate-pulse bg-tech-green' : 'bg-neogenx-gray'}`}></div>
            <span className="text-xs font-mono">{isStreaming ? 'LIVE' : 'PAUSED'}</span>
          </button>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 rounded-full bg-tech-cyan animate-pulse"></div>
              <span className="text-neogenx-gray font-mono text-xs">{activities.length} Events</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-3 h-3 text-tech-orange" />
              <span className="text-neogenx-gray font-mono text-xs">Auto-refresh</span>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Stream */}
      <div className="max-h-96 overflow-y-auto custom-scrollbar">
        <div className="p-4 space-y-3">
          {activities.length === 0 ? (
            <div className="text-center py-8">
              <Brain className="w-12 h-12 text-neogenx-gray mx-auto mb-4 animate-pulse" />
              <p className="text-neogenx-gray font-mono text-sm">Waiting for neural activity...</p>
            </div>
          ) : (
            activities.map((activity, index) => {
              const Icon = getActivityIcon(activity.type);
              return (
                <div
                  key={activity.id}
                  className={`border-l-2 pl-4 py-3 rounded-r-lg transition-all duration-500 hover:bg-black/20 cursor-pointer group ${getPriorityStyle(activity.priority)}`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    opacity: Math.max(0.3, 1 - index * 0.1)
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{ backgroundColor: `${activity.color}20`, border: `1px solid ${activity.color}40` }}
                      >
                        <Icon className="w-4 h-4" style={{ color: activity.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span 
                            className="font-mono font-bold text-sm"
                            style={{ color: activity.color }}
                          >
                            {activity.agent}
                          </span>
                          <ArrowRight className="w-3 h-3 text-neogenx-gray" />
                          <span className="text-xs font-mono text-neogenx-gray uppercase tracking-wider">
                            {activity.type}
                          </span>
                        </div>
                        <p className="text-sm text-white group-hover:text-tech-cyan transition-colors">
                          {activity.action}
                        </p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs font-mono text-neogenx-gray">
                            {activity.timestamp}
                          </span>
                          <div className={`px-2 py-1 rounded-full text-xs font-mono ${
                            activity.priority === 'high' ? 'bg-red-500/20 text-red-400' :
                            activity.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-green-500/20 text-green-400'
                          }`}>
                            {activity.priority.toUpperCase()}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-neogenx-purple/20 bg-gradient-to-r from-neogenx-purple/5 to-tech-cyan/5">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-neogenx-gray">Neural Network Status</span>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-tech-green animate-pulse"></div>
            <span className="text-tech-green">ALL SYSTEMS OPERATIONAL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealtimeActivity;
