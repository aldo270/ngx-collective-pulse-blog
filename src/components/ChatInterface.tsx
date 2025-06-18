
import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, Volume2 } from 'lucide-react';
import { Agent } from '../data/agents';
import ChatMessage from './ChatMessage';
import VoiceVisualizer from './VoiceVisualizer';
import AgentHandoff from './AgentHandoff';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'agent';
  agent?: Agent;
  timestamp: Date;
  type: 'text' | 'voice' | 'handoff';
}

interface ChatInterfaceProps {
  currentAgent: Agent;
  onAgentChange: (agent: Agent) => void;
  className?: string;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  currentAgent, 
  onAgentChange, 
  className = '' 
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `Hola! Soy ${currentAgent.name}, tu ${currentAgent.role}. ¿En qué puedo ayudarte hoy?`,
      sender: 'agent',
      agent: currentAgent,
      timestamp: new Date(),
      type: 'text'
    }
  ]);
  
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: 'user',
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simular respuesta del agente
    setTimeout(() => {
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: `Como ${currentAgent.name}, te sugiero que analicemos esto desde mi perspectiva de ${currentAgent.specialization}. Basándome en tu consulta, puedo ayudarte con...`,
        sender: 'agent',
        agent: currentAgent,
        timestamp: new Date(),
        type: 'text'
      };
      
      setMessages(prev => [...prev, agentResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleVoiceToggle = () => {
    setIsRecording(!isRecording);
    // Aquí se conectaría con ElevenLabs WebSocket
  };

  const handleAgentHandoff = (newAgent: Agent) => {
    const handoffMessage: Message = {
      id: Date.now().toString(),
      content: `Te estoy transfiriendo con ${newAgent.name} quien es especialista en ${newAgent.specialization}. Ellos podrán ayudarte mejor con esta consulta.`,
      sender: 'agent',
      agent: currentAgent,
      timestamp: new Date(),
      type: 'handoff'
    };

    setMessages(prev => [...prev, handoffMessage]);
    onAgentChange(newAgent);

    setTimeout(() => {
      const welcomeMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `¡Hola! Soy ${newAgent.name}. ${currentAgent.name} me ha puesto al día sobre tu consulta. Permíteme ayudarte desde mi especialización en ${newAgent.specialization}.`,
        sender: 'agent',
        agent: newAgent,
        timestamp: new Date(),
        type: 'text'
      };
      
      setMessages(prev => [...prev, welcomeMessage]);
    }, 1000);
  };

  return (
    <div className={`flex flex-col h-full bg-neogenx-navy ${className}`}>
      {/* Chat Header */}
      <div 
        className="flex items-center space-x-3 p-4 border-b"
        style={{ borderColor: `${currentAgent.color}30` }}
      >
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center animate-system-pulse"
          style={{ background: `${currentAgent.color}20`, border: `2px solid ${currentAgent.color}` }}
        >
          <span 
            className="text-lg font-mono font-bold"
            style={{ color: currentAgent.color }}
          >
            {currentAgent.initials}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="font-mono font-bold text-white">{currentAgent.name}</h3>
          <p className="text-sm text-neogenx-gray">{currentAgent.role}</p>
          <div className="flex items-center space-x-2 mt-1">
            <div 
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: currentAgent.color }}
            />
            <span className="text-xs font-mono text-neogenx-gray">
              {isSpeaking ? 'SPEAKING' : 'ONLINE'}
            </span>
          </div>
        </div>
        <button
          onClick={handleVoiceToggle}
          className={`p-2 rounded-lg transition-colors ${
            isRecording ? 'bg-red-500 text-white' : 'bg-black/20 text-neogenx-gray hover:text-white'
          }`}
        >
          <Volume2 className="w-5 h-5" />
        </button>
      </div>

      {/* Voice Visualizer */}
      {(isRecording || isSpeaking) && (
        <div className="p-4 border-b" style={{ borderColor: `${currentAgent.color}30` }}>
          <VoiceVisualizer 
            isActive={isRecording || isSpeaking}
            agentColor={currentAgent.color}
            type={isRecording ? 'recording' : 'speaking'}
          />
        </div>
      )}

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id}>
            {message.type === 'handoff' ? (
              <AgentHandoff 
                fromAgent={message.agent!}
                message={message.content}
                timestamp={message.timestamp}
              />
            ) : (
              <ChatMessage 
                message={message}
                isCurrentAgent={message.agent?.id === currentAgent.id}
              />
            )}
          </div>
        ))}
        
        {isTyping && (
          <div className="flex items-center space-x-3">
            <div 
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: `${currentAgent.color}20` }}
            >
              <span 
                className="text-xs font-mono font-bold"
                style={{ color: currentAgent.color }}
              >
                {currentAgent.initials}
              </span>
            </div>
            <div className="flex space-x-1">
              <div 
                className="w-2 h-2 rounded-full animate-bounce"
                style={{ background: currentAgent.color, animationDelay: '0ms' }}
              />
              <div 
                className="w-2 h-2 rounded-full animate-bounce"
                style={{ background: currentAgent.color, animationDelay: '150ms' }}
              />
              <div 
                className="w-2 h-2 rounded-full animate-bounce"
                style={{ background: currentAgent.color, animationDelay: '300ms' }}
              />
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div 
        className="p-4 border-t"
        style={{ borderColor: `${currentAgent.color}30` }}
      >
        <div className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder={`Pregúntale a ${currentAgent.name}...`}
              className="w-full bg-black/20 border border-neogenx-gray/30 rounded-lg px-4 py-3 text-white placeholder-neogenx-gray focus:outline-none focus:border-tech-cyan"
            />
          </div>
          
          <button
            onClick={handleVoiceToggle}
            className={`p-3 rounded-lg transition-all duration-300 ${
              isRecording 
                ? 'bg-red-500 text-white animate-pulse' 
                : 'bg-black/20 text-neogenx-gray hover:text-white hover:bg-black/40'
            }`}
          >
            {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
          </button>
          
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim()}
            className="p-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              background: inputMessage.trim() ? `${currentAgent.color}20` : 'rgba(0,0,0,0.2)',
              border: `1px solid ${inputMessage.trim() ? currentAgent.color : 'rgba(139, 157, 195, 0.3)'}`,
              color: inputMessage.trim() ? currentAgent.color : '#8B9DC3'
            }}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
