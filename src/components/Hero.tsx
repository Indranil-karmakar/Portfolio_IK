import React from 'react';
import { ChevronDown } from 'lucide-react';
const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          {/* Circular Image */}
          <div className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full border-4 md:border-6 lg:border-8 border-gradient-to-r from-purple-400 via-blue-400 to-pink-400 p-1 bg-gradient-to-r from-purple-400 via-blue-400 to-pink-400">
              <div className="w-full h-full rounded-full overflow-hidden bg-transparent">
                <img src="/lovable-uploads/585df954-86ce-4f23-a406-01cd3bf8d023.png" alt="Indranil Karmakar" className="w-full h-full rounded-full object-cover" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Indranil Karmakar
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Full Stack Web Developer
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating beautiful, functional, and user-friendly web experiences
            that make a difference in people's lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={scrollToAbout} className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25">
              Get to Know Me
            </button>
            <a href="#contact" className="px-8 py-3 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300">
              Let's Connect
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400 cursor-pointer" onClick={scrollToAbout} />
      </div>
    </section>;
};
export default Hero;