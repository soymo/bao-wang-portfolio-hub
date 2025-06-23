
const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "4soft",
      location: "Wrocław, Poland (Remote)",
      period: "Jul 2023 – Jun 2025",
      highlights: [
        "Led end-to-end development of DApps and smart contracts on Ethereum, Solana, TON",
        "Launched multiple DeFi platforms and blockchain-based betting game platforms",
        "Integrated AI-driven features for fraud detection using TensorFlow and OpenAI APIs",
        "Mentored junior developers in blockchain best practices and secure smart contract development"
      ]
    },
    {
      title: "Senior Software Engineer",
      company: "Hai Robotics",
      location: "Hoofddorp, Netherlands (Remote)",
      period: "Aug 2021 – Jul 2023",
      highlights: [
        "Developed backend and frontend modules for robotics automation platforms",
        "Integrated advanced AI/ML models for real-time object detection and route optimization",
        "Built microservices and APIs connecting robotics systems with enterprise SaaS platforms",
        "Led migration of legacy systems to microservices architecture"
      ]
    },
    {
      title: "Full Stack Engineer",
      company: "Greenfinch Technology",
      location: "Dublin, Ireland",
      period: "Aug 2019 – Jul 2021",
      highlights: [
        "Delivered custom web applications for finance, healthcare, and logistics clients",
        "Designed and optimized PostgreSQL and MongoDB schemas",
        "Integrated third-party APIs and payment gateways for secure transactions",
        "Led accessibility and performance improvements ensuring WCAG compliance"
      ]
    },
    {
      title: "Software Developer",
      company: "Acoustic Technology",
      location: "Shanghai, China",
      period: "Aug 2017 – Jul 2019",
      highlights: [
        "Developed IoT and smart device management platforms",
        "Integrated real-time data streams and device control APIs",
        "Implemented secure authentication using OAuth2 and JWT",
        "Enhanced system monitoring and alerting, reducing incident response times"
      ]
    },
    {
      title: "Software Developer",
      company: "Akamai Technologies Ltd",
      location: "Dublin, Ireland",
      period: "Jul 2015 – Jun 2017",
      highlights: [
        "Built high-availability backend services for global CDN and security products",
        "Automated deployment and monitoring pipelines with Docker and Jenkins",
        "Improved system performance supporting millions of requests per day",
        "Supported migration of legacy systems to cloud infrastructure"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 parallax-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 parallax-layer">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-3d">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto card-3d"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200 ${index % 2 === 0 ? 'card-3d' : 'card-3d card-3d-reverse'}`}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                  <p className="text-blue-600 font-semibold">{exp.company}</p>
                  <p className="text-gray-500">{exp.location}</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium skill-tag-3d">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start hover-lift">
                    <span className="text-blue-600 mr-2 mt-1.5 icon-3d">•</span>
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
