import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { HiArrowRight, HiBars3, HiXMark } from "react-icons/hi2";
import logoImg from "../assets/logo.png";

const navLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Services", to: "services" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "get-in-touch" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: <FaFacebookF className="h-7 w-7" /> },
  { label: "X", href: "https://x.com", icon: <FaXTwitter className="h-7 w-7" /> },
  { label: "Instagram", href: "https://instagram.com", icon: <FaInstagram className="h-7 w-7" /> },
  { label: "LinkedIn", href: "https://linkedin.com", icon: <FaLinkedinIn className="h-7 w-7" /> },
];

const Logo = () => (
  <ScrollLink
    to="home"
    smooth={true}
    duration={600}
    offset={-80}
    className="flex items-center shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer"
    aria-label="Three Star Estimating home"
  >
    <motion.img
      src={logoImg}
      alt="3 Star Estimating Logo"
      className="h-16 md:h-20 w-auto object-contain brightness-0 invert"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    />
  </ScrollLink>
);

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 z-50 w-full font-sans"
    >
      <nav className={`w-full border-b transition-all duration-300 ${
        scrolled ? "bg-[#1a1a1a]/85 border-white/10 backdrop-blur-md shadow-lg shadow-black/20" : "bg-transparent border-transparent"
      }`}>
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 md:h-24 lg:px-8">

          <Logo />

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-3 lg:gap-7 md:flex">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  spy={true}
                  className="group relative py-2 text-sm lg:text-base font-medium tracking-wide text-neutral-300 transition-colors duration-200 hover:text-white cursor-pointer"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-white/20 via-white to-white/20 shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 group-hover:w-full" />
                </ScrollLink>
              </motion.li>
            ))}
          </ul>

          {/* Desktop Right: Social + CTA */}
          <div className="hidden items-center gap-3 lg:gap-6 md:flex">
            <div className="hidden lg:flex items-center gap-3 lg:gap-4 border-r border-white/20 pr-4 lg:pr-6">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.2 }}
                  className="text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <motion.a
              href="https://wa.me/13054041822?text=Hello%21%20I%27m%20interested%20in%20your%20estimating%20services%20and%20would%20like%20to%20get%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-full bg-white px-4 lg:px-6 py-2 lg:py-2.5 text-sm lg:text-base font-semibold text-black transition-all duration-300 hover:bg-neutral-200 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] cursor-pointer"
            >
              Get a quote
              <HiArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </motion.a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center text-white transition-colors hover:bg-white/10 md:hidden"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <HiXMark className="h-8 w-8" /> : <HiBars3 className="h-8 w-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-md md:hidden"
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[70] flex flex-col bg-black md:hidden"
          >
            <div className="flex h-20 items-center justify-between px-4 sm:px-6 border-b border-white/10 shrink-0">
              <Logo />
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center text-white hover:bg-white/10"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
              >
                <HiXMark className="h-8 w-8" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8">
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <ScrollLink
                      to={link.to}
                      smooth={true}
                      duration={600}
                      offset={-80}
                      className="block text-2xl font-bold text-neutral-300 transition-colors hover:text-white cursor-pointer"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </ScrollLink>
                  </li>
                ))}
              </ul>

              <div className="mt-12 flex flex-col gap-8 border-t border-white/10 pt-8">
                <div className="flex items-center gap-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-neutral-400 hover:text-white transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                <a
                  href="https://wa.me/13054041822?text=Hello%21%20I%27m%20interested%20in%20your%20estimating%20services%20and%20would%20like%20to%20get%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-white py-4 text-xl font-bold text-black cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a quote
                  <HiArrowRight className="h-6 w-6" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
