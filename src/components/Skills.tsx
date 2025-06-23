
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["React", "Angular", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "Material UI", "Shadcn UI"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Python", "Django", "FastAPI", "Flask", ".NET Core", "Java", "PHP"]
    },
    {
      title: "Blockchain",
      icon: "⛓️",
      skills: ["Solidity", "Rust", "Web3.js", "Ethereum", "Solana", "Polygon", "Smart Contracts", "DApp Development"]
    },
    {
      title: "AI & ML",
      icon: "🤖",
      skills: ["TensorFlow", "OpenAI API", "ML Model Integration", "Data Analytics"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD", "Jenkins"]
    },
    {
      title: "Databases",
      icon: "💾",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM", "Firestore", "NoSQL"]
    },
    {
      title: "Testing",
      icon: "🧪",
      skills: ["Jest", "Cypress", "Playwright", "Jasmine", "TDD"]
    },
    {
      title: "Other",
      icon: "🛠️",
      skills: ["RESTful APIs", "GraphQL", "OAuth2", "JWT", "Stripe", "PayPal", "WCAG 2.1 AA"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
              <div className="text-center mb-4">
                <span className="text-3xl mb-2 block">{category.icon}</span>
                <h3 className="text-lg font-bold text-gray-900">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-gray-700 px-3 py-1 rounded-full text-sm border hover:bg-blue-50 hover:text-blue-700 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Specialized Expertise</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2">Blockchain Innovation</h4>
              <p className="text-blue-100">DeFi, NFTs, Smart Contracts, Multi-chain Development</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">AI/ML Integration</h4>
              <p className="text-blue-100">Fraud Detection, Automation, Predictive Analytics</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Full Stack Architecture</h4>
              <p className="text-blue-100">Scalable Systems, Microservices, Cloud-Native Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
