import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { HiArrowRight, HiCheckCircle } from "react-icons/hi2";
import serviceResidential from "../assets/service_residential.png";
import projectResidential from "../assets/project_residential.png";
import projectCommercial from "../assets/project_commercial.png";

interface ServiceItem {
  title: string;
  description: string;
  image: string;
  features: string[];
  accent: string;
}

const services: ServiceItem[] = [
  {
    title: "Residential Construction",
    description:
      "We build modern, durable, and sustainable homes with precision, ensuring comfort, elegance, and long-term value.",
    image: serviceResidential,
    features: [
      "Custom home design",
      "Eco-friendly materials",
      "On-time delivery",
      "Skilled workforce",
      "Transparent pricing",
    ],
    accent: "#FFB800",
  },
  {
    title: "Renovation & Remodeling",
    description:
      "We transform outdated spaces into modern, functional, and stylish environments with expert renovation solutions.",
    image: projectResidential,
    features: [
      "Creative space redesign",
      "Modern material upgrades",
      "Structural improvements",
      "Efficient project management",
      "Cost-conscious planning",
    ],
    accent: "#2563EB",
  },
  {
    title: "Commercial Construction",
    description:
      "We deliver innovative commercial construction solutions designed for efficiency, functionality, sustainability, and long-term growth.",
    image: projectCommercial,
    features: [
      "Modern office design",
      "Retail space planning",
      "Sustainable solutions",
      "Cost-effective building",
      "Smart infrastructure",
    ],
    accent: "#10B981",
  },
];

/* ─── Feature check item with staggered animation ─── */
const FeatureItem = ({
  feature,
  index,
  accentColor,
  isCardHovered,
}: {
  feature: string;
  index: number;
  accentColor: string;
  isCardHovered: boolean;
}) => (
  <motion.li
    className="flex items-center gap-3 text-[15px] leading-relaxed"
    style={{ color: "rgba(26,26,46,0.72)" }}
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.4 + index * 0.08, ease: "easeOut" }}
  >
    <motion.div
      animate={{
        scale: isCardHovered ? [1, 1.25, 1] : 1,
      }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
    >
      <HiCheckCircle
        className="w-5 h-5 flex-shrink-0 transition-colors duration-500"
        style={{ color: accentColor }}
      />
    </motion.div>
    <span className="transition-colors duration-300 font-poppins">{feature}</span>
  </motion.li>
);

/* ─── Single Service Card ─── */
const ServiceCard = ({
  service,
  index,
}: {
  service: ServiceItem;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-80px" });
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
        delay: 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative rounded-2xl overflow-hidden transition-all duration-700 ease-out ${
          isHovered
            ? "shadow-[0_25px_80px_-15px_rgba(0,0,0,0.12)]"
            : "shadow-[0_2px_20px_-8px_rgba(0,0,0,0.06)]"
        }`}
        style={{ backgroundColor: "#ffffff" }}
      >
        {/* Accent top bar that grows on hover */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[3px] z-20 origin-left"
          style={{ backgroundColor: "#FFB800" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 ${
            isReversed ? "lg:[direction:rtl]" : ""
          }`}
        >
          {/* ── Image Side ── */}
          <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
            <motion.img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.06 : 1,
              }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
            {/* Dark gradient overlay */}
            <div
              className="absolute inset-0 z-10 transition-opacity duration-700"
              style={{
                background: isHovered
                  ? "linear-gradient(135deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%)"
                  : "linear-gradient(135deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.1) 100%)",
              }}
            />
            {/* Floating badge on image */}
            <motion.div
              className="absolute top-5 left-5 z-20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase text-white backdrop-blur-md font-poppins"
              style={{
                backgroundColor: `#FFB800cc`,
                border: `1px solid #FFB80066`,
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {index === 0 ? "Popular" : index === 1 ? "Trending" : "Premium"}
            </motion.div>
          </div>

          {/* ── Content Side ── */}
          <div
            className={`p-5 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center ${
              isReversed ? "[direction:ltr]" : ""
            }`}
          >
            {/* Title */}
            <motion.h3
              className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 tracking-tight font-poppins"
              style={{ color: "#1a1a2e" }}
            >
              {service.title}
            </motion.h3>

            {/* Description */}
            <p
              className="text-base leading-relaxed mb-8 max-w-md font-poppins"
              style={{ color: "rgba(26,26,46,0.6)" }}
            >
              {service.description}
            </p>

            {/* Features List */}
            <ul className="space-y-3.5 mb-8">
              {service.features.map((feature, featureIdx) => (
                <FeatureItem
                  key={feature}
                  feature={feature}
                  index={featureIdx}
                  accentColor={service.accent}
                  isCardHovered={isHovered}
                />
              ))}
            </ul>


          </div>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── Main Services Section ─── */
const Services = () => {
  return (
    <section
      id="services"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#161415" }}
    >
      {/* ── Background decorations ── */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1a1a2e 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft radial glow */}
      <div
        className="absolute top-1/4 -right-64 w-[600px] h-[600px] rounded-full opacity-[0.04] blur-3xl"
        style={{ backgroundColor: "#2563EB" }}
      />
      <div
        className="absolute bottom-1/4 -left-64 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-3xl"
        style={{ backgroundColor: "#FFB800" }}
      />

      <div className="max-w-[1240px] mx-auto relative z-10">
        {/* ── Header Section ── */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* "Services" badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block mb-7"
          >
            <span className="text-white font-medium text-sm tracking-wide font-poppins">
              - Services
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="font-extrabold leading-[1.15] text-white mb-5 text-center"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Designs made for you
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-base leading-relaxed mb-8 text-gray-200"
          >
            Tailored design solutions carefully crafted to perfectly match your
            style, needs, and unique vision. From concept to completion, we
            combine thoughtful planning with expert craftsmanship to bring your
            ideas to life — on time, on budget, and beyond expectations.
          </motion.p>


        </div>

        {/* ── Service Cards ── */}
        <div className="flex flex-col gap-10 lg:gap-14">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mt-12 sm:mt-16 md:mt-20"
        >
          <p className="text-base mb-6 text-gray-200">
            Need something different? Let's talk about your project.
          </p>
          <motion.a
            href="https://wa.me/13054041822?text=Hello%21%20I%27m%20interested%20in%20your%20estimating%20services%20and%20would%20like%20to%20get%20a%20quote."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold tracking-wide cursor-pointer transition-all duration-500"
            style={{
              backgroundColor: "#ffffff",
              color: "#000000",
              boxShadow: "0 8px 30px -8px rgba(0,0,0,0.2)",
            }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 12px 40px -8px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Get a Free Estimate
            <HiArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
