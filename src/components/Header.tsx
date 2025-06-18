
import React from 'react';

const Header = () => {
  return (
    <header 
      className="fixed top-0 w-full z-50 backdrop-blur-xl border-b"
      style={{
        background: 'rgba(10, 6, 40, 0.9)',
        borderColor: 'rgba(109, 0, 255, 0.2)'
      }}
    >
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-black font-mono text-white">
          NGX <span style={{color: '#6D00FF'}}>COLLECTIVE</span>
        </h1>
        <div className="flex items-center space-x-2">
          <div 
            className="w-3 h-3 rounded-full animate-pulse" 
            style={{background: '#00FF7F'}}
          ></div>
          <span className="text-xs font-mono text-white">11 AGENTS OPERATIONAL</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
