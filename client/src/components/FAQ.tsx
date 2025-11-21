import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How quickly can I get started?',
      answer: 'Setup takes under 10 minutes. Our team guides you through the entire process.'
    },
    {
      question: 'Is Autonex secure?',
      answer: 'Yes. SOC 2 compliance, encryption, and regular security audits included.'
    },
    {
      question: 'What platforms do you support?',
      answer: 'AWS, Google Cloud, Azure, Kubernetes, Docker, GitHub, GitLab, and 50+ tools.'
    },
    {
      question: 'Can I migrate existing systems?',
      answer: 'Absolutely. Our specialists handle migration with zero downtime.'
    },
    {
      question: 'What uptime guarantee?',
      answer: '99.99% uptime with automatic failover and multi-region redundancy.'
    },
  ];

  return (
    <section id="faq" className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-4">Questions</h2>
          <p className="text-gray-500">Common questions answered</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-800 hover:border-gray-700 transition-colors duration-300 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                data-testid={`button-faq-${i}`}
              >
                <span className="font-medium text-white text-left text-sm">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform duration-200 flex-shrink-0 ml-2 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 bg-white/[0.02] border-t border-gray-800">
                  <p className="text-gray-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
