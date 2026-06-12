import { motion } from "framer-motion";

const items = [
  {
    label: "Our Mission",
    badge: "- Our Mission",
    heading: "Building With Purpose\nAnd Precision",
    description:
      "Our mission is to deliver exceptional construction and estimation services that empower clients to build with confidence. We combine decades of expertise with modern tools to provide accurate, transparent, and timely solutions — ensuring every project starts on a solid foundation.",
  },
  {
    label: "Our Vision",
    badge: "- Our Vision",
    heading: "Shaping The Future\nOf Construction",
    description:
      "Our vision is to be the most trusted name in construction estimation — recognized for our integrity, innovation, and commitment to excellence. We strive to set new industry standards by continuously evolving our processes and delivering results that exceed expectations.",
  },
];

const MissionAndVision = () => {
  return (
    <section
      id="mission-vision"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#161415" }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-[1240px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-20">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col"
            >
              {/* Badge */}
              <span className="text-white font-medium text-sm tracking-wide font-poppins mb-6">
                {item.badge}
              </span>

              {/* Heading */}
              <h2
                className="font-extrabold leading-[1.15] text-white mb-6"
                style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  letterSpacing: "-0.02em",
                  whiteSpace: "pre-line",
                }}
              >
                {item.heading}
              </h2>

              {/* Divider */}
              <div
                className="w-12 h-[3px] rounded-full mb-6"
                style={{ backgroundColor: "#FFB800" }}
              />

              {/* Description */}
              <p className="text-base leading-relaxed text-gray-200 font-poppins">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionAndVision;
