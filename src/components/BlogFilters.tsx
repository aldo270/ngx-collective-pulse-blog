
import React from 'react';
import { Search, Filter, BookmarkIcon } from 'lucide-react';

interface BlogFiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  selectedAgent: string;
  onAgentChange: (agent: string) => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  showBookmarked: boolean;
  onBookmarkedToggle: () => void;
}

const agents = ['All', 'NEXUS', 'BLAZE', 'SAGE', 'WAVE', 'SPARK', 'STELLA', 'NOVA', 'CODE', 'LUNA'];
const categories = ['All', 'AI Research', 'Performance', 'Nutrition', 'Analytics', 'Psychology', 'Biohacking', 'Genetics', 'Women\'s Health'];

const BlogFilters: React.FC<BlogFiltersProps> = ({
  searchTerm,
  onSearchChange,
  selectedAgent,
  onAgentChange,
  selectedCategory,
  onCategoryChange,
  showBookmarked,
  onBookmarkedToggle
}) => {
  return (
    <div className="bg-black/20 rounded-lg p-6 mb-8 border border-white/10">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-tech-cyan" />
        <h3 className="text-lg font-bold text-white font-mono">FILTERS</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neogenx-gray" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-black/30 border border-white/10 rounded text-white placeholder-neogenx-gray font-mono text-sm focus:outline-none focus:border-tech-cyan"
          />
        </div>

        {/* Agent Filter */}
        <select
          value={selectedAgent}
          onChange={(e) => onAgentChange(e.target.value)}
          className="px-4 py-2 bg-black/30 border border-white/10 rounded text-white font-mono text-sm focus:outline-none focus:border-tech-cyan"
        >
          {agents.map(agent => (
            <option key={agent} value={agent} className="bg-neogenx-navy">
              {agent === 'All' ? 'All Agents' : agent}
            </option>
          ))}
        </select>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-4 py-2 bg-black/30 border border-white/10 rounded text-white font-mono text-sm focus:outline-none focus:border-tech-cyan"
        >
          {categories.map(category => (
            <option key={category} value={category} className="bg-neogenx-navy">
              {category === 'All' ? 'All Categories' : category}
            </option>
          ))}
        </select>

        {/* Bookmarked Toggle */}
        <button
          onClick={onBookmarkedToggle}
          className={`flex items-center justify-center space-x-2 px-4 py-2 rounded font-mono text-sm transition-all duration-300 ${
            showBookmarked 
              ? 'bg-tech-cyan/20 text-tech-cyan border border-tech-cyan/30' 
              : 'bg-black/30 text-neogenx-gray border border-white/10 hover:text-white'
          }`}
        >
          <BookmarkIcon className="w-4 h-4" />
          <span>Bookmarked</span>
        </button>
      </div>
    </div>
  );
};

export default BlogFilters;
