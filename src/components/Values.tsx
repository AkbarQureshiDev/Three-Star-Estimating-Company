import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    // Split the numeric part and the suffix
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match) {
      if (ref.current) ref.current.textContent = value;
      return;
    }

    const numericValue = parseFloat(match[1]);
    const suffix = match[2];
    if (isNaN(numericValue)) {
      if (ref.current) ref.current.textContent = value;
      return;
    }

    // Determine the number of decimal places to preserve decimal formatting (e.g. 9.8)
    const decimalPlaces = match[1].includes('.') ? match[1].split('.')[1].length : 0;

    // Animate smoothly from 0 to the target value
    const controls = animate(0, numericValue, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        if (ref.current) {
          ref.current.textContent = latest.toFixed(decimalPlaces) + suffix;
        }
      },
    });

    return () => controls.stop();
  }, [value, isInView]);

  // Initial fallback/SSR-safe layout structure
  const match = value.match(/^([\d.]+)(.*)$/);
  const suffix = match ? match[2] : '';
  const initialValue = '0' + suffix;

  return <span ref={ref}>{initialValue}</span>;
}

export default function Values() {
  const stats = [
    { value: '250+', label: 'Projects completed' },
    { value: '10+', label: 'Years of Experience' },
    { value: '98%', label: 'Client satisfaction rate' },
    { value: '24/7', label: 'Support available' },
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-[#161415] text-slate-900 overflow-hidden">
      {/* Subtle Dotted Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            {/* Tagline */}
            <div className="relative inline-block mb-6">
              {/* Dark grey brackets */}
              <span className="absolute -top-2 -left-2 w-3 h-3 border-t-2 border-l-2 border-white"></span>
              <span className="absolute -bottom-2 -right-2 w-3 h-3 border-b-2 border-r-2 border-white"></span>
              <span className="font-medium text-sm tracking-wider uppercase text-white px-2 py-1">
                Our value
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-white">
              Live 10x better,<br /> bolder, brighter
            </h2>

            <p className="text-gray-200 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
              We are a three star estimating company delivering precise, reliable cost estimates that keep your projects on budget and on schedule. From initial concept to final build, our expert team provides the clarity and confidence you need to make informed decisions every step of the way.
            </p>
          </motion.div>

          {/* Right Content - Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-12">
              {stats.map((stat, index) => (
                <div key={index} className="relative group">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-3 text-white transition-colors duration-300">
                      <Counter value={stat.value} />
                    </h3>
                    <p className="text-gray-200 font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>


          </motion.div>

        </div>
      </div>
    </section>
  );
}
