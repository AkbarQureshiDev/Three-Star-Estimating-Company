import desktopBg from '../assets/desktopherobg.png';
import mobileBg from '../assets/mobileherobg.png';

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-[100dvh] items-center">
      {/* Background Images */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${mobileBg})` }}
      />
      {/* Mobile dark overlay */}
      <div className="absolute inset-0 bg-black/40 md:hidden" />
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${desktopBg})` }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-2xl w-full text-center md:text-left mx-auto md:mx-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.15] tracking-tight">
            Creating spaces<br />
            that inspire <span className="inline-block w-8 sm:w-12 md:w-28 h-[2px] bg-white ml-2 md:ml-4 align-middle relative md:-top-2 -top-1 rounded-full"></span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed mx-auto md:mx-0">
            As one of the leading choices for general contractors in the USA, we deliver the best contractor solutions and precision construction estimating services to bring your vision to life. From initial cost takeoff to final project execution, our dedicated team ensures every detail perfectly matches your unique requirements.
          </p>
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 sm:gap-6 justify-center md:justify-start items-center">
            <a
              href="https://wa.me/13054041822?text=Hello%21%20I%27m%20interested%20in%20your%20estimating%20services%20and%20would%20like%20to%20get%20a%20quote."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-white text-black px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-medium text-base sm:text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get a quote <span className="text-xl leading-none">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
