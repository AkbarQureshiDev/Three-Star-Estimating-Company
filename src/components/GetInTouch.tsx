import { motion, type Variants } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const GetInTouch = () => {
  // Animation variants
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const fadeUpVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.15,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  const socialIcons = [
    { icon: <FaFacebookF />, label: "Facebook", href: "#" },
    { icon: <FaXTwitter />, label: "X (Twitter)", href: "#" },
    { icon: <FaInstagram />, label: "Instagram", href: "#" },
    { icon: <FaLinkedinIn />, label: "LinkedIn", href: "#" },
  ];

  return (
    <section
      id="get-in-touch"
      className="bg-[#151314] text-white relative overflow-hidden"
    >
      {/* Subtle radial glow for depth */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.02) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-28 lg:py-32 relative z-10">
        {/* Large Heading */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[5.5rem] font-medium leading-[1.08] tracking-tight"
            style={{ fontFamily: "'Inter', sans-serif" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span className="block" custom={0} variants={headingVariants}>
              Let's work together
            </motion.span>
            <motion.span className="block" custom={1} variants={headingVariants}>
              Get a quote today.
            </motion.span>
          </motion.h2>
        </div>

        {/* Animated Divider */}
        <motion.div
          className="h-[1px] bg-gradient-to-r from-gray-600 via-gray-500 to-transparent mb-8 sm:mb-12 md:mb-16 origin-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={lineVariants}
        />

        {/* Bottom Row: Buttons + Description + Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 lg:gap-16">
          {/* Left: CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.a
              href="https://wa.me/13054041822?text=Hello%21%20I%27m%20interested%20in%20your%20estimating%20services%20and%20would%20like%20to%20get%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              custom={0}
              variants={fadeUpVariants}
              className="group relative inline-flex items-center gap-3 bg-white text-black px-9 py-4 sm:px-10 sm:py-4.5 rounded-full font-poppins font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,255,255,0.25)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Shimmer effect on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              <FaWhatsapp className="relative z-10 text-xl" />
              <span className="relative z-10">WhatsApp</span>
            </motion.a>

            <motion.a
              href="mailto:Shawn@threestarestimating.com"
              custom={1}
              variants={fadeUpVariants}
              className="group relative inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-9 py-4 sm:px-10 sm:py-4.5 rounded-full font-poppins font-bold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:bg-white hover:text-black hover:shadow-[0_0_35px_rgba(255,255,255,0.25)]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope className="relative z-10 text-lg transition-transform duration-300" />
              <span className="relative z-10">Email Us</span>
            </motion.a>
          </motion.div>

          {/* Right: Description + Social Row */}
          <motion.div
            className="max-w-lg lg:max-w-md xl:max-w-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Social Icons + Email */}
            <motion.div
              custom={3}
              variants={fadeUpVariants}
              className="flex items-center gap-5 flex-wrap"
            >
              <div className="flex items-center gap-4">
                {socialIcons.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="relative w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:border-white transition-all duration-300"
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0 0 20px rgba(255,255,255,0.12)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 1.2 + index * 0.1,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <span className="text-sm">{social.icon}</span>
                  </motion.a>
                ))}
              </div>

              {/* Vertical Separator */}
              <motion.span
                className="hidden sm:block w-[1px] h-6 bg-gray-600"
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 1.6, duration: 0.4 }}
              />

              {/* Email */}
              <motion.a
                href="mailto:Shawn@threestarestimating.com"
                className="text-gray-300 hover:text-white text-sm md:text-base transition-colors duration-300 hover:underline underline-offset-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1.7, duration: 0.5 }}
                whileHover={{ x: 3 }}
              >
                Shawn@threestarestimating.com
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
