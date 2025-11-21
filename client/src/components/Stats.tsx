export function Stats() {
  const stats = [
    { number: '150+', label: 'Businesses', description: 'Companies have streamlined their workflows with our solutions' },
    { number: '1M+', label: 'Hours', description: 'Reducing manual work and boosting productivity through automation' },
    { number: '95%', label: 'Faster', description: 'Clients see improved efficiency within the first three months' },
  ];

  return (
    <section id="stats" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">Who We Are</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Otonex is a team of innovators dedicated to making AI automation simple and effective.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="text-5xl sm:text-6xl font-bold text-purple-500 mb-3">{stat.number}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{stat.label}</h3>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
