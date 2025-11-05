import React from 'react';
import {motion} from "framer-motion";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";


// We'll use lucide-react for high-quality, lightweight icons
import { 
  HeartPulse, Stethoscope, FilePlus2, ShieldCheck,
  FileSearch, Bot, MapPin,Newspaper // Icons for advanced features
} from 'lucide-react';

/**
 * A modern, animated Home component for Aarogya Saathi.
 * This component features a prominent heading, tagline, animated feature
 * cards, a tool gallery, and a new responsive timeline for advanced features.
 */
const Home = () => {
  const { t } = useTranslation();

  // --- Keyframes for Animations ---
  // We add this style block directly for self-contained animations
  const animationStyles = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .fade-in {
      animation: fadeIn 0.6s ease-out forwards;
      opacity: 0; /* Start hidden */
    }

    @keyframes pulse-ring {
      0% {
        box-shadow: 0 0 0 0 rgba(0, 150, 242, 0.4);
      }
      70% {
        box-shadow: 0 0 0 12px rgba(0, 150, 242, 0);
      }
      100% {
        box-shadow: 0 0 0 0 rgba(0, 150, 242, 0);
      }
    }

    .pulse-ring {
      /* Uses the theme color #0096f2 (rgb(0, 150, 242)) */
      animation: pulse-ring 2.5s infinite;
    }

    /* === NEW: Timeline Animations === */
    @keyframes fill-timeline {
      from { height: 0; }
      to { height: 100%; }
    }
    
    .timeline-fill {
      animation: fill-timeline 2s ease-out 0.5s forwards;
    }
  `;


  useEffect(() => {
  // Create a new <script> element
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
  script.async = true;

  // When script loads, initialize the Voiceflow chat widget
  script.onload = () => {
    if (window.voiceflow?.chat) {
      window.voiceflow.chat.load({
        verify: { projectID: "6909c95ac62b5a1186a5ccde" },
        url: "https://general-runtime.voiceflow.com",
        versionID: "production",
        voice: {
          url: "https://runtime-api.voiceflow.com",
        },
      });
    }
  };

  // Append the script to the DOM
  document.body.appendChild(script);

  // Cleanup (optional, to remove script on unmount)
  return () => {
    document.body.removeChild(script);
  };
}, []);
  // An array to hold feature card information for the hero
  // Hero Features
const heroFeatures = [
  {
    icon: Bot, // Changed from Stethoscope
    title: "Chat via WhatsApp & SMS", // New key. E.g., "Chat via WhatsApp & SMS"
    description: "Get instant help and answers on your favorite messaging apps.", // New key. E.g., "Get instant help and answers on your favorite messaging apps."
  },
  {
    icon: Newspaper, // Changed from FilePlus2
    title:  "Health News", // New key. E.g., "Health News"
    description: "Stay updated with the latest articles, breakthroughs, and wellness tips.", // New key. E.g., "Stay updated with the latest articles, breakthroughs, and wellness tips."
  },
  {
    icon: MapPin, // Changed from ShieldCheck
    title:  "Nearby Hospitals", // New key. E.g., "Nearby Hospitals"
    description: "Quickly find clinics, pharmacies, and hospitals near you.", // New key. E.g., "Quickly find clinics, pharmacies, and hospitals near you."
  },
];

// Medical Tools
const medicalTools = [
  {
    src: "https://images.unsplash.com/photo-1655913197692-012897652d13?auto=format&fit=crop&q=60&w=600",
    alt: "Stethoscope",
    name: t("medicalTools.stethoscope.name"),
    description: t("medicalTools.stethoscope.description"),
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661391540555-c3c9786cb301?auto=format&fit=crop&q=60&w=600",
    alt: "Microscope",
    name: t("medicalTools.microscope.name"),
    description: t("medicalTools.microscope.description"),
  },
  {
    src: "https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?auto=format&fit=crop&q=60&w=600",
    alt: "BP Monitor",
    name: t("medicalTools.bpMonitor.name"),
    description: t("medicalTools.bpMonitor.description"),
  },
  {
    src: "https://images.unsplash.com/photo-1666214280352-db292c05fd80?auto=format&fit=crop&q=60&w=600",
    alt: "MRI Machine",
    name: t("medicalTools.mriScanner.name"),
    description: t("medicalTools.mriScanner.description"),
  },
  {
    src: "https://media.istockphoto.com/id/2144533767/photo/dentist-analyze-digital-x-ray-film.jpg?s=2048x2048",
    alt: "Dental X-Ray",
    name: t("medicalTools.digitalXray.name"),
    description: t("medicalTools.digitalXray.description"),
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1702599099948-5ed43d0a3048?auto=format&fit=crop&q=60&w=600",
    alt: "Operation Theatre",
    name: t("medicalTools.operationTheatre.name"),
    description: t("medicalTools.operationTheatre.description"),
  },
];

// Advanced Features
const advancedFeatures = [
  {
    icon: FileSearch,
    title: t("advancedFeatures.symptomChecker.title"),
    description: t("advancedFeatures.symptomChecker.description"),
  },
  {
    icon: Bot,
    title: t("advancedFeatures.whatsappChatbot.title"),
    description: t("advancedFeatures.whatsappChatbot.description"),
  },
  {
    icon: MapPin,
    title: t("advancedFeatures.nearbyClinics.title"),
    description: t("advancedFeatures.nearbyClinics.description"),
  },
  {
    icon: Newspaper,
    title: t("advancedFeatures.healthNews.title"),
    description: t("advancedFeatures.healthNews.description"),
  },
];

  // Custom hover effect for HERO FEATURE cards (Icon + H3 + P)
  const applyFeatureHover = (e) => {
    const card = e.currentTarget;
    card.style.boxShadow = '0 10px 20px -5px rgba(0, 150, 242, 0.4)';
    card.style.backgroundColor = '#0096f2'; // Change background

    // Change icon color to white
    const icon = card.querySelector('svg');
    if (icon) {
      icon.style.color = 'white';
    }
    // Change title (h3) color to white
    const title = card.querySelector('h3');
    if (title) {
      title.style.color = 'white';
    }
    // Change description (p) color to white
    const description = card.querySelector('p');
    if (description) {
      description.style.color = 'white';
    }
  };
  
  // Function to remove the hover effects from HERO FEATURE cards
  const removeFeatureHover = (e) => {
    const card = e.currentTarget;
    card.style.boxShadow = '';
    card.style.backgroundColor = 'white'; // Reset background

    // Reset icon color
    const icon = card.querySelector('svg');
    if (icon) {
      icon.style.color = ''; // Resets to CSS class color
    }
    // Reset title (h3) color
    const title = card.querySelector('h3');
    if (title) {
      title.style.color = ''; // Resets to CSS class color
    }
    // Reset description (p) color
    const description = card.querySelector('p');
    if (description) {
      description.style.color = ''; // Resets to CSS class color
    }
  };

  // Custom hover effect for MEDICAL TOOL cards (Image + P + P)
  const applyToolHover = (e) => {
    const card = e.currentTarget;
    card.style.boxShadow = '0 10px 20px -5px rgba(0, 150, 242, 0.4)';
    card.style.backgroundColor = '#0096f2'; // Change background
    
    // Change title (p) color to white
    const title = card.querySelector('.p-4 p:first-of-type');
    if (title) {
      title.style.color = 'white';
    }
    // Change description (p) color to white
    const description = card.querySelector('.p-4 p:last-of-type');
    if (description) {
      description.style.color = 'white';
    }
  };
  
  // Function to remove the hover effects from MEDICAL TOOL cards
  const removeToolHover = (e) => {
    const card = e.currentTarget;
    card.style.boxShadow = '';
    card.style.backgroundColor = 'white'; // Reset background
    
    // Reset title (p) color
    const title = card.querySelector('.p-4 p:first-of-type');
    if (title) {
      title.style.color = ''; // Resets to CSS class color
    }
    // Reset description (p) color
    const description = card.querySelector('.p-4 p:last-of-type');
    if (description) {
      description.style.color = ''; // Resets to CSS class color
    }
  };

  // Function to handle image loading errors
  const onImageError = (e) => {
    e.target.src = 'https://placehold.co/600x400/eeeeee/999999?text=Image+Not+Found';
  };

  return (
    // Main container for the whole page
    <div className="bg-gradient-to-b from-white to-gray-100 font-sans pt-20 pb-20 overflow-x-hidden">
      {/* Inject animation styles */}
      <style>{animationStyles}</style>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center p-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Icon with Pulse Animation */}
          <div className="flex justify-center mb-6">
            <HeartPulse 
              size={80} 
              className="text-[#0096f2] animate-pulse" 
              strokeWidth={1.5}
            />
          </div>

          {/* Heading */}
          <h1 
            className="text-5xl md:text-7xl font-bold text-[#0096f2] mb-4"
            style={{ textShadow: '0 2px 4px rgba(0, 150, 242, 0.1)' }}
          >
            Aarogya Saathi
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-gray-700 mb-16">
            Your Personal Health Companion, Always by Your Side.
          </p>

          {/* Feature Icons Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroFeatures.map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl fade-in"
                onMouseOver={applyFeatureHover} // Use Feature hover
                onMouseOut={removeFeatureHover} // Use Feature hover
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon size={48} className="text-[#0096f2] mb-4 transition-colors duration-300" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* === NEW: Advanced Features Timeline Section === */}
          <div className="mt-24 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-16 text-center">
              Explore Our Advanced Features
            </h2>
            
            {/* Timeline Container */}
            <div className="relative">
              
              {/* --- UPDATED: ANIMATED MOBILE LINES --- */}
              {/* 1. Grey track (h-full) */}
              <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200 md:hidden"></div>
              {/* 2. Blue animated fill (starts with style height 0, animates to h-full via class) */}
              <div 
                className="absolute left-5 top-0 w-0.5 bg-[#0096f2] md:hidden timeline-fill" 
                style={{ height: '0' }}
              ></div>
              
              {/* --- UPDATED: ANIMATED DESKTOP LINES --- */}
              {/* 1. Grey track (h-full) */}
              <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-gray-200 hidden md:block"></div>
              {/* 2. Blue animated fill (starts with style height 0, animates to h-full via class) */}
              <div 
                className="absolute left-1/2 top-0 w-0.5 -translate-x-1/2 bg-[#0096f2] hidden md:block timeline-fill" 
                style={{ height: '0' }}
              ></div>

              {/* Timeline Items */}
              {advancedFeatures.map((feature, index) => {
                const isOdd = index % 2 !== 0;

                return (
                  <div 
                    key={index}
                    // Item wrapper
                    // Mobile: Uses padding to make space for the line/icon
                    // Desktop: Becomes a flex container
                    className="relative mb-12 pl-16 md:pl-0 md:flex"
                  >
                    {/* Icon/Dot (Positioned absolutely) */}
                    <div className="absolute left-5 top-0 z-10 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0096f2] text-white ring-8 ring-gray-100 pulse-ring">
                        <feature.icon size={20} />
                      </div>
                    </div>

                    {/* Content Box */}
                    <div 
                      className={`
                        bg-white p-6 rounded-lg  
                          shadow-xl  shadow-[#0096f2]/30 border-[#0096f2]
                        md:w-1/2
                        fade-in
                        ${isOdd ? 'md:ml-[calc(50%+2rem)]' : 'md:mr-[calc(50%+2rem)] md:text-right'}
                      `}
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <h3 className={`text-xl font-bold text-[#0096f2] mb-2 ${isOdd ? 'md:text-left' : 'md:text-right'}`}>
                        {feature.title}
                      </h3>
                      <p className={`text-gray-700 ${isOdd ? 'md:text-left' : 'md:text-right'}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* === End of Advanced Features Timeline Section === */}

          {/* Medical Tools Images Section */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {medicalTools.map((tool, index) => (
      <motion.div
  key={index}
  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform transition-all duration-500 cursor-pointer group"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: index * 0.1, duration: 0.6 }}
  whileHover={{ scale: 1.05 }}
>
  <div className="overflow-hidden">
    <img
      src={tool.src}
      alt={tool.alt}
      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
    />
  </div>
  <div className="p-6 text-center">
    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
      {tool.name}
    </h3>
    <p className="text-sm text-gray-600 mt-2">{tool.description}</p>
  </div>
</motion.div>


      ))}
    </div>
          
          {/* REMOVED duplicate timeline section from here */}

        </div>
      </div>
    </div>
  );
}

export default Home;
