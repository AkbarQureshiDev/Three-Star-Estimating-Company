import { motion, type Variants } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin by understanding your goals, challenges, and vision to create a clear roadmap forward.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our team crafts creative, functional, and tailored solutions aligned with your brand and objectives.",
  },
  {
    number: "03",
    title: "Delivery",
    description:
      "We execute with precision, ensuring timely results, ongoing support, and complete client satisfaction.",
  },
];

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 80,
      },
    },
  };

  return (
    <section
      id="how-it-works"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#151314" }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1a1a2e 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Decorative semicircles */}
      <div
        className="absolute bottom-0 left-12 w-16 h-8 rounded-t-full opacity-[0.06]"
        style={{ backgroundColor: "#1a1a2e" }}
      />
      <div
        className="absolute bottom-0 right-20 w-12 h-6 rounded-t-full opacity-[0.04]"
        style={{ backgroundColor: "#1a1a2e" }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          {/* "How it works" badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block mb-8"
          >
            <span className="text-white font-medium text-sm tracking-wide font-poppins">
              - How it works
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="font-extrabold leading-[1.15] text-white mb-8 text-center"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: 'clamp(2.4rem, 5vw, 3.6rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Our step by step
            <br />
            process to build success
          </motion.h2>

        </div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="relative grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-6 lg:gap-10"
        >
          {/* Connecting dashed line - visible on md+ */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeInOut" }}
            className="hidden md:block absolute top-[42px] left-[15%] right-[15%] h-[1px] z-0 origin-left"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #CBD5E1 0, #CBD5E1 8px, transparent 8px, transparent 16px)",
            }}
          />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={stepVariants}
              className="relative z-10 group cursor-pointer"
              onMouseEnter={() => setActiveStep(index)}
              onMouseLeave={() => setActiveStep(null)}
            >
              <div
                className="rounded-2xl p-5 sm:p-8 md:p-7 lg:p-10 transition-all duration-500 ease-out flex flex-col items-center text-center"
                style={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  transform:
                    activeStep === index
                      ? "translateY(-4px)"
                      : "translateY(0px)",
                }}
              >
                {/* Step number circle */}
                <motion.div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-8 relative transition-all duration-500"
                  style={{
                    backgroundColor: "#FFB800",
                    boxShadow: "0 4px 20px rgba(255, 184, 0, 0.35)",
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span
                    className="text-sm font-bold font-poppins"
                    style={{ color: "#1a1a2e" }}
                  >
                    {step.number}
                  </span>

                  {/* Always-on pulse ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ border: "2px solid #FFB800" }}
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 1.6, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                </motion.div>

                {/* Step title */}
                <h3
                  className="text-xl lg:text-2xl font-bold mb-4 text-white font-poppins"
                >
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="text-base leading-relaxed text-gray-200 font-poppins">
                  {step.description}
                </p>


              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default HowItWorks;
