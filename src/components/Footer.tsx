import logoImg from "../assets/logo.png";
import { Link as ScrollLink } from "react-scroll";

const footerLinks = [
  { label: "Home", to: "home" },
  { label: "About", to: "about" },
  { label: "Services", to: "services" },
  { label: "Projects", to: "projects" },
  { label: "Contact", to: "get-in-touch" },
];

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center w-full py-12 sm:py-16 md:py-20 bg-[#151314] text-white/70">
      {/* Logo */}
      <img
        src={logoImg}
        alt="Three Star Estimating Logo"
        className="h-14 sm:h-20 object-contain brightness-0 invert"
      />

      {/* Tagline */}
      <p className="mt-5 sm:mt-8 mb-4 text-center max-w-4xl text-sm leading-8 px-4 sm:px-6">
        Three Star Estimating — providing accurate, reliable construction estimating
        services for projects of all scales since 1990. With over three decades of
        industry expertise, we deliver precise cost estimates, detailed material
        takeoffs, and professional bid support to contractors, developers, and project
        owners across residential, commercial, industrial, and healthcare sectors.
        Our mission is simple: give you the numbers you can trust, so you can build
        with confidence.
      </p>

      {/* Nav Links */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-5 sm:mt-8 text-sm font-bold text-white">
        {footerLinks.map((link) => (
          <ScrollLink
            key={link.label}
            to={link.to}
            smooth={true}
            duration={600}
            offset={-80}
            className="hover:text-white transition-colors duration-200 cursor-pointer"
          >
            {link.label}
          </ScrollLink>
        ))}
      </div>

      {/* Copyright */}
      <p className="mt-8 text-center text-sm">
        Copyright © 2025{" "}
        <span className="text-white font-medium">Three Star Estimating</span>. All rights reserved.
      </p>

      {/* Credit */}
      <p className="mt-2 text-center text-xs text-white/40">
        Designed & Developed by{" "}
        <span className="text-white/60 font-medium">Innovex Technologies</span>
      </p>
    </footer>
  );
}
