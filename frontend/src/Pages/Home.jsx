import React from 'react';
// We'll use lucide-react for high-quality, lightweight icons
import { 
  HeartPulse, Stethoscope, FilePlus2, ShieldCheck,
  FileSearch, Bot, MapPin // Added new icons for advanced features
} from 'lucide-react';

/**
 * A modern, animated Home component for Aarogya Saathi.
 * This component features a prominent heading, tagline, and animated feature
 * cards that use the requested #0096f2 theme color.
 */
const Home = () => {
  // An array to hold feature card information for the hero
  const heroFeatures = [
    {
      icon: Stethoscope,
      title: 'Expert Consultations',
      description: 'Connect with top doctors instantly.',
    },
    {
      icon: FilePlus2,
      title: 'Digital Records',
      description: 'All your health reports, secured in one place.',
    },
    {
      icon: ShieldCheck,
      title: 'Data Security',
      description: 'Your privacy is our top priority.',
    },
  ];

  // Array for the specific medical tool images with descriptions
  const medicalTools = [
    {
      src: 'https://images.unsplash.com/photo-1655913197692-012897652d13?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RldGhoc2NvcGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600',
      alt: 'Stethoscope',
      name: 'Stethoscope',
      description: 'Essential for listening to heart and lung sounds.'
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1661391540555-c3c9786cb301?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWljcm9zY29wZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
      alt: 'Microscope',
      name: 'Microscope',
      description: 'Used for detailed examination of samples at a cellular level.'
    },
    {
      src: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymxvb2QlMjBwcmVzc3VyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
      alt: 'Blood Pressure Monitor',
      name: 'BP Monitor',
      description: 'Crucial for measuring and tracking blood pressure levels.'
    },
    {
      src: 'https://images.unsplash.com/photo-1666214280352-db292c05fd80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bXJpfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600',
      alt: 'MRI Machine',
      name: 'MRI Scanner',
      description: 'Provides detailed images of organs and soft tissues.'
    },
    {
      src: 'https://media.istockphoto.com/id/2144533767/photo/dentist-analyze-digital-x-ray-film-from-scanner-machine.jpg?s=2048x2048&w=is&k=20&c=JuZGg6dODUkTRnM1Ab0TFbDZiDiw6ZsEctD6SiVQfyc=',
      alt: 'Dental X-Ray',
      name: 'Digital X-Ray',
      description: 'Advanced imaging for accurate diagnosis of bone and teeth.'
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1702599099948-5ed43d0a3048?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3BlcmF0aW9uJTIwdGhlYXRyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600',
      alt: 'Operation Theatre',
      name: 'Operation Theatre',
      description: 'A sterile environment for complex surgical procedures.'
    },
  ];

  // NEW: Array for the advanced features
  const advancedFeatures = [
    {
      icon: FileSearch,
      title: 'Symptom Checker',
      description: 'Enter your symptoms to get an AI-powered analysis of potential conditions.'
    },
    {
      icon: Bot,
      title: 'WhatsApp Chatbot',
      description: 'Get instant health tips, book appointments, and ask queries 24/7 via WhatsApp.'
    },
    {
      icon: MapPin,
      title: 'Nearby Clinics',
      description: 'Find and navigate to the nearest partner clinics, labs, and pharmacies.'
    }
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
    // Added pt-20 (padding-top) for spacing from the navbar and pb-20 for bottom spacing
    <div className="bg-gradient-to-b from-white to-gray-100 font-sans pt-20 pb-20">
      
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

          {/* Heading - Corrected rendering using simple text color */}
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
                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
                onMouseOver={applyFeatureHover} // Use Feature hover
                onMouseOut={removeFeatureHover} // Use Feature hover
              >
                <feature.icon size={48} className="text-[#0096f2] mb-4 transition-colors duration-300" strokeWidth={1.5} />
                <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 transition-colors duration-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Medical Tools Images Section */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {medicalTools.map((tool, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl overflow-hidden group"
                onMouseOver={applyToolHover} // Use Tool hover
                onMouseOut={removeToolHover} // Use Tool hover
              >
                <img 
                  src={tool.src} 
                  alt={tool.alt}
                  className="w-full h-48 object-cover" 
                  onError={onImageError}
                />
                <div className="p-4 text-center">
                  <p className="font-semibold text-lg text-gray-800 transition-colors duration-300">{tool.name}</p>
                  <p className="text-sm text-gray-600 mt-1 transition-colors duration-300">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* NEW: Advanced Features Section */}
          <div className="mt-20 w-full">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
              Explore Our Advanced Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {advancedFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-xl"
                  onMouseOver={applyFeatureHover} // REUSE Feature hover
                  onMouseOut={removeFeatureHover} // REUSE Feature hover
                >
                  <feature.icon size={48} className="text-[#0096f2] mb-4 transition-colors duration-300" strokeWidth={1.5} />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-gray-600 transition-colors duration-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;