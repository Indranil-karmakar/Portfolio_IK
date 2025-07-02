
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'WebSocket'],
      image: '📋',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides real-time weather data, forecasts, and interactive maps using modern APIs.',
      technologies: ['JavaScript', 'CSS3', 'Weather API', 'Chart.js'],
      image: '🌤️',
      demoLink: '#',
      codeLink: '#',
    },
    {
      title: 'Social Media App',
      description: 'A social networking platform with features like posts, comments, likes, and real-time messaging between users.',
      technologies: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      image: '📱',
      demoLink: '#',
      codeLink: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
          <p className="text-gray-400 mt-6 text-lg">
            Some of my recent work that I'm proud of
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
            >
              <div className="p-6">
                <div className="text-6xl mb-4 text-center">{project.image}</div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:opacity-90 transition-opacity"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="flex-1 border-2 border-purple-400 text-purple-400 py-2 px-4 rounded-lg text-center font-medium hover:bg-purple-400 hover:text-white transition-all"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
