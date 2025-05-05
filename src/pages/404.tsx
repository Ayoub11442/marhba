import { useState, useEffect, memo } from "react";

const NotFound = () => {
  // Simulate location with a mock path
  const pathname = "/not-found-path";
  
  // Minimize state variables
  const [position, setPosition] = useState({ x: 50, y: 50 });
  const [shake, setShake] = useState(false);
  
  // Log the 404 error only once
  useEffect(() => {
    console.error("404 Error: Path not found:", pathname);
  }, []);

  // Optimize event handlers
  const handleClick = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  const handleHover = () => {
    setPosition({ 
      x: Math.random() * 80,
      y: Math.random() * 80
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-50">
      <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg border-2 border-amber-800 max-w-sm w-full mx-4 text-center">
        {/* Simplified coffee cup icon */}
        <div className="mx-auto w-16 h-16 bg-amber-800 rounded-b-2xl relative mb-4">
          <div className="absolute -right-3 top-0 h-8 w-4 border-4 border-amber-800 rounded-r-full"></div>
          <div className="absolute top-3 left-2 right-2 bottom-2 bg-amber-400 rounded-b-xl"></div>
        </div>

        {/* 404 Text */}
        <h1 
          className={`text-6xl font-bold mb-4 text-amber-800 cursor-pointer ${shake ? 'animate-bounce' : ''}`}
          onClick={handleClick}
        >
          404
        </h1>
        
        <p className="text-lg text-amber-900 mb-6">
          This page seems to have disappeared.
        </p>
        
        {/* Single button with optimized styling */}
        <a 
          href="/" 
          className="inline-block bg-amber-800 text-amber-50 px-6 py-2 rounded-lg hover:bg-amber-900 font-medium"
        >
          Return Home
        </a>
        
        {/* Simplified running away button */}
        <div className="relative h-16 mt-6">
          <button
            className="absolute bg-amber-700 text-amber-50 px-3 py-1 rounded-full text-sm"
            style={{ 
              left: `${position.x}%`, 
              top: `${position.y}%`,
              transform: 'translate(-50%, -50%)'
            }}
            onMouseEnter={handleHover}
          >
            Catch Me!
          </button>
        </div>
        
        {/* Minimized footer text */}
        <p className="mt-6 text-amber-800 text-xs">
          Path not found: <span className="text-red-700">{pathname}</span>
        </p>
      </div>
    </div>
  );
};

export default memo(NotFound);
