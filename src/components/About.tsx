const About = () => {
  return (
    <section
      id="about"
      className="h-screen flex items-center justify-center relative overflow-hidden scroll-mt-16 md:scroll-mt-20 py-0"
    >
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed text-center lg:text-left">
              I&apos;m a passionate developer who thrives at the intersection of technology and innovation. 
              With a robust background in developing dynamic mobile applications, I specialize in creating 
              cutting-edge solutions using Flutter, Swift, and emerging Web3 technologies.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed text-center lg:text-left">
              Currently focusing on <span className="text-blue-400 font-semibold">App Development</span>, 
              I&apos;ve built diverse projects ranging from NFT marketplaces and blockchain social media platforms 
              to health tracking apps and AR experiences. I&apos;m particularly passionate about{' '}
              <span className="text-blue-400 font-semibold">SwiftUI (iOS)</span>,{' '}
              <span className="text-blue-400 font-semibold">Flutter</span>, and{' '}
              <span className="text-blue-400 font-semibold">Solidity</span> for smart contract development.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed text-center lg:text-left">
              Based in <span className="text-blue-400 font-semibold">Jaipur, India</span>, I&apos;m always eager to 
              collaborate on innovative projects and contribute to the open-source community. With over{' '}
              <span className="text-blue-400 font-semibold">1,900+ contributions</span> on GitHub, I believe in 
              learning through building and sharing knowledge with fellow developers.
            </p>

            <div className="flex flex-wrap gap-3 pt-2 justify-center lg:justify-start">
              {['Mobile Development', 'Blockchain/Web3', 'iOS Development', 'Flutter', 'Smart Contracts', 'AR/VR'].map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats and Current Work */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="text-center p-4 sm:p-6 card hover-glow">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">57+</div>
                <div className="text-gray-400 text-sm sm:text-base">GitHub Repos</div>
              </div>
              <div className="text-center p-4 sm:p-6 card hover-glow">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">1.9k+</div>
                <div className="text-gray-400 text-sm sm:text-base">Contributions</div>
              </div>
              <div className="text-center p-4 sm:p-6 card hover-glow">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">15+</div>
                <div className="text-gray-400 text-sm sm:text-base">Technologies</div>
              </div>
              <div className="text-center p-4 sm:p-6 card hover-glow">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2">4</div>
                <div className="text-gray-400 text-sm sm:text-base">GitHub Followers</div>
              </div>
            </div>

            {/* Current Focus */}
            <div className="p-4 sm:p-6 card hover-glow">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 text-blue-400 text-center lg:text-left">Currently Working On</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Arbitrage trading algorithms with Python</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Advanced SwiftUI and ARKit applications</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Web3 and blockchain integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base">Flutter cross-platform solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;