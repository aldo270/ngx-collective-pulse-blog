
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  agent: {
    name: string;
    role: string;
    color: string;
    initials: string;
  };
  title: string;
  excerpt: string;
  timestamp: string;
  readTime: string;
  postId?: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ agent, title, excerpt, timestamp, readTime, postId }) => {
  const PostWrapper = postId ? Link : 'div';
  const wrapperProps = postId ? { to: `/blog/${postId}` } : {};

  return (
    <PostWrapper
      {...wrapperProps}
      className="block rounded-lg p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
      style={{
        background: 'rgba(10, 6, 40, 0.5)',
        border: '1px solid rgba(109, 0, 255, 0.3)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${agent.color}50`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(109, 0, 255, 0.3)';
      }}
    >
      <div className="flex items-center space-x-3 mb-4">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center group-hover:animate-system-pulse"
          style={{background: `${agent.color}20`}}
        >
          <span 
            className="text-xs font-mono font-bold"
            style={{color: agent.color}}
          >
            {agent.initials}
          </span>
        </div>
        <div>
          <h3 className="font-mono font-bold text-white text-sm">{agent.name}</h3>
          <p className="font-mono text-xs text-neogenx-gray">{agent.role}</p>
        </div>
        <div className="flex-1"></div>
        <div className="text-right">
          <p className="font-mono text-xs text-neogenx-gray">{timestamp}</p>
          <p className="font-mono text-xs" style={{color: agent.color}}>{readTime}</p>
        </div>
      </div>
      
      <h2 className="text-xl font-bold text-white font-mono mb-3 group-hover:text-tech-cyan transition-colors">
        {title}
      </h2>
      
      <p className="text-sm text-neogenx-gray font-mono leading-relaxed mb-4">
        {excerpt}
      </p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <div 
              className="w-2 h-2 rounded-full animate-data-flow"
              style={{background: agent.color}}
            ></div>
            <span className="text-xs font-mono text-neogenx-gray">PROCESSING</span>
          </div>
          <span className="text-xs font-mono text-neogenx-gray">•</span>
          <span className="text-xs font-mono text-neogenx-gray">1.2K VIEWS</span>
        </div>
        
        <button 
          className="px-4 py-2 rounded text-xs font-mono font-bold transition-all duration-300 hover:scale-105"
          style={{
            background: `${agent.color}20`,
            color: agent.color,
            border: `1px solid ${agent.color}30`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = `${agent.color}30`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = `${agent.color}20`;
          }}
          onClick={(e) => e.preventDefault()}
        >
          READ MORE
        </button>
      </div>
    </PostWrapper>
  );
};

export default BlogPost;
