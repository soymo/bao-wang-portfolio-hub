
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "Angular", "TypeScript", "MobX", "RxJS", "NgRx", "Tailwind CSS", "Storybook", "HTML5", "CSS3"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "NestJS", "Express", "Python", "FastAPI", "Flask", "Django", "PHP", "Prisma ORM"]
    },
    {
      title: "Blockchain & Web3",
      icon: "⛓️",
      skills: ["Solidity", "Rust", "Go", "Web3.js", "Hardhat", "Remix", "Smart Contracts", "DApp Development", "NFT"]
    },
    {
      title: "AI & ML",
      icon: "🤖",
      skills: ["TensorFlow", "OpenAI API", "GPT-4", "NLP", "Fraud Detection", "ML Integration"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins", "CI/CD"]
    },
    {
      title: "Databases",
      icon: "💾",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Firestore", "NoSQL", "GraphQL"]
    },
    {
      title: "Testing",
      icon: "🧪",
      skills: ["Jest", "Jasmine", "Cypress", "Playwright", "TDD", "Nightwatch"]
    },
    {
      title: "Payments & Auth",
      icon: "🔐",
      skills: ["Stripe", "PayPal", "OAuth2", "JWT", "Auth0", "WCAG 2.1 AA"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white parallax-3d">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 parallax-layer">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-3d">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto card-3d"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 card-3d">
              <div className="text-center mb-4">
                <span className="text-3xl mb-2 block animate-float-3d icon-3d">{category.icon}</span>
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200 skill-tag-3d"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center card-3d bg-gradient-animated">
          <h3 className="text-2xl font-bold mb-4 text-3d">Specialized Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="hover-lift">
              <h4 className="font-semibold mb-2">🚀 Blockchain Innovation</h4>
              <p className="text-blue-100">DeFi, NFTs, Smart Contracts, Trading Bots, Multi-chain Development</p>
            </div>
            <div className="hover-lift">
              <h4 className="font-semibold mb-2">🤖 AI/ML Integration</h4>
              <p className="text-blue-100">Fraud Detection, TensorFlow, OpenAI GPT-4, NLP Pipelines</p>
            </div>
            <div className="hover-lift">
              <h4 className="font-semibold mb-2">☁️ Cloud Architecture</h4>
              <p className="text-blue-100">Microservices, Kubernetes, CI/CD, Scalable Systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
