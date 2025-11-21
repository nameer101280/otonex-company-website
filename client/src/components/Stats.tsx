export function Stats() {
  const stats = [
    { number: '50+', label: 'Projects Delivered', description: 'From startups to enterprises' },
    { number: '8+', label: 'Years Experience', description: 'Building scalable solutions' },
    { number: '100%', label: 'Client Satisfaction', description: 'Dedicated to your success' },
  ];

  return (
    <section id="stats" className="py-16 sm:py-24 bg-black border-t border-purple-800/30 relative">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-gradient-to-b from-purple-800 to-purple-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl font-light text-white mb-4 sm:mb-6 animate-fade-in-up">Proven Track Record</h2>
          <p className="text-gray-400 text-base sm:text-lg animate-fade-in-up stagger-1">Years of excellence and innovation</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="text-center p-6 sm:p-8 border border-purple-800/40 hover:border-purple-700/70 transition-all duration-300 group hover:bg-gradient-to-br hover:from-purple-900/20 hover:to-black rounded-lg animate-fade-in-up overflow-hidden relative"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-800/20 to-purple-900/10 rounded-full -mr-10 -mt-10 group-hover:from-purple-800/40 group-hover:to-purple-900/20 transition-colors duration-300"></div>
              
              <div className="text-4xl sm:text-5xl font-light bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent mb-2 sm:mb-3 relative z-10">{stat.number}</div>
              <h3 className="text-base font-semibold text-white mb-2 relative z-10">{stat.label}</h3>
              <p className="text-gray-500 text-sm relative z-10">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
