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

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="card">
            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <span className="text-sm text-gray-400 mt-1">{skill.level}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
