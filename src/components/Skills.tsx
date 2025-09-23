import Image from 'next/image';

const Skills = () => {
  const technologies = [
    { 
      name: 'Flutter',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      color: 'from-blue-400 to-blue-600'
    },
    { 
      name: 'Swift',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
      color: 'from-orange-400 to-red-500'
    },
    { 
      name: 'React Native',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: 'from-cyan-400 to-blue-500'
    },
    { 
      name: 'Python',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: 'from-yellow-400 to-orange-500'
    },
    { 
      name: 'Solidity',
      image: 'https://docs.soliditylang.org/en/v0.8.20/_static/logo.svg',
      color: 'from-gray-400 to-gray-600'
    },
    { 
      name: 'TypeScript',
      image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      color: 'from-blue-500 to-indigo-600'
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Skills & <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">Technologies</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Technologies I work with to bring ideas to life
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {technologies.map((tech, index) => (
          <div 
            key={tech.name} 
            className="group bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:bg-white/10 hover:border-purple-500/30 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-500 ease-out"
            style={{ 
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className={`p-4 rounded-full bg-gradient-to-r ${tech.color} transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 animate-pulse`}>
                <div className="transform group-hover:animate-bounce">
                  <Image 
                    src={tech.image} 
                    alt={tech.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
                {tech.name}
              </h3>
              <div className={`w-16 h-1 bg-gradient-to-r ${tech.color} rounded-full opacity-60 group-hover:opacity-100 group-hover:w-24 transition-all duration-300`}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
