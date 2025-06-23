
import { ArrowDown, Download, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 parallax-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center parallax-layer">
        <div className="animate-fade-in">
          {/* Professional Photo */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                alt="Remigiusz Wang"
                className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-white card-3d hover-lift"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-purple-600/20 animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-float-3d">
            <span className="text-3d-gradient">
              Remigiusz Wang
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-light card-3d">
            Full Stack Engineer | Blockchain & AI Specialist
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed hover-lift">
            10+ years of hands-on experience architecting secure, scalable, and AI-integrated platforms across 
            blockchain, insurance, fintech, and e-commerce domains. Expert in React, NestJS, Web3, and AI/ML integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="mailto:remigiuszwang.dev@gmail.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl btn-3d"
            >
              <Mail size={20} className="icon-3d" />
              Get In Touch
            </a>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2 btn-3d">
              <Download size={20} className="icon-3d" />
              Download CV
            </button>
          </div>

          <div className="text-sm text-gray-500 mb-8 card-3d">
            📍 Żagań, Poland • 📞 +48 724 474 752
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors duration-200 icon-3d animate-tilt-3d"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
