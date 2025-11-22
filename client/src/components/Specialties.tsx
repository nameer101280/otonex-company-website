import { Card, CardContent } from '@/components/ui/card';
import { Cloud, Compass, GitBranch, ShieldCheck, Smartphone, Workflow } from 'lucide-react';

export function Specialties() {
  const specialties = [
    {
      icon: Compass,
      title: 'Product Platforms',
      description: 'Conversion-first web apps, dashboards, and customer portals crafted for clarity.',
      meta: 'SaaS • B2B • Marketplaces',
    },
    {
      icon: Smartphone,
      title: 'Mobile Experiences',
      description: 'Native-feel mobile apps with the same polish and reliability as your flagship product.',
      meta: 'iOS • Android • Cross-platform',
    },
    {
      icon: Workflow,
      title: 'AI + Automation',
      description: 'Workflow automation, copilots, and data hooks that remove human toil.',
      meta: 'LLMs • Ops automation',
    },
    {
      icon: Cloud,
      title: 'Cloud Architecture',
      description: 'Cloud-native backends, SRE-grade monitoring, and zero-downtime releases.',
      meta: 'AWS • Azure • GCP',
    },
    {
      icon: GitBranch,
      title: 'Systems Integration',
      description: 'Seamless bridges between CRMs, ERPs, billing, and identity providers.',
      meta: 'APIs • ETL • Webhooks',
    },
    {
      icon: ShieldCheck,
      title: 'Security & Compliance',
      description: 'Data governance, secure auth flows, and compliance guardrails from day one.',
      meta: 'SOC2 • GDPR • IAM',
    },
  ];

  return (
    <section id="specialties" className="relative py-20 sm:py-24 overflow-hidden scroll-reveal" data-anim="slide-left">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-10 top-10 w-72 h-72 bg-cyan-400/15 blur-3xl rounded-full"></div>
        <div className="absolute left-0 bottom-0 w-80 h-80 bg-fuchsia-500/15 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 sm:mb-16 space-y-4 scroll-reveal">
          <div className="inline-flex items-center gap-2 glass-chip px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] text-slate-200">
            Signature services
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">Builds that feel inevitable</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Every project ships with glassmorphic clarity, thoughtful UX, and infrastructure that can handle scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {specialties.map((specialty, i) => {
            const Icon = specialty.icon;
            return (
              <Card 
                key={specialty.title}
                className="glass-card rounded-2xl border border-white/10 hover:border-cyan-200/50 transition-all duration-300 h-full scroll-reveal"
                style={{ ['--delay' as string]: `${i * 0.06}s` }}
              >
                <CardContent className="p-6 sm:p-7 flex flex-col h-full">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl glass-chip border border-white/10 flex items-center justify-center text-cyan-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-white">{specialty.title}</h3>
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.14em] text-slate-400">0{i + 1}</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed flex-grow">{specialty.description}</p>
                  <div className="mt-4 pt-4 border-t border-white/10 text-xs uppercase tracking-[0.12em] text-cyan-200">
                    {specialty.meta}
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
