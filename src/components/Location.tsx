import { useState } from 'react';
import { MapPin, Navigation, ExternalLink, MousePointer2 } from 'lucide-react';

const Location = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Updated to the Miami, FL location
  const address = "2100 Coral Wy, Miami, FL 33145, USA";
  const encodedAddress = encodeURIComponent(address);
  
  // Direct link to the map
  const directMapLink = `https://maps.google.com/?q=${encodedAddress}`;

  return (
  <div className='w-full' style={{ backgroundColor: '#151314' }}>
    <div className="w-full max-w-7xl mx-auto p-2 sm:p-4 font-poppins">
      <div 
        className="group relative overflow-hidden rounded-3xl border-2 border-gray-100 shadow-2xl transition-all duration-500 bg-gray-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top Left: Status Badge */}
        <div className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/50 shadow-sm">
          <div className="w-2 h-2 bg-green-500 animate-pulse rounded-full" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-700">Live Location</span>
        </div>

        {/* Bottom Left: Location Details */}
        <div className={`absolute bottom-3 left-3 sm:bottom-6 sm:left-6 z-20 transition-all duration-500 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="bg-white/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl shadow-2xl border border-white/40 max-w-[200px] sm:max-w-[240px]">
            <div className="bg-red-50 w-10 h-10 rounded-lg flex items-center justify-center mb-3">
              <MapPin className="text-[#233F90]" size={20} />
            </div>
            <h3 className="font-bold text-gray-900 text-lg">Our Company</h3>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">{address}</p>
            <a 
              href={directMapLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 text-[11px] font-bold flex items-center gap-1 hover:gap-2 transition-all underline decoration-2 underline-offset-4"
            >
              View On Maps <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Bottom Right: Quick Actions */}
        <div className={`absolute bottom-3 right-3 sm:bottom-6 sm:right-6 z-20 flex flex-col gap-3 transition-all duration-500 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <a 
            href={directMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded-xl transition-all shadow-xl active:scale-95 group/btn"
          >
            <Navigation size={18} className="group-hover/btn:animate-bounce" />
            <span className="font-semibold text-sm">Get Directions</span>
          </a>
        </div>

        {/* Subtle Instruction Overlay (shown when NOT hovered) */}
        {!isHovered && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/5 transition-opacity">
             <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm font-medium border border-white/30">
               <MousePointer2 size={16} /> Hover to Explore
             </div>
          </div>
        )}

        <iframe
          src={`https://maps.google.com/maps?q=${encodedAddress}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[250px] sm:h-[300px] transition-all duration-1000 group-hover:scale-110 filter grayscale contrast-[1.1] brightness-[0.95]"
          title="Google Map Location"
        ></iframe>
      </div>
    </div>
  </div>
  );
};

export default Location;