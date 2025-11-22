import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Comparison() {
  const solutions = [
    { title: 'End-to-end product delivery', description: 'Work with one squad from discovery to production, not a relay race between vendors.', tag: 'Product' },
    { title: 'Conversion-led UX', description: 'Narrative-driven flows, clear affordances, and motion that guides—not distracts.', tag: 'Design' },
    { title: 'Technical foundations', description: 'Type-safe code, scalable APIs, and infrastructure with observability from day one.', tag: 'Engineering' },
    { title: 'Security & compliance ready', description: 'Principle-of-least-privilege, hardened auth, and governance to pass audits.', tag: 'Trust' },
    { title: 'Launch + iterate', description: 'Continuous deployment, A/B hooks, and analytics to refine post-launch.', tag: 'Growth' },
    { title: 'Embedded collaboration', description: 'Weekly demos, async clips, and a shared roadmap to keep stakeholders aligned.', tag: 'Process' },
  ];

  return (
    <section id="comparison" className="relative py-20 sm:py-24 overflow-hidden scroll-reveal" data-anim="slide-left">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-10 bottom-0 w-72 h-72 bg-fuchsia-500/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-14 space-y-3 scroll-reveal">
          <div className="inline-flex items-center gap-2 glass-chip px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] text-slate-200">
            What partnership feels like
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">Designed to deliver, not just develop</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            We operate like an embedded product team—creative, technical, and accountable to outcomes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {solutions.map((solution, i) => (
            <Card 
              key={solution.title}
              className="glass-card rounded-2xl border border-white/10 hover:border-cyan-200/40 transition-all duration-300 overflow-hidden scroll-reveal"
              style={{ ['--delay' as string]: `${i * 0.08}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-white">{solution.title}</span>
                  <span className="glass-chip rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-cyan-100 border border-white/10">
                    {solution.tag}
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{solution.description}</p>
                <div className="flex items-center gap-2 text-xs text-emerald-200">
                  <Check className="h-4 w-4" />
                  Included in every engagement
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
