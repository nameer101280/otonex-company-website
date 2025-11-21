import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do you offer custom web application development?',
      answer: 'Yes. We build modern, scalable web applications using React, Node.js, and cloud platforms. From startups to enterprises, we handle everything from design to deployment.'
    },
    {
      question: 'Can you develop native mobile apps for iOS and Android?',
      answer: 'Absolutely. We develop native iOS and Android applications, as well as cross-platform solutions that work seamlessly on both platforms with shared code.'
    },
    {
      question: 'What automation services do you provide?',
      answer: 'We handle CI/CD pipelines, infrastructure automation, DevOps setup, deployment orchestration, and workflow automation to streamline your operations.'
    },
    {
      question: 'Do you manage cloud infrastructure?',
      answer: 'Yes. We set up, manage, and optimize your cloud infrastructure on AWS, Azure, or GCP with security, scalability, and cost optimization built-in.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Timeline depends on project scope. Most web applications take 8-16 weeks, mobile apps 12-20 weeks, and automation projects 4-8 weeks. We provide detailed estimates upfront.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow agile methodology with regular sprints, weekly updates, and client feedback loops. You get visibility at every stage of development.'
    },
  ];

  return (
    <section id="faq" className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-4 animate-fade-in-up">Frequently Asked</h2>
          <p className="text-gray-500 animate-fade-in-up stagger-1">Everything you need to know about working with us</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-gray-800 hover:border-gray-700 transition-all duration-300 rounded-lg overflow-hidden group hover:bg-white/[0.02] animate-fade-in-up"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
                data-testid={`button-faq-${i}`}
              >
                <span className="font-medium text-white text-left text-sm">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-2 ${
                    openIndex === i ? 'rotate-180 text-gray-400' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 bg-white/[0.02] border-t border-gray-800 animate-fade-in">
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
