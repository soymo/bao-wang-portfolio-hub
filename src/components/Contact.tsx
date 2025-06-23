
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to collaborate on your next innovative project? Let's discuss how we can build something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities, innovative projects, and potential collaborations. 
              Whether you're looking to build a DApp, integrate AI/ML solutions, or scale your full-stack application, 
              I'd love to hear about your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a 
                    href="mailto:0xwangchunbao@gmail.com"
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    0xwangchunbao@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Phone className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a 
                    href="tel:+353852357286"
                    className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                  >
                    +353 85 235 7286
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <MapPin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">13 Adelaide Road, E597, Dublin, Ireland</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <Linkedin className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/chun-bao-wang-26938a36b"
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

          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Areas of Expertise</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🚀 Blockchain & Web3</h4>
                <p className="text-gray-600 text-sm">
                  DeFi platforms, Smart contracts, NFT marketplaces, Multi-chain development
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">🤖 AI & Machine Learning</h4>
                <p className="text-gray-600 text-sm">
                  Fraud detection, Predictive analytics, Computer vision, NLP integration
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">💻 Full Stack Development</h4>
                <p className="text-gray-600 text-sm">
                  React/Angular/Vue.js, Node.js/Python, Cloud architecture, DevOps
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">💳 FinTech Solutions</h4>
                <p className="text-gray-600 text-sm">
                  Payment systems, Security compliance, Trading platforms, Mobile banking
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
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                  Available
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
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
