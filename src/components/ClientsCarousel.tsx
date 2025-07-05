import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ClientsCarousel: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  const clients = [
    {
      id: 1,
      name: "Boussole",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/LogoBoussole.png"
    },
    {
      id: 2,
      name: "OK",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/LogoOK.jpg"
    },
    {
      id: 3,
      name: "Logo 3",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/Logo3-1024x724.jpg"
    },
    {
      id: 4,
      name: "Transparent Rouge",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/Transparent-rouge-1024x724.png"
    },
    {
      id: 5,
      name: "Logo 1",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/Logo1-PNG.png"
    },
    {
      id: 6,
      name: "Vamos Rouge",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/Vamos-Rouge-Ok-copie-1024x1024.png"
    },
    {
      id: 7,
      name: "Logo",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/Logo.jpg"
    },
    {
      id: 8,
      name: "Profil A",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/ProfilA-1024x917.jpg"
    },
    {
      id: 9,
      name: "Logo A",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/A-1024x1024.png"
    },
    {
      id: 10,
      name: "Logo 2b",
      logo: "https://elitepartners-rdc.com/wp-content/uploads/2025/06/Logo2b.png"
    }
  ];

  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">
            Ils nous ont choisi
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Container */}
          <div
            className={`flex animate-marquee ${isPaused ? 'animate-marquee-pause' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{ width: `${duplicatedClients.length * 200}px` }}
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.id}-${index}`}
                className="flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-full h-full flex items-center justify-center p-4 rounded-lg transition-all duration-300 group-hover:bg-gray-50 group-hover:shadow-md">
                  <img
                    src={client.logo}
                    alt={`Logo ${client.name}`}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDIwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMTAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik04NS4zMzMzIDQwVjYwSDE0LjY2NjdWNDBIODUuMzMzM1pNMTAwIDQwVjYwSDE5NFY0MEgxMDBaIiBmaWxsPSIjRDFENUNCIi8+Cjwvc3ZnPgo=';
                    }}
                  />
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 rounded-lg transition-all duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            Plus de 50+ entreprises nous font confiance pour leur développement en République Démocratique du Congo
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsCarousel;