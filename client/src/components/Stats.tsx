export function Stats() {
  const stats = [
    { number: '50+', label: 'Products Delivered', description: 'Startups and enterprises shipped to production.' },
    { number: '8 yrs', label: 'Depth of Experience', description: 'Full-stack engineering and cloud reliability.' },
    { number: '100%', label: 'Client Retention', description: 'Teams stay because we execute and communicate.' },
  ];

  return (
    <section id="stats" className="relative py-20 sm:py-24 overflow-hidden scroll-reveal" data-anim="scale-up">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-16 top-0 w-72 h-72 bg-blue-500/15 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 space-y-3 scroll-reveal">
          <div className="inline-flex items-center gap-2 glass-chip px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] text-slate-200">
            Proof in the numbers
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">Momentum you can measure</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Reliability isn’t a promise—it’s a habit. We bake in observability and keep you informed at every ship.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {stats.map((stat, i) => (
            <div 
              key={stat.label} 
              className="glass-card rounded-2xl border border-white/10 p-6 sm:p-7 flex flex-col gap-3 scroll-reveal"
              style={{ ['--delay' as string]: `${i * 0.08}s` }}
            >
              <div className="text-4xl sm:text-5xl font-semibold gradient-text leading-none">{stat.number}</div>
              <h3 className="text-base font-semibold text-white">{stat.label}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
