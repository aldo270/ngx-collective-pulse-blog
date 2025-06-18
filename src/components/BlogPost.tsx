
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookmarkIcon } from 'lucide-react';

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
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Check if post is bookmarked
  useEffect(() => {
    if (postId) {
      const bookmarkedPosts = JSON.parse(localStorage.getItem('bookmarkedPosts') || '[]');
      setIsBookmarked(bookmarkedPosts.includes(postId));
    }
  }, [postId]);

  // Handle bookmark toggle
  const toggleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!postId) return;
    
    const bookmarkedPosts = JSON.parse(localStorage.getItem('bookmarkedPosts') || '[]');
    let updatedBookmarks;
    
    if (isBookmarked) {
      updatedBookmarks = bookmarkedPosts.filter((id: string) => id !== postId);
    } else {
      updatedBookmarks = [...bookmarkedPosts, postId];
    }
    
    localStorage.setItem('bookmarkedPosts', JSON.stringify(updatedBookmarks));
    setIsBookmarked(!isBookmarked);
    
    // Trigger a custom event to update filters
    window.dispatchEvent(new CustomEvent('bookmarkChanged'));
  };

  const commonProps = {
    className: "block rounded-lg p-6 transition-all duration-300 hover:scale-[1.02] cursor-pointer group relative",
    style: {
      background: 'rgba(10, 6, 40, 0.5)',
      border: '1px solid rgba(109, 0, 255, 0.3)'
    },
    onMouseEnter: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.borderColor = `${agent.color}50`;
    },
    onMouseLeave: (e: React.MouseEvent<HTMLElement>) => {
      e.currentTarget.style.borderColor = 'rgba(109, 0, 255, 0.3)';
    }
  };

  const content = (
    <>
      {/* Bookmark indicator */}
      {isBookmarked && (
        <div className="absolute top-4 right-4">
          <BookmarkIcon className="w-5 h-5 text-tech-cyan fill-current" />
        </div>
      )}
      
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
        
        <div className="flex items-center space-x-2">
          {/* Bookmark button */}
          <button
            onClick={toggleBookmark}
            className={`p-2 rounded transition-all duration-300 hover:scale-105 ${
              isBookmarked 
                ? 'bg-tech-cyan/20 text-tech-cyan' 
                : 'bg-black/20 text-neogenx-gray hover:text-white'
            }`}
          >
            <BookmarkIcon className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>
          
          {/* Read more button */}
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
      </div>
    </>
  );

  if (postId) {
    return (
      <Link to={`/blog/${postId}`} {...commonProps}>
        {content}
      </Link>
    );
  }

  return (
    <div {...commonProps}>
      {content}
    </div>
  );
};

export default BlogPost;
