import React, { useState } from 'react';
// Assuming useAppContext is in this path, adjust if needed
import { useAppContext } from '../Context/Context';
// Import the Loader component based on your file structure
import Loader from '../Components/Loader';

/**
 * Formats an ISO date string into a readable format (e.g., "November 3, 2025").
 * @param {string} isoString - The ISO date string to format.
 * @returns {string} A formatted, readable date.
*/
const formatDate = (isoString) => {
  if (!isoString) return "Invalid Date";
  try {
    return new Date(isoString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (error) {
    console.error("Could not format date:", isoString, error);
    return "Invalid Date";
  }
};

/**
 * Handles image loading errors by replacing the source with a placeholder.
 * @param {React.SyntheticEvent<HTMLImageElement>} e - The image error event.
*/
const onImageError = (e) => {
  e.target.src = 'https://placehold.co/600x400/eeeeee/999999?text=Image+Not+Available';
};

/**
 * News Component
 * Displays a list of articles from the useAppContext, with a "Load More" functionality.
*/
const News = () => {
  // Use context values, now including 'isLoading'
  const { articles, articalCount, isLoading } = useAppContext();

  // State to manage the number of visible articles
  const [visibleCount, setVisibleCount] = useState(20);

  // Handler for the "Load More" button
  const loadMoreArticles = () => {
    // Increase visible count by 20
    setVisibleCount((prevCount) => prevCount + 20);
  };

  // Check if there are more articles to load
  const hasMoreArticles = visibleCount < (articalCount || 0);
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 font-sans py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Page Title */}
        <h1
          className="text-4xl md:text-6xl font-bold text-[#0096f2] text-center mb-16"
          style={{ textShadow: '0 2px 4px rgba(0, 150, 242, 0.1)' }}
        >
          Latest Health News
        </h1>

        {/************************************/}
        {/* START: Conditional Render Update */}
        {/************************************/}

        {isLoading ? (
          // 1. If loading, show the centered Loader
          <div className="flex justify-center items-center py-20">
            <Loader />
          </div>
        ) : Array.isArray(articles) && articles.length > 0 ? (
          // 2. If NOT loading AND articles exist, show the grid and button
          <>
            {/* Articles Grid (Original Code) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(0, visibleCount).map((article, index) => (
                <div
                  key={article.url || index}
                  className="bg-white rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl overflow-hidden flex flex-col"
                >
                  {/* Article Image */}
                  <img
                    src={article.image || 'https://placehold.co/600x400/eeeeee/999999?text=Image+Not+Available'}
                    alt={article.title || "Article image"}
                    className="w-full h-48 object-cover"
                    onError={onImageError}
                  />

                  <div className="p-5 flex flex-col flex-grow">
                    {/* Source and Date */}
                    <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
                      <span
                        className="font-semibold text-[#0096f2] truncate"
                        style={{ maxWidth: '60%' }}
                      >
                        {/* ✅ FIX 1: Access .name from the source object. */}
                        {/* Use ?. optional chaining for safety. */}
                        {article.source?.name || 'Unknown Source'}
                      </span>
                      <span className="text-right flex-shrink-0">
                        {formatDate(article.publishedAt)}
                      </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-3 flex-grow">
                      {article.title || 'No Title Available'}
                    </h2>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.description || 'No description available.'}
                    </p>

                    {/* Read More Link */}
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-block text-center font-bold text-white bg-[#0096f2] rounded-lg px-4 py-2 transition-all duration-300 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#0096f2] focus:ring-opacity-50"
                    >
                      Read Full Article
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button (Original Code) */}
            {hasMoreArticles && (
              <div className="text-center mt-16">
                <button
                  onClick={loadMoreArticles}
                  className="font-bold text-white bg-[#0096f2] rounded-lg px-8 py-3 text-lg transition-all duration-300 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-[#0096f2] focus:ring-opacity-50 transform hover:scale-105"
                >
                  Load More News
                </button>
              </div>
            )}
          </>
        ) : (
          // ✅ FIX 2: If NOT loading and NO articles, show this message.
          // (Your old code showed <Loader /> here, which was incorrect).
         <Loader/>
        )}

        {/**********************************/}
        {/* END: Conditional Render Update */}
        {/**********************************/}

      </div>
    </div>
  );
};

export default News;