import { motion } from "framer-motion";
import {
  HiBuildingOffice,
  HiBriefcase,
  HiCubeTransparent,
  HiChartBar,
  HiGlobeAlt,
  HiBolt
} from "react-icons/hi2";

const partners = [
  { name: "Enterprise", icon: <HiBuildingOffice className="h-6 w-6" /> },
  { name: "Company", icon: <HiBriefcase className="h-6 w-6" /> },
  { name: "Institute", icon: <HiGlobeAlt className="h-6 w-6" /> },
  { name: "Venture", icon: <HiCubeTransparent className="h-6 w-6" /> },
  { name: "Agency", icon: <HiChartBar className="h-6 w-6" /> },
  { name: "Startup", icon: <HiBolt className="h-6 w-6" /> },
];

const Trust = () => {
  return (
    <section className="w-full py-6 sm:py-10 border-y border-gray-500/30" style={{ backgroundColor: '#161415' }}>
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="shrink-0 text-lg sm:text-2xl font-bold text-white text-center md:text-left"
        >
          Trusted by
        </motion.div>
        
        <div className="flex flex-1 overflow-hidden ml-0 md:ml-8" style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}>
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity }}
            className="flex w-max items-center gap-10 sm:gap-16 md:gap-24 px-4"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex shrink-0 cursor-pointer items-center gap-3 px-6 text-gray-200 transition-colors hover:text-white"
              >
                {partner.icon}
                <span className="text-[17px] font-semibold tracking-wide">{partner.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
