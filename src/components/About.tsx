
const About = () => {
  const achievements = [
    {
      title: "Full Stack Engineering",
      description: "Extensive knowledge of building enterprise-grade applications with React, NestJS, Prisma, and GraphQL, with production-grade use of Stripe and PayPal for secure payments."
    },
    {
      title: "AI & ML Integration",
      description: "Integrated TensorFlow-based fraud detection in insurance workflows; embedded OpenAI GPT-4 for content automation and chat agents, reducing false claims by over 30%."
    },
    {
      title: "Blockchain Expertise",
      description: "Hands-on contributions to DApps, smart contracts, and crypto trading infrastructure using Web3.js, Solidity, Rust, and Go since 2019."
    },
    {
      title: "DevOps & Infrastructure",
      description: "Managed scalable CI/CD pipelines with GitHub Actions, Terraform, and Kubernetes; implemented monitoring on AWS, GCP, and Azure."
    },
    {
      title: "Testing & Quality",
      description: "Strong focus on test reliability with Jasmine, Jest, and Playwright; built accessibility-first applications compliant with WCAG 2.1 AA."
    },
    {
      title: "Leadership & Collaboration",
      description: "Operated in high-growth startups and B2B SaaS companies, mentoring teams and leading cross-functional feature launches."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 parallax-3d overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 parallax-layer">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-3d">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto card-3d"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="card-3d">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Professional Summary
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 hover-lift">
              Full Stack Developer with 10+ years of hands-on experience architecting secure, scalable, and AI-integrated 
              platforms across the blockchain, insurance, fintech, and e-commerce domains. Adept in leading frontend and 
              backend development using React, Angular, NestJS, and Python frameworks.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8 hover-lift">
              Strong emphasis on performance, accessibility, and cloud-native infrastructure. Proven track record of building 
              AI-enhanced systems using TensorFlow and OpenAI, integrating Web3 capabilities, and deploying CI/CD pipelines 
              across AWS, GCP, and Kubernetes. Expert in TDD, DevOps automation, and system design across distributed teams.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="card-3d">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                <p className="text-gray-600 dark:text-gray-300">Bachelor of Science in Computer Science</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">University of Zielona Góra, Poland</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">2010 - 2014</p>
              </div>
              <div className="card-3d">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Contact</h4>
                <p className="text-gray-600 dark:text-gray-300">remigiuszwang.dev@gmail.com</p>
                <p className="text-gray-600 dark:text-gray-300">+48 724 474 752</p>
                <p className="text-gray-600 dark:text-gray-300">Żagań, Poland</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 relative">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Key Highlights
            </h3>
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-lg transition-all duration-300 relative z-10 hover:z-20 hover:scale-105 hover:shadow-xl ${
                  index % 2 === 0 ? 'card-3d' : 'card-3d card-3d-reverse'
                }`}
                style={{
                  transformOrigin: 'center center'
                }}
              >
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
