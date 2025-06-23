
import { Mail } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "DeFi Platform Development",
      category: "Blockchain",
      description: "Led development of multiple DeFi platforms with NFT integration and wallet connectivity, attracting rapid user growth and significant transaction volume.",
      technologies: ["Solidity", "React", "Web3.js", "Ethereum", "Node.js"],
      highlights: [
        "Smart contract development and deployment",
        "Multi-chain support (Ethereum, Solana, Polygon)",
        "Advanced security implementations",
        "High-performance transaction processing"
      ]
    },
    {
      title: "AI-Powered Robotics Platform",
      category: "AI/ML",
      description: "Developed backend and frontend modules for robotics automation with advanced AI/ML models for real-time object detection and route optimization.",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "Docker"],
      highlights: [
        "Real-time object detection algorithms",
        "Predictive maintenance systems",
        "Microservices architecture",
        "Enterprise SaaS integration"
      ]
    },
    {
      title: "Global CDN Security Platform",
      category: "Cloud Infrastructure",
      description: "Built high-availability backend services supporting millions of requests per day for global CDN and security products at scale.",
      technologies: ["Java", "Python", "AWS", "Docker", "Kubernetes"],
      highlights: [
        "High-availability architecture",
        "Auto-scaling capabilities",
        "Global load balancing",
        "Advanced monitoring and alerting"
      ]
    },
    {
      title: "Fintech Payment Solutions",
      category: "FinTech",
      description: "Designed secure payment workflows and authentication systems for financial services with WCAG compliance and advanced fraud detection.",
      technologies: ["Angular", "Node.js", "PostgreSQL", "Stripe", "Auth0"],
      highlights: [
        "PCI DSS compliant architecture",
        "Multi-currency support",
        "Advanced fraud detection",
        "Accessibility (WCAG 2.1 AA) compliance"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-gray-600 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            These represent just a few highlights from my extensive portfolio of projects across blockchain, AI, and full-stack development.
          </p>
          <a
            href="mailto:0xwangchunbao@gmail.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 inline-flex items-center gap-2"
          >
            <Mail size={20} />
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
