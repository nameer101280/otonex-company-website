import { Brain, Sparkles, Zap } from 'lucide-react';

const highlights = [
  { icon: Sparkles, title: 'AI copilots & workflows', copy: 'Ship assistants and automations that remove toil across ops and support.' },
  { icon: Brain, title: 'Data-smart delivery', copy: 'Use your data safely with guardrails, observability, and policy-first design.' },
  { icon: Zap, title: 'Faster revenue loops', copy: 'Experiment quickly with feature flags, A/B hooks, and analytics-ready AI features.' },
];

export function AIHighlight() {
  return (
    <section id="ai" className="relative py-16 sm:py-20 overflow-hidden scroll-reveal" data-anim="scale-up">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-0 top-0 w-64 h-64 bg-fuchsia-400/12 blur-3xl rounded-full"></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 glass-chip px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] text-slate-200">
            AI that ships safely
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">
            AI-native builds without the risk
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            We pair LLM integrations with DevOps guardrails so your AI features are fast to launch and safe in production.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-card rounded-2xl border border-white/10 p-5 sm:p-6 scroll-reveal"
                style={{ ['--delay' as string]: `${i * 0.08}s` }}
              >
                <div className="h-11 w-11 rounded-xl glass-chip border border-white/10 flex items-center justify-center text-cyan-200 mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{item.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
