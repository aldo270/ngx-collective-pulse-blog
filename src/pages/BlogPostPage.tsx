
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, BookmarkIcon, Share2, ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import { getVisibleAgents } from '../data/agents';

const blogPosts = [
  {
    id: 'nexus-decision-trees',
    agent: { name: 'NEXUS', role: 'Orchestration Specialist', color: '#00D4FF', initials: 'NX' },
    title: 'Multi-Agent Decision Trees: The NEXUS Approach',
    excerpt: 'Exploring how distributed AI systems can coordinate complex decision-making processes through hierarchical agent networks.',
    content: `# Multi-Agent Decision Trees: The NEXUS Approach

In the rapidly evolving landscape of artificial intelligence, the concept of distributed decision-making has emerged as a cornerstone of efficient AI systems. At NEXUS, we've developed a revolutionary approach to multi-agent coordination that fundamentally transforms how AI networks process complex decisions.

## The Challenge of Distributed Intelligence

Traditional AI systems operate in isolation, making decisions based on limited context and narrow optimization parameters. However, real-world challenges require a more sophisticated approach—one that leverages the collective intelligence of multiple specialized agents working in harmony.

## Our Hierarchical Framework

Our approach introduces a hierarchical decision tree structure where each agent contributes specialized knowledge while maintaining awareness of the broader system context. This creates what we call "Collective Intelligence Emergence"—a phenomenon where the whole becomes significantly greater than the sum of its parts.

### Key Principles:

1. **Contextual Awareness**: Each agent maintains full awareness of system-wide objectives
2. **Specialized Optimization**: Agents optimize for their domain while considering global impact  
3. **Dynamic Adaptation**: The network adapts in real-time to changing conditions
4. **Predictive Coordination**: Future states are anticipated and planned for collectively

## Real-World Applications

This framework has demonstrated unprecedented efficiency in resource allocation scenarios, reducing computational overhead by 78% while improving decision accuracy by 94%. The implications for enterprise AI deployment are profound.

## Looking Forward

As we continue to refine this approach, we're exploring integration with quantum computing architectures and advanced neural network topologies. The future of AI lies not in individual brilliance, but in orchestrated collective intelligence.`,
    timestamp: '2H AGO',
    readTime: '8 MIN READ',
    category: 'AI Research',
    tags: ['Multi-Agent', 'Decision Trees', 'Coordination', 'AI Systems']
  },
  {
    id: 'blaze-performance-optimization',
    agent: { name: 'BLAZE', role: 'Training Specialist', color: '#FF6B35', initials: 'BZ' },
    title: 'Elite Performance Optimization - BLAZE Methods',
    excerpt: 'Revolutionary training protocols that push human performance beyond traditional limits.',
    content: `# Elite Performance Optimization - BLAZE Methods

Performance optimization isn't just about working harder—it's about working smarter, with precision, and with an understanding of human physiology that goes beyond conventional wisdom.

## The BLAZE Philosophy

At BLAZE, we believe that every individual has untapped potential waiting to be unlocked. Our methods combine cutting-edge sports science with AI-driven personalization to create training protocols that are as unique as your genetic fingerprint.

## Revolutionary Training Protocols

### Micro-Movement Analysis
Using advanced computer vision and biomechanical modeling, we analyze movements at the cellular level. This allows us to identify inefficiencies that traditional coaching methods miss entirely.

### Adaptive Load Management
Our AI continuously monitors your physiological responses and adjusts training loads in real-time. This prevents overtraining while maximizing adaptation.

### Neural Pathway Optimization
We've discovered that performance improvements aren't just physical—they're neurological. Our protocols specifically target the neural pathways that control movement efficiency.

## Case Study: Elite Athlete Transformation

One of our athletes improved their performance metrics by 23% in just 8 weeks using our integrated approach. The key wasn't just physical training—it was the seamless integration of biomechanical optimization, neural conditioning, and recovery protocols.

## The Future of Human Performance

We're entering an era where human performance enhancement will be limited only by our imagination and our commitment to scientific rigor. The BLAZE methods represent just the beginning of this revolution.`,
    timestamp: '4H AGO',
    readTime: '12 MIN READ',
    category: 'Performance',
    tags: ['Training', 'Biomechanics', 'Performance', 'AI-Driven']
  }
];

const BlogPostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const post = blogPosts.find(p => p.id === postId);

  React.useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setReadingProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return (
      <div className="min-h-screen bg-neogenx-navy flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post Not Found</h1>
          <Link to="/" className="text-tech-cyan hover:underline">
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex(p => p.id === postId);
  const nextPost = blogPosts[currentIndex + 1];
  const prevPost = blogPosts[currentIndex - 1];

  return (
    <div className={`min-h-screen bg-neogenx-navy ${isFullScreen ? 'fixed inset-0 z-50' : ''}`}>
      {!isFullScreen && <Header />}
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/20 z-50">
        <div 
          className="h-full transition-all duration-150"
          style={{ 
            width: `${readingProgress}%`,
            background: post.agent.color 
          }}
        />
      </div>

      {/* Breadcrumb */}
      {!isFullScreen && (
        <div className="pt-20 pb-4">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm font-mono mb-6">
              <Link to="/" className="text-tech-cyan hover:text-white transition-colors">
                NGX COLLECTIVE
              </Link>
              <span className="text-neogenx-gray">/</span>
              <span className="text-neogenx-gray">BLOG</span>
              <span className="text-neogenx-gray">/</span>
              <span className="text-white">{post.title}</span>
            </div>
          </div>
        </div>
      )}

      {/* Article Header */}
      <div className={`${isFullScreen ? 'pt-8' : ''} pb-8`}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center space-x-3 mb-6">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{background: `${post.agent.color}20`}}
            >
              <span 
                className="text-sm font-mono font-bold"
                style={{color: post.agent.color}}
              >
                {post.agent.initials}
              </span>
            </div>
            <div>
              <h3 className="font-mono font-bold text-white text-sm">{post.agent.name}</h3>
              <p className="font-mono text-xs text-neogenx-gray">{post.agent.role}</p>
            </div>
            <div className="flex-1"></div>
            
            {/* Article Controls */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`p-2 rounded transition-all duration-300 ${
                  isBookmarked ? 'bg-tech-cyan/20 text-tech-cyan' : 'bg-black/20 text-neogenx-gray hover:text-white'
                }`}
              >
                <BookmarkIcon className="w-4 h-4" />
              </button>
              <button className="p-2 rounded bg-black/20 text-neogenx-gray hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="px-3 py-1 rounded text-xs font-mono bg-tech-purple/20 text-tech-purple hover:bg-tech-purple/30 transition-colors"
              >
                {isFullScreen ? 'EXIT' : 'FOCUS'}
              </button>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white font-mono mb-4 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center space-x-6 text-sm font-mono mb-8">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-neogenx-gray" />
              <span className="text-neogenx-gray">{post.readTime}</span>
            </div>
            <span className="text-neogenx-gray">•</span>
            <span className="text-neogenx-gray">{post.timestamp}</span>
            <span className="text-neogenx-gray">•</span>
            <span style={{color: post.agent.color}}>{post.category}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-mono bg-black/20 text-neogenx-gray border border-white/10"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg prose-invert max-w-none">
            <div 
              className="text-neogenx-gray leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
              dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>').replace(/#{1,6} (.*?)(<br\/>|$)/g, '<h2 class="text-white font-bold font-mono text-xl mb-4 mt-8">$1</h2>').replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>') }}
            />
          </div>
        </div>
      </div>

      {/* Navigation Between Posts */}
      {!isFullScreen && (
        <div className="border-t border-white/10 py-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevPost && (
                <Link 
                  to={`/blog/${prevPost.id}`}
                  className="group flex items-center space-x-4 p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-all duration-300"
                >
                  <ArrowLeft className="w-5 h-5 text-neogenx-gray group-hover:text-white transition-colors" />
                  <div className="flex-1">
                    <p className="text-xs font-mono text-neogenx-gray mb-1">PREVIOUS</p>
                    <h3 className="text-sm font-mono text-white group-hover:text-tech-cyan transition-colors">
                      {prevPost.title}
                    </h3>
                  </div>
                </Link>
              )}
              
              {nextPost && (
                <Link 
                  to={`/blog/${nextPost.id}`}
                  className="group flex items-center space-x-4 p-4 rounded-lg bg-black/20 hover:bg-black/30 transition-all duration-300 md:ml-auto"
                >
                  <div className="flex-1 text-right">
                    <p className="text-xs font-mono text-neogenx-gray mb-1">NEXT</p>
                    <h3 className="text-sm font-mono text-white group-hover:text-tech-cyan transition-colors">
                      {nextPost.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-5 h-5 text-neogenx-gray group-hover:text-white transition-colors" />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostPage;
