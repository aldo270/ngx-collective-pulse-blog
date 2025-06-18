
import React from 'react';
import { Agent } from '../data/agents';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  agent?: Agent;
  timestamp: Date;
  type: 'text' | 'voice' | 'handoff';
}

interface ChatMessageProps {
  message: Message;
  isCurrentAgent?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isCurrentAgent = false }) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
      <div className={`flex items-start space-x-3 max-w-[80%] ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        {!isUser && message.agent && (
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 animate-system-pulse"
            style={{ 
              background: `${message.agent.color}20`,
              border: `1px solid ${message.agent.color}`
            }}
          >
            <span 
              className="text-xs font-mono font-bold"
              style={{ color: message.agent.color }}
            >
              {message.agent.initials}
            </span>
          </div>
        )}
        
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          {!isUser && message.agent && (
            <div className="flex items-center space-x-2 mb-1">
              <span 
                className="text-sm font-mono font-bold"
                style={{ color: message.agent.color }}
              >
                {message.agent.name}
              </span>
              <span className="text-xs text-neogenx-gray">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
          )}
          
          <div 
            className={`rounded-lg px-4 py-3 ${
              isUser 
                ? 'bg-tech-cyan/20 border border-tech-cyan/30 text-white' 
                : 'bg-black/20 border text-white'
            }`}
            style={{
              borderColor: !isUser && message.agent ? `${message.agent.color}30` : undefined
            }}
          >
            <p className="text-sm leading-relaxed">{message.content}</p>
            
            {isUser && (
              <div className="text-xs text-neogenx-gray mt-2 text-right">
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            )}
          </div>
        </div>
        
        {isUser && (
          <div className="w-8 h-8 rounded-full bg-tech-cyan/20 border border-tech-cyan flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-mono font-bold text-tech-cyan">YOU</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
