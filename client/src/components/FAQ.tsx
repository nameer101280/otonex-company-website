import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can I get started?',
      answer: 'You can set up your first automated pipeline in under 10 minutes. Our onboarding team will guide you through the process.'
    },
    {
      question: 'Is Otonex secure for enterprise use?',
      answer: 'Yes, we offer enterprise-grade security with SOC 2 compliance, encryption at rest and in transit, and regular security audits.'
    },
    {
      question: 'What integrations do you support?',
      answer: 'We support AWS, Google Cloud, Azure, Kubernetes, Docker, GitHub, GitLab, and 50+ other popular DevOps tools.'
    },
    {
      question: 'Can I migrate from my current CI/CD platform?',
      answer: 'Absolutely. Our migration specialists will help you move your pipelines with zero downtime.'
    },
    {
      question: 'What is your uptime guarantee?',
      answer: 'We guarantee 99.99% uptime with automatic failover and multi-region redundancy for all enterprise plans.'
    },
  ];

  return (
    <section id="faq" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">We've Got the Answers</h2>
          <p className="text-xl text-gray-400">Quick answers to your automation questions</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-white/10 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors"
                data-testid={`button-faq-${i}`}
              >
                <span className="font-semibold text-white text-left">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 bg-black/50 border-t border-white/10">
                  <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
