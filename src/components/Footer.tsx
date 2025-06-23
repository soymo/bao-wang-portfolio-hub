
import { Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Remigiusz Wang
            </h3>
            <p className="text-gray-300 mb-4">
              Full Stack Engineer specializing in blockchain, AI, and scalable web applications. 
              Building the future with cutting-edge technology, one line of code at a time.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/remigiusz-wang-4b086236a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 icon-3d"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:remigiuszwang.dev@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200 icon-3d"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover-lift"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#experience')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover-lift"
                >
                  Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover-lift"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors duration-200 hover-lift"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Core Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Blockchain', 'AI/ML', 'NestJS', 'Python', 'Web3', 'AWS', 'TensorFlow'].map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800 dark:bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm skill-tag-3d"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 dark:border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Remigiusz Wang. All rights reserved.
          </div>
          
          <button
            onClick={scrollToTop}
            className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-200 shadow-lg hover:shadow-xl btn-3d"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
