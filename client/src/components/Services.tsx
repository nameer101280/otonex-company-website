import { Card, CardContent } from '@/components/ui/card';
import { Activity, Lock, Sparkles, Users } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Sparkles,
    title: 'Experience-led builds',
    description: 'Narrative flows, expressive UI, and micro-interactions tuned for clarity and delight.',
    metric: '+18% avg. conversion lift',
  },
  {
    id: 2,
    icon: Lock,
    title: 'Secure from day one',
    description: 'SSO, audit trails, and data permissions designed in—not bolted on after launch.',
    metric: 'SOC2-friendly patterns',
  },
  {
    id: 3,
    icon: Users,
    title: 'Embedded collaboration',
    description: 'Figma-first, async Loom updates, and shared sprint boards to keep everyone aligned.',
    metric: 'Weekly demos & decisions',
  },
  {
    id: 4,
    icon: Activity,
    title: 'Operational excellence',
    description: 'CI/CD, monitoring, feature flags, and runbooks for predictable releases.',
    metric: 'Zero-downtime deploys',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-24 overflow-hidden scroll-reveal" data-anim="fade">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-1/4 top-0 w-72 h-72 bg-cyan-300/20 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-14 space-y-3 scroll-reveal">
          <div className="inline-flex items-center gap-2 glass-chip px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] text-slate-200">
            Why choose us
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">Craft + cadence + confidence</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            We blend expressive design with hardened engineering so you get velocity without sacrificing polish.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id}
                className="glass-card rounded-2xl border border-white/10 hover:border-cyan-200/40 transition-all duration-300 h-full scroll-reveal"
                style={{ ['--delay' as string]: `${i * 0.06}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="h-11 w-11 rounded-xl glass-chip border border-white/10 flex items-center justify-center text-cyan-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">{service.description}</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 text-xs uppercase tracking-[0.12em] text-emerald-200">
                    {service.metric}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
