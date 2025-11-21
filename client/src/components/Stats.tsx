export function Stats() {
  const stats = [
    { number: '50+', label: 'Enterprises', description: 'Global companies transforming with Autonex solutions' },
    { number: '40%', label: 'Time Saved', description: 'Average reduction in deployment and operational time' },
    { number: '99.9%', label: 'Uptime', description: 'Guaranteed reliability across all managed systems' },
  ];

  return (
    <section id="stats" className="py-24 bg-black border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Autonex</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Proven expertise in enterprise transformation and intelligent automation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center animate-fade-in-up p-6 rounded-lg border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-purple-500/5" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent text-5xl sm:text-6xl font-bold mb-3">{stat.number}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
