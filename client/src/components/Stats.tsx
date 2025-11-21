export function Stats() {
  const stats = [
    { number: '100+', label: 'Teams Automated', description: 'Companies scaling with our platform' },
    { number: '5M+', label: 'Hours Saved', description: 'Manual work eliminated monthly' },
    { number: '99.9%', label: 'Uptime', description: 'Enterprise-grade reliability' },
  ];

  return (
    <section id="stats" className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-5xl sm:text-6xl font-bold text-primary mb-3">{stat.number}</div>
              <h3 className="text-xl font-semibold text-black mb-2">{stat.label}</h3>
              <p className="text-gray-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
