import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Luxury Skyline',
    location: 'Berlin, Germany',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&auto=format&fit=crop&q=80',
    tags: ['RESIDENTIAL', 'PENTHOUSE'],
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    location: 'Berlin, Germany',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&auto=format&fit=crop&q=80',
    tags: ['RESIDENTIAL', 'SINGLE HOME'],
  },
  {
    id: 3,
    title: 'Vintage Glamour',
    location: 'Berlin, Germany',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&auto=format&fit=crop&q=80',
    tags: ['RESIDENTIAL', 'APARTMENT'],
  },
  {
    id: 4,
    title: 'Living Innovation',
    location: 'Berlin, Germany',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=600&auto=format&fit=crop&q=80',
    tags: ['COMMERCIAL', 'STUDIO'],
  },
  {
    id: 5,
    title: 'Modern Oasis',
    location: 'Munich, Germany',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&auto=format&fit=crop&q=80',
    tags: ['RESIDENTIAL', 'VILLA'],
  },
];

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Triple the data for seamless infinite loop
  const loopedData = [...projectsData, ...projectsData, ...projectsData];

  // Get the scroll width of one full set of original cards
  const getOneSetWidth = () => {
    if (!carouselRef.current) return 0;
    return carouselRef.current.scrollWidth / 3;
  };

  // Silent jump to keep scroll in the middle set (no blank space ever)
  const handleScroll = () => {
    const container = carouselRef.current;
    if (!container) return;
    const oneSet = getOneSetWidth();
    if (oneSet === 0) return;

    // If scrolled past 2 sets, jump back by one set
    if (container.scrollLeft >= oneSet * 2) {
      container.scrollLeft -= oneSet;
    }
    // If scrolled before first set, jump forward by one set
    if (container.scrollLeft <= 0) {
      container.scrollLeft += oneSet;
    }
  };

  // Start in the middle (second set) on mount
  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;

    const initScroll = () => {
      const oneSet = getOneSetWidth();
      if (oneSet > 0) {
        container.scrollLeft = oneSet;
      }
    };

    // Delay to let images and layout settle
    initScroll();
    const timer = setTimeout(initScroll, 500);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const container = carouselRef.current;
      if (!container) return;

      const cardWidth = window.innerWidth < 640 ? 280 : window.innerWidth < 768 ? 340 : 380;
      container.scrollTo({ left: container.scrollLeft + cardWidth, behavior: 'smooth' });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="relative py-0 my-0 text-white overflow-hidden font-poppins" style={{ backgroundColor: '#151314' }}>
      
      {/* 📐 Blueprint Architectural SVG Background Sketch */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03] pointer-events-none z-0 select-none">
        <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M100 500 H 700 V 300 L 400 100 L 100 300 Z" stroke="#64748b" strokeWidth="1" strokeDasharray="4 4" />
          <path d="M100 300 H 700" stroke="#64748b" strokeWidth="1" />
          <path d="M250 500 V 350 H 350 V 500" stroke="#64748b" strokeWidth="1" />
          <path d="M450 450 H 600 V 350 H 450 Z" stroke="#64748b" strokeWidth="1" />
          <line x1="400" y1="50" x2="400" y2="550" stroke="#64748b" strokeWidth="0.5" strokeDasharray="10 5" />
          <line x1="50" y1="300" x2="750" y2="300" stroke="#64748b" strokeWidth="0.5" strokeDasharray="10 5" />
          <circle cx="400" cy="100" r="10" stroke="#64748b" strokeWidth="0.5" />
          <circle cx="400" cy="300" r="20" stroke="#64748b" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="100" y2="600" stroke="#000" strokeWidth="0.5" opacity="0.1" />
          <line x1="200" y1="0" x2="200" y2="600" stroke="#000" strokeWidth="0.5" opacity="0.1" />
          <line x1="300" y1="0" x2="300" y2="600" stroke="#000" strokeWidth="0.5" opacity="0.1" />
          <line x1="500" y1="0" x2="500" y2="600" stroke="#000" strokeWidth="0.5" opacity="0.1" />
          <line x1="600" y1="0" x2="600" y2="600" stroke="#000" strokeWidth="0.5" opacity="0.1" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Centered Header Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-16 relative pt-10 sm:pt-[60px]">
          {/* Badge */}
          <div className="mb-6">
            <span className="text-white font-medium text-sm tracking-wide font-poppins">
              - Our projects
            </span>
          </div>

          {/* Centered Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-extrabold leading-[1.15] text-white mb-6 text-center"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Creative <span className="text-white font-serif">Projects That</span> <br />
            <span className="text-white font-serif">Define</span> Our Style
          </motion.h2>

          {/* Combined Description */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-200 text-sm md:text-base leading-relaxed max-w-5xl font-poppins"
          >

          </motion.p>
        </div>

        {/* Infinite Looping Carousel */}
        <div 
          ref={carouselRef}
          onScroll={handleScroll}
          className="overflow-x-auto scrollbar-none cursor-grab active:cursor-grabbing select-none pb-16 pt-6"
          style={{ scrollbarWidth: 'none' }}
        >
          <div className="flex gap-5 sm:gap-8 pb-10 w-max pl-1">
            {loopedData.map((project, index) => {
              const isStaggeredDown = index % 2 === 0;

              return (
                <motion.div
                  key={`${project.id}-${index}`}
                  className={`w-[260px] sm:w-[320px] md:w-[360px] flex-shrink-0 group pointer-events-auto transition-transform duration-500 ${
                    isStaggeredDown ? 'translate-y-12' : 'translate-y-0'
                  }`}
                  whileHover={{ y: isStaggeredDown ? 42 : -6 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Wrap */}
                  <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-slate-100 shadow-md border border-slate-200/40">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 select-none pointer-events-none"
                    />

                    {/* Glassmorphism Tags Top Left */}
                    <div className="absolute top-6 left-6 flex flex-wrap gap-2 pointer-events-none">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider text-white bg-black/15 backdrop-blur-md border border-white/20 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Circular View Button Overlay */}
                    <div className="absolute inset-0 bg-black/10 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-20 h-20 rounded-full bg-slate-900/85 backdrop-blur-sm text-white flex items-center justify-center text-xs font-bold uppercase tracking-wider border border-white/15 shadow-lg scale-90 group-hover:scale-100 transition-transform duration-300">
                        View
                      </div>
                    </div>
                  </div>

                  {/* Project Metadata footer */}
                  <div className="mt-6 px-1">
                    <h3 className="text-xl font-bold text-white font-poppins group-hover:text-gray-100 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-2 text-gray-200 text-xs font-medium font-poppins">
                      <span>{project.location}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
