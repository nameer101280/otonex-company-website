import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What kinds of products do you build?',
      answer: 'Modern web apps, mobile experiences, automation, and cloud-native platforms. From MVPs to enterprise rollouts, we own the full stack: UX, engineering, infra, and launch.',
    },
    {
      question: 'How quickly can we launch?',
      answer: 'Most MVPs ship in 4-8 weeks with daily progress, weekly demos, and shared roadmaps. We set clear milestones and maintain a predictable release cadence.',
    },
    {
      question: 'How do you handle quality and reliability?',
      answer: 'Type-safe codebases, automated tests, CI/CD, feature flags, and observability. We design for resilience so you can ship often without firefighting.',
    },
    {
      question: 'Can you embed with our existing team?',
      answer: 'Yes. We operate like an internal squad—collaborating with design, product, and engineering while keeping stakeholders aligned through async updates.',
    },
    {
      question: 'What does communication look like?',
      answer: 'Weekly live reviews, async Looms, and transparent boards. You always know what shipped, what is next, and what risks we are mitigating.',
    },
    {
      question: 'How do we start?',
      answer: 'We begin with a strategy session to capture goals, constraints, and success metrics. You get a delivery plan with timelines, owners, and immediate next steps.',
    },
  ];

  return (
    <section id="faq" className="relative py-20 sm:py-24 overflow-hidden scroll-reveal" data-anim="scale-up">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-10 bottom-0 w-72 h-72 bg-blue-400/18 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-14 space-y-3 scroll-reveal">
          <div className="inline-flex items-center gap-2 glass-chip px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] text-slate-200">
            FAQs
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">The details that matter</h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need to know about how we work together.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="glass-card rounded-2xl border border-white/10 overflow-hidden scroll-reveal"
              style={{ ['--delay' as string]: `${i * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-5 sm:px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200"
                data-testid={`button-faq-${i}`}
              >
                <div className="text-sm sm:text-base font-semibold text-white">{faq.question}</div>
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.14em] text-cyan-200">
                  {openIndex === i ? 'Close' : 'Open'}
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 flex-shrink-0 ${
                      openIndex === i ? 'rotate-180 text-cyan-200' : 'text-slate-400'
                    }`}
                  />
                </div>
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 border-t border-white/10 bg-white/5 animate-fade-in">
                  <p className="text-slate-300 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
