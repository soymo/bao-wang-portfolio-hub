
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white parallax-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 parallax-layer">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-3d">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 card-3d"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto hover-lift">
            Ready to collaborate on your next innovative project? Let's discuss how we can build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="card-3d">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects, and potential collaborations. 
              Whether you're looking to build a DApp, integrate AI/ML solutions, or scale your full-stack application, 
              I'd love to hear about your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 hover-lift">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors duration-300 icon-3d">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a 
                    href="mailto:remigiuszwang.dev@gmail.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    remigiuszwang.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 hover-lift">
                <div className="bg-green-100 p-3 rounded-lg mr-4 group-hover:bg-green-200 transition-colors duration-300 icon-3d">
                  <MessageCircle className="text-green-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a 
                    href="tel:+48724474752"
                    className="text-green-600 hover:text-green-700 transition-colors duration-200"
                  >
                    +48 724 474 752
                  </a>
                </div>
              </div>

              <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 hover-lift">
                <div className="bg-purple-100 p-3 rounded-lg mr-4 group-hover:bg-purple-200 transition-colors duration-300 icon-3d">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Słowackieg, 68-100 Żagań, Lubuskie, Poland</p>
                </div>
              </div>

              <div className="flex items-center group hover:transform hover:translate-x-2 transition-all duration-300 hover-lift">
                <div className="bg-blue-100 p-3 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors duration-300 icon-3d">
                  <Linkedin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/remigiusz-wang-4b086236a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8 shadow-lg card-3d card-3d-reverse">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h3>
            
            <div className="space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500 hover-lift">
                <h4 className="font-semibold text-gray-900 mb-2">🚀 Blockchain & Web3</h4>
                <p className="text-gray-600 text-sm">
                  DeFi platforms, Smart contracts, NFT marketplaces, Trading bots, Multi-chain development
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500 hover-lift">
                <h4 className="font-semibold text-gray-900 mb-2">🤖 AI & Machine Learning</h4>
                <p className="text-gray-600 text-sm">
                  TensorFlow integration, OpenAI GPT-4, Fraud detection, NLP pipelines, ML automation
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 hover-lift">
                <h4 className="font-semibold text-gray-900 mb-2">💻 Full Stack Development</h4>
                <p className="text-gray-600 text-sm">
                  React/Angular, NestJS/FastAPI, Cloud architecture, Microservices, DevOps
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-yellow-500 hover-lift">
                <h4 className="font-semibold text-gray-900 mb-2">💳 Enterprise Solutions</h4>
                <p className="text-gray-600 text-sm">
                  Payment systems, Security compliance, Insurance platforms, E-commerce solutions
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4">Availability</h4>
              <p className="text-gray-600 text-sm mb-4">
                Currently available for consulting and full-time opportunities. 
                Open to remote work and international projects.
              </p>
              <div className="flex space-x-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium flex items-center skill-tag-3d">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                  Available
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium skill-tag-3d">
                  Remote Friendly
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
