export function Stats() {
  const stats = [
    { number: '50+', label: 'Enterprises', description: 'Global companies transformed' },
    { number: '40%', label: 'Time Saved', description: 'Deployment time reduction' },
    { number: '99.9%', label: 'Uptime', description: 'System reliability' },
  ];

  return (
    <section id="stats" className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-4">Proven Impact</h2>
          <p className="text-gray-500 animate-fade-in-up stagger-1">Trusted by enterprises worldwide</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`text-center animate-fade-in-up ${
                i === 0 ? '' : `stagger-${i + 1}`
              }`}
            >
              <div className="text-5xl sm:text-6xl font-light text-white mb-3">{stat.number}</div>
              <h3 className="text-base font-medium text-white mb-2">{stat.label}</h3>
              <p className="text-gray-500 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
