import { Button } from '@/components/ui/button';
import { ArrowUpRight, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const promises = [
    'Strategy-first UX that maps to revenue moments',
    'DevOps + cloud foundations with observability baked in',
    'Automation and mobile ready from day one',
  ];

  const stats = [
    { label: 'MVP timeline', value: '4-8 weeks' },
    { label: 'Reliability', value: '99.9% uptime' },
    { label: 'Deploy cadence', value: 'Daily ships' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 sm:pt-28 pb-16 relative overflow-hidden">
      <div className="absolute -left-32 top-[-18%] w-[340px] h-[340px] bg-cyan-400/30 blur-3xl rounded-full animate-float"></div>
      <div className="absolute right-[-10%] top-[-6%] w-[420px] h-[420px] bg-fuchsia-500/25 blur-[120px] rounded-full"></div>
      <div className="absolute left-1/3 bottom-[-35%] w-[520px] h-[520px] bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-[1.1fr,0.9fr] gap-12 lg:gap-16 items-center">
          <div className="space-y-7">
            <div className="inline-flex items-center gap-3 glass-chip rounded-full px-4 py-2 text-xs uppercase tracking-[0.15em] text-slate-200 scroll-reveal" style={{ ['--delay' as string]: '0s' }}>
              <Sparkles className="h-4 w-4 text-cyan-300" />
              DevOps-first build studio
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-200">Cloud, web, automation, mobile</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight scroll-reveal" style={{ ['--delay' as string]: '0.08s' }}>
              Full-stack web, cloud, automation, <span className="gradient-text">and mobile.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl scroll-reveal" style={{ ['--delay' as string]: '0.14s' }}>
              We pair founder empathy with rigorous engineering. From launch-ready MVPs to enterprise-scale platforms, we build cloud-native, automated, mobile-friendly products that stay reliable long after launch.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 scroll-reveal" style={{ ['--delay' as string]: '0.2s' }}>
              <Button
                onClick={() => scrollToSection('specialties')}
                className="rounded-full px-7 py-3 bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-400 text-slate-950 font-semibold shadow-[0_16px_50px_rgba(43,209,252,0.35)] hover:shadow-[0_22px_60px_rgba(43,209,252,0.45)] transition-all duration-300"
                data-testid="button-cta-book"
              >
                Book an intro call
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="rounded-full px-7 py-3 glass-chip border border-white/20 text-slate-100 hover:text-white hover:border-white/40 transition-colors duration-200"
                data-testid="button-cta-portfolio"
              >
                View our work
              </Button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-chip rounded-xl px-4 py-3 border border-white/10 scroll-reveal" style={{ ['--delay' as string]: '0.28s' }}>
                  <div className="text-xs uppercase tracking-[0.12em] text-slate-400 mb-1">{stat.label}</div>
                  <div className="text-sm font-semibold text-white">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative scroll-reveal" style={{ ['--delay' as string]: '0.24s' }}>
            <div className="absolute -top-10 -right-12 w-40 h-40 bg-cyan-300/20 blur-3xl rounded-full"></div>
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>

              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-400">Product quality index</p>
                  <p className="text-3xl font-semibold gradient-text mt-1">92 / 100</p>
                </div>
                <div className="glass-chip px-3 py-1 rounded-full text-[11px] text-emerald-200 border border-white/10">
                  In active builds
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {promises.map((item, idx) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-slate-200">
                    <CheckCircle2 className="h-4 w-4 text-cyan-300 mt-0.5" />
                    <span className={idx === 0 ? 'text-white' : ''}>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="glass-chip rounded-xl p-3 border border-white/10">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">Launch prep</p>
                  <p className="text-lg font-semibold text-white mt-1">Design → Dev → SRE</p>
                </div>
                <div className="glass-chip rounded-xl p-3 border border-white/10">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">Engagement</p>
                  <p className="text-lg font-semibold gradient-text mt-1">Full-stack squad</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-4">
          <button
            onClick={() => scrollToSection('specialties')}
            className="text-slate-400 hover:text-white transition-colors duration-300 animate-bounce"
            data-testid="button-scroll-indicator"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
