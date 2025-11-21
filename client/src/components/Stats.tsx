export function Stats() {
  const stats = [
    { number: '50+', label: 'Enterprises', description: 'Global companies transformed' },
    { number: '40%', label: 'Time Saved', description: 'Deployment time reduction' },
    { number: '99.9%', label: 'Uptime', description: 'System reliability' },
  ];

  return (
    <section id="stats" className="py-32 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-6 animate-fade-in-up">Proven Impact</h2>
          <p className="text-gray-500 text-lg animate-fade-in-up stagger-1">Trusted by enterprises worldwide</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className="text-center p-8 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-300 group hover:bg-white/[0.02] animate-fade-in-up overflow-hidden relative"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10 group-hover:bg-white/10 transition-colors duration-300"></div>
              
              <div className="text-5xl sm:text-6xl font-light text-white mb-3 relative z-10">{stat.number}</div>
              <h3 className="text-base font-semibold text-white mb-2 relative z-10">{stat.label}</h3>
              <p className="text-gray-500 text-sm relative z-10">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
