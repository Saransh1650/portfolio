const Skills = () => {
  const skills = [
    { name: 'Flutter', level: 95 },
    { name: 'Swift', level: 90 },
    { name: 'React', level: 85 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 82 },
    { name: 'Solidity', level: 85 },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Skills & <span className="gradient-text">Technologies</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
          Technologies I work with to bring ideas to life
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="card p-4 sm:p-6 hover-glow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <span className="text-sm font-medium text-primary-400">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700/50 rounded-full h-3 mb-2">
              <div
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <span>Proficiency</span>
              <span>{skill.level > 85 ? 'Expert' : skill.level > 70 ? 'Advanced' : 'Intermediate'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
