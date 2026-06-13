import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiPlus, HiMinus } from "react-icons/hi2";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How do general contractors in the USA get accurate cost estimates?",
    answer:
      "General contractors across the USA rely on professional cost estimating agencies to ensure their bids are precise, competitive, and profitable. Three Star Estimating provides comprehensive quantity takeoffs, labor pricing analysis, and localized material costs. We leverage advanced software and over three decades of field expertise to deliver results that help you secure projects and protect profit margins.",
  },
  {
    question: "What makes Three Star Estimating one of the best contractor partners in the country?",
    answer:
      "Since 1990, we have served as a trusted partner for developers, architects, and the best general contractors in the USA. We combine certified cost estimation, quick turnaround times, and transparent pricing. Our deep understanding of local construction requirements and code standards ensures your estimators receive reliable data tailored to your specific region.",
  },
  {
    question: "Do you offer construction estimating services for both residential and commercial projects?",
    answer:
      "Yes, our certified estimators cover all construction sectors. We offer custom residential takeoffs (custom homes, renovations, remodeling) and large-scale commercial services (offices, retail, industrial buildings, and healthcare facilities). Our detailed material takeoff and quantity survey services cover everything from structural framing and concrete to MEP systems and finishes.",
  },
  {
    question: "Why is hiring a professional construction cost estimator crucial for a project's success?",
    answer:
      "Accurate construction cost estimation prevents budget overruns, identifies potential material shortages early, and ensures bidding competitiveness. Working with a professional estimator ensures that all material, labor, equipment, and administrative costs are detailed upfront, reducing financial risk and ensuring seamless project execution.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-16 sm:py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ backgroundColor: "#161415" }}
    >
      {/* Background decorations */}
      <div
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Soft radial glow */}
      <div
        className="absolute top-1/2 -left-64 w-[500px] h-[500px] rounded-full opacity-[0.03] blur-3xl pointer-events-none"
        style={{ backgroundColor: "#FFB800" }}
      />

      <div className="max-w-[1000px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block mb-4"
          >
            <span className="text-white font-medium text-sm tracking-wide font-poppins">
              - Frequently Asked Questions
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="font-extrabold leading-[1.15] text-white mb-5 text-center font-poppins"
            style={{
              fontFamily: "'Georgia', 'Times New Roman', serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.2rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Answers to Your Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.24, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-base leading-relaxed text-gray-400 font-poppins"
          >
            Find quick answers about our estimating and contracting services,
            turnaround times, and how we help general contractors win bids.
          </motion.p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
                style={{
                  backgroundColor: isOpen ? "rgba(255, 255, 255, 0.03)" : "rgba(255, 255, 255, 0.01)",
                  boxShadow: isOpen ? "0 10px 30px -10px rgba(0, 0, 0, 0.3)" : "none",
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-base sm:text-lg font-bold font-poppins transition-colors duration-300"
                    style={{
                      color: isOpen ? "#FFB800" : "#ffffff",
                    }}
                  >
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 ml-4 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 group-hover:text-white group-hover:border-white/40 transition-colors">
                    {isOpen ? <HiMinus size={16} /> : <HiPlus size={16} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 border-t border-white/5">
                        <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-poppins pt-4">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
