
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
              Hello! I'm Indranil Karmakar
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate web developer with a love for creating digital experiences that are not only 
              visually appealing but also highly functional. With expertise in both front-end and back-end 
              technologies, I enjoy bringing ideas to life through code.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source 
              projects, or sharing my knowledge with the developer community. I believe in continuous 
              learning and staying up-to-date with the latest industry trends.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-full text-sm">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-400 rounded-full text-sm">
                Team Player
              </span>
              <span className="px-4 py-2 bg-green-600/20 text-green-400 rounded-full text-sm">
                Creative Thinker
              </span>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
