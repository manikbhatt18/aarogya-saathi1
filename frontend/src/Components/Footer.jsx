import React from 'react';

/**
 * A modern, reusable Footer component for Aarogya Saathi.
 * Includes navigation links and a copyright notice.
 * Themed with the brand color #0096f2.
 */
const Footer = () => {
  // Updated links as per user request
  const links = ['Home', 'News', 'Services', 'About Us', 'Contact Us'];

  return (
    // Updated: Background color set to the theme color
    <footer 
      className="text-white p-8 font-sans" 
      style={{ backgroundColor: '#0096f2' }}
    >
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        
        {/* Logo/Title */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold text-white">Aarogya Saathi</h2>
          <p className="text-sm opacity-90">Your Personal Health Companion.</p>
        </div>
        
        {/* Navigation Links - Updated: Stacked vertically and added md:pl-4 for padding on desktop */}
        <nav className="flex flex-col gap-2 text-center md:text-left md:pl-4">
          {links.map((link) => (
            <a 
              key={link} 
              href="#" // You can replace '#' with your actual paths
              className="text-white hover:text-gray-200 transition-colors duration-300 text-lg"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Copyright - Updated: Border color lightened for contrast */}
      <div className="mt-8 pt-4 border-t border-blue-400 text-center text-sm opacity-90">
        <p>&copy; {new Date().getFullYear()} Aarogya Saathi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;