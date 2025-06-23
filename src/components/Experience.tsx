
const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Bdeo",
      location: "Spain (Remote)",
      period: "Jan 2022 – Present",
      highlights: [
        "Engineered backend services using Python (FastAPI), supporting high-throughput claims automation in AI-driven insurance platform",
        "Integrated TensorFlow models into backend pipelines for real-time fraud analysis, reducing false claims by over 30%",
        "Developed Solana trading bots (Volume bot, Holder bot, Sniper bot) in TypeScript, Golang, and Python",
        "Deployed smart contracts in Rust for Solana dApps and integrated web3 into React, Next.js, Angular applications",
        "Applied TDD principles using Jasmine in React projects to verify component behavior before implementation"
      ]
    },
    {
      title: "Full Stack Blockchain Engineer",
      company: "Zignaly",
      location: "Spain (Remote)",
      period: "Mar 2019 – Dec 2021",
      highlights: [
        "Architected Node.js backend APIs using NestJS and Prisma for NFT minting, trading history, and portfolio analytics",
        "Built robust Web3 integration pipelines supporting wallet connectivity, token management, and smart contract interactions",
        "Integrated TensorFlow NLP models for crypto sentiment classification, powering real-time portfolio risk scoring",
        "Deployed smart contracts using Solidity, Hardhat, Remix and integrated Ethereum wallets with Web3.js",
        "Transformed Unity-based blockchain game into web and mobile format using D3.js, Next.js, and Web3.js"
      ]
    },
    {
      title: "Full Stack Engineer",
      company: "GillBus",
      location: "Poland",
      period: "Mar 2016 – Feb 2019",
      highlights: [
        "Refactored PHP monolith to modular Node.js backend stack, improving maintainability and scaling user load",
        "Built dynamic frontend UI in React with server-connected booking, seat selection, and payment processing",
        "Connected external payment gateways including PayPal and Stripe with server-side validation",
        "Implemented full WCAG 2.1 AA compliance with semantic HTML and ARIA roles across all frontend views",
        "Automated frontend and backend regression tests with Jasmine and Nightwatch, achieving over 85% test coverage"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "RevDeBug",
      location: "Poland",
      period: "Jun 2014 – Mar 2016",
      highlights: [
        "Implemented scalable backend modules using Node.js and Django for live debugging and error replay features",
        "Delivered front-end debugging dashboards in React with WebSocket connections to backend event streams",
        "Built MobX state recording system enabling precise UI state tracking and playback for debugging sessions",
        "Extended SDK support for plugins running in Python, Node.js, and PHP applications",
        "Configured Jenkins CI/CD pipelines for release automation across Node and Python-based environments"
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
