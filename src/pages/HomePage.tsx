import { FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Trust from "../components/Trust";
import About from "../components/About";
import MissionAndVision from "../components/MissionAndVision";
import Values from "../components/Values";
import Services from "../components/Services";
import Projects from "../components/Projects";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
import GetInTouch from "../components/GetInTouch";
import Location from "../components/Location";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/13054041822?text=Hello%21%20I%27m%20interested%20in%20your%20estimating%20services%20and%20would%20like%20to%20get%20a%20quote."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "16px",
          right: "16px",
          zIndex: 1000,
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "48px",
          height: "48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          textDecoration: "none",
        }}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} color="white" />
      </a>
      <Hero />
      <Trust />
      <About />
      <MissionAndVision />
      <Values />
      <Services />
      <Projects />
      <HowItWorks />
      <FAQ />
      <GetInTouch />
      <Location />
      <Footer />
    </>
  );
};

export default HomePage;
