import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Values from "../components/Values";
import WhyChoose from "../components/WhyChoose";
import Services from "../components/Services";
import Projects from "../components/Projects";
import GetInTouch from "../components/GetInTouch";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Values />
      <WhyChoose />
      <Services />
      <Projects />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default HomePage;
