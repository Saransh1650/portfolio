const Experience = () => {
  return (
    <section
      id="experience"
      className=" flex items-center justify-center relative overflow-hidden scroll-mt-16 md:scroll-mt-20 py-0"
    >
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-500 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">
          {/* Experience Timeline */}
          <div className="space-y-8 lg:col-span-2">
            {/* Domi Labs Experience */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    Founding Flutter Engineer
                  </h3>
                  <p className="text-blue-400 font-semibold">Domi Labs</p>
                </div>
                <div className="text-gray-400 text-sm sm:text-base mt-2 sm:mt-0 sm:text-right">
                  <p>Oct 2024 – Present</p>
                  <p className="text-xs">Remote</p>
                </div>
              </div>

              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Developed and delivered Flutter mobile applications,
                    implementing{" "}
                    <span className="text-blue-400 font-medium">
                      image scanning with ML
                    </span>
                    , custom graphics and UI rendering using{" "}
                    <span className="text-blue-400 font-medium">
                      CustomPainter
                    </span>
                    , real-time push notifications, and seamless in-app
                    navigation with deep linking.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Developed and delivered{" "}
                    <span className="text-blue-400 font-medium">
                      Flutter Web App with CI/CD pipelines
                    </span>{" "}
                    using GitHub Actions and AWS S3, while reusing the state
                    management logic across mobile and web to maximize
                    efficiency and consistency.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Created a{" "}
                    <span className="text-blue-400 font-medium">
                      custom cross-platform Design Package
                    </span>{" "}
                    maintaining visual and functional consistency across mobile
                    and web applications.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Established{" "}
                    <span className="text-blue-400 font-medium">
                      scalable code practices
                    </span>{" "}
                    by introducing clean architecture patterns, modular feature
                    organization, and GitHub Actions for automated testing and
                    deployment.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Built a{" "}
                    <span className="text-blue-400 font-medium">
                      real-time chat feature using WebSockets
                    </span>
                    , enabling low-latency communication and interactive user
                    experiences.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-600/30">
                {[
                  "Flutter",
                  "Machine Learning",
                  "CustomPainter",
                  "WebSockets",
                  "CI/CD",
                  "AWS S3",
                  "GitHub Actions",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-xs border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Live Links */}
              <div className="flex flex-wrap gap-3 mt-4 pt-4 border-t border-gray-600/30">
                <a
                  href="https://digitaldomi.com/get-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 hover:text-blue-300 rounded-lg border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 text-sm font-medium"
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 2C5.89543 2 5 2.89543 5 4V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2H7ZM7 0H17C19.2091 0 21 1.79086 21 4V20C21 22.2091 19.2091 24 17 24H7C4.79086 24 3 22.2091 3 20V4C3 1.79086 4.79086 0 7 0ZM12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20Z" />
                  </svg>
                  Mobile App
                </a>
                <a
                  href="https://web.digitaldomi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-400 hover:text-purple-300 rounded-lg border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Web App
                </a>
              </div>
            </div>

            {/* Triumb Freelancing Project */}
            <div className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 hover:border-purple-500/30 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    Flutter Freelancing Project
                  </h3>
                  <p className="text-purple-400 font-semibold">Triumb</p>
                </div>
                <div className="text-gray-400 text-sm sm:text-base mt-2 sm:mt-0 sm:text-right">
                  <p>Freelance Project</p>
                  <p className="text-xs">Car Wash Booking System</p>
                </div>
              </div>

              <div className="space-y-3 text-gray-300">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Developed a{" "}
                    <span className="text-purple-400 font-medium">
                      booking system
                    </span>{" "}
                    that allows users to seamlessly schedule and manage car wash
                    appointments with intuitive user interface.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Integrated{" "}
                    <span className="text-purple-400 font-medium">
                      Firebase Firestore as a real-time database
                    </span>
                    , delivering fast, reliable storage and retrieval of booking
                    and user data.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Configured{" "}
                    <span className="text-purple-400 font-medium">
                      push notifications
                    </span>{" "}
                    to send booking confirmations, updates, and reminders,
                    improving user engagement and retention.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-sm sm:text-base leading-relaxed">
                    Integrated{" "}
                    <span className="text-purple-400 font-medium">
                      Razorpay payment gateway
                    </span>{" "}
                    enabling secure and seamless in-app transactions for
                    services with multiple payment options.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-600/30">
                {[
                  "Flutter",
                  "Firebase Firestore",
                  "Push Notifications",
                  "Razorpay",
                  "Payment Gateway",
                  "Booking System",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-xs border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
