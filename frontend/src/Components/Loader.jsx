import React from 'react';

/**
 * A simple, reusable loading spinner component.
 * It uses the brand's theme color for a consistent look.
 */
const Loader = () => {
  return (
    // A wrapper to center the loader
    <div className="flex justify-center items-center py-20" aria-label="Loading content...">
      <div 
        className="w-16 h-16 border-4 border-[#0096f2] rounded-full animate-spin"
        // Use inline style for border-top-color to ensure transparency for the spin effect
        style={{ borderTopColor: 'transparent' }}
      ></div>
    </div>
  );
};

export default Loader;