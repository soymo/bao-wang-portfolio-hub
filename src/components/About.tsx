
const About = () => {
  const achievements = [
    {
      title: "Full Stack Development",
      description: "Delivered robust applications using React, Vue.js, Angular, Node.js, Python frameworks with strong emphasis on accessibility and security."
    },
    {
      title: "Blockchain and Web3",
      description: "Built DApps using Solidity, Rust and Web3.js on multiple networks including Ethereum, Solana, and Polkadot."
    },
    {
      title: "AI, Cloud & DevOps",
      description: "Integrated AI/ML workflows for fraud detection and automation, managed cloud-native architectures using AWS and Azure."
    },
    {
      title: "Leadership and Collaboration",
      description: "Led complex technical projects, mentored junior developers, and contributed to rapid growth of fintech and blockchain startups."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Professional Summary
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Full Stack Software Engineer with 10+ years of experience delivering scalable, secure, and innovative solutions 
              across fintech, AI, and blockchain sectors. Proven expertise in architecting and developing robust web applications, 
              smart contracts, and decentralized apps (DApps).
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Adept at leading cross-functional teams, integrating AI/ML workflows, and driving cloud-native deployments for 
              global clients. Passionate about building products that solve real-world problems and empower users.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                <p className="text-gray-600">Bachelor of Science in Computer Science</p>
                <p className="text-gray-500 text-sm">University College Dublin, Ireland</p>
                <p className="text-gray-500 text-sm">2011 - 2015</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                <p className="text-gray-600">English (Fluent)</p>
                <p className="text-gray-600">Mandarin (Native)</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Key Achievements
            </h3>
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-md transition-shadow duration-200">
                <h4 className="font-semibold text-gray-900 mb-3">{achievement.title}</h4>
                <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
