import { motion, type Variants } from "framer-motion";
import { HiHome } from "react-icons/hi2";

const About = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -45, opacity: 0 },
    visible: {
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <section id="about" className="flex min-h-[70vh] flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4 font-sans sm:px-6 lg:px-8" style={{ backgroundColor: '#161415' }}>
      {/* Top small text */}
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "auto" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center gap-4 overflow-hidden whitespace-nowrap text-sm font-semibold tracking-wide text-white"
      >
        <span className="h-[1px] w-8 bg-white/50"></span>
        Since 1990
        <span className="h-[1px] w-8 bg-white/50"></span>
      </motion.div>

      {/* Main interactive heading */}
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="mt-12 w-full max-w-[1240px] text-center text-3xl sm:text-4xl font-medium leading-[1.2] tracking-tight text-white md:text-6xl lg:text-[4.5rem]"
      >
        <div className="mx-auto flex flex-col items-center justify-center gap-y-1 sm:gap-y-2 md:gap-y-4">
          {/* Line 1 */}
          <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 md:gap-x-5">
            <motion.span variants={wordVariants} className="hover:text-white/70 transition-colors cursor-default">We</motion.span>
            <motion.span variants={wordVariants} className="hover:text-white/70 transition-colors cursor-default">offer</motion.span>
            <motion.span variants={wordVariants} className="hover:text-white/70 transition-colors cursor-default">construction</motion.span>
          </div>

          {/* Line 2 */}
          <div className="flex flex-wrap items-center justify-center gap-x-2 sm:gap-x-3 md:gap-x-5">
            <motion.span variants={wordVariants} className="hover:text-white/70 transition-colors cursor-default">services,</motion.span>
            <motion.span variants={wordVariants} className="hover:text-white/70 transition-colors cursor-default">from</motion.span>
            <motion.span variants={wordVariants} className="hover:text-white/70 transition-colors cursor-default">new</motion.span>
            
            <motion.div
              variants={iconVariants}
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#FFB800] shadow-xl md:h-16 md:w-16 mx-1 md:mx-2"
              whileHover={{ scale: 1.15, rotate: 15 }}
              whileTap={{ scale: 0.9, rotate: -10 }}
              title="Interactive solutions"
            >
              <HiHome className="h-5 w-5 text-black md:h-8 md:w-8" />
            </motion.div>

            <motion.span variants={wordVariants} className="hover:text-white/70 transition-colors cursor-default">solutions</motion.span>
          </div>

          {/* Line 3 */}
          <div className="flex flex-wrap justify-center gap-x-2 sm:gap-x-3 md:gap-x-5">
            <motion.span variants={wordVariants} className="hover:text-white/70 transition-colors cursor-default">to</motion.span>
            <motion.span variants={wordVariants} className="hover:text-white/70 transition-colors cursor-default">renovations.</motion.span>
          </div>
        </div>
      </motion.h2>

      {/* Description paragraphs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        className="mt-8 sm:mt-12 max-w-5xl text-center text-base leading-relaxed text-gray-200 md:text-lg space-y-4 px-4"
      >
        <p>
          Founded in 1990, Three Star Estimating has spent over three decades delivering
          precise, dependable cost estimates for the best general contractors and builders across residential,
          commercial, industrial, and healthcare sectors. Our team of certified estimators
          combines deep industry knowledge with the latest digital tools to ensure every
          bid is competitive and every budget is accurate.
        </p>
        <p>
          We understand that a reliable estimate is the foundation of a successful project.
          That's why we work closely with the best contractors, developers, and project owners in the USA to
          provide detailed takeoffs, material pricing, and labor cost analysis — giving
          you the clarity and confidence to move forward.
        </p>
      </motion.div>


    </section>
  );
};

export default About;
