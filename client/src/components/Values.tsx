export function Values() {
  const values = [
    {
      title: 'Design with intent',
      description: 'We sweat the edges, from microcopy to motion, so every click feels inevitable.',
    },
    {
      title: 'Ship with confidence',
      description: 'CI/CD, monitoring, and rollback strategies come standard—not bolted on at the end.',
    },
    {
      title: 'Transparency by default',
      description: 'Weekly demos, async Looms, and a shared roadmap keep you close to the work.',
    },
    {
      title: 'Partnership over vendor',
      description: 'We act like an embedded squad, aligning on outcomes instead of tickets.',
    },
  ];

  return (
    <section id="values" className="relative py-20 sm:py-24 overflow-hidden scroll-reveal" data-anim="slide-right">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-0 w-64 h-64 bg-cyan-400/15 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-14 space-y-3 scroll-reveal">
          <div className="inline-flex items-center gap-2 glass-chip px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] text-slate-200">
            How we work
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">Principles we don’t compromise</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Our process is equal parts clarity and craft. You get a transparent partnership and builds that scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 sm:gap-6 relative">
          <div className="absolute left-1/2 top-4 bottom-4 hidden md:block w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
          {values.map((value, i) => (
            <div 
              key={value.title} 
              className="glass-card rounded-2xl border border-white/10 p-6 sm:p-7 space-y-3 scroll-reveal"
              style={{ ['--delay' as string]: `${i * 0.08}s` }}
            >
              <div className="flex items-center gap-3">
                <span className="glass-chip rounded-full px-3 py-1 text-xs uppercase tracking-[0.14em] text-cyan-200 border border-white/10">0{i + 1}</span>
                <h3 className="text-lg font-semibold text-white">{value.title}</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
