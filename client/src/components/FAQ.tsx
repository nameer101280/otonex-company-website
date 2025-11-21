import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Do you offer custom web application development?',
      answer: 'Yes. We build modern, scalable web applications using React, Node.js, and cloud platforms. From MVPs to enterprise solutions, we handle everything from design to deployment and maintenance.'
    },
    {
      question: 'Can you develop native mobile apps?',
      answer: 'Absolutely. We develop native iOS and Android applications, as well as cross-platform solutions that work seamlessly on both platforms with shared code and consistent user experience.'
    },
    {
      question: 'What automation services do you provide?',
      answer: 'We handle CI/CD pipelines, infrastructure automation, DevOps setup, deployment orchestration, and workflow automation to streamline your operations and reduce manual work.'
    },
    {
      question: 'Do you manage cloud infrastructure?',
      answer: 'Yes. We set up, manage, and optimize your cloud infrastructure on AWS, Azure, or GCP with security, scalability, and cost optimization built-in from day one.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Timeline depends on project scope. Most web applications take 8-16 weeks, mobile apps 12-20 weeks, and automation projects 4-8 weeks. We provide detailed estimates upfront.'
    },
    {
      question: 'What is your development process?',
      answer: 'We follow agile methodology with regular sprints, weekly updates, and client feedback loops. You get visibility at every stage of development and can adjust requirements as needed.'
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 bg-black border-t border-purple-800/30 relative">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-800 to-purple-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-5xl font-light text-white mb-3 sm:mb-4 animate-fade-in-up">Frequently Asked</h2>
          <p className="text-gray-400 animate-fade-in-up stagger-1">Questions about our services and process</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border border-purple-800/40 hover:border-purple-700/70 transition-all duration-300 group hover:bg-gradient-to-br hover:from-purple-900/20 hover:to-black rounded-lg overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-5 sm:px-6 py-4 flex items-center justify-between hover:bg-purple-900/10 transition-colors duration-200"
                data-testid={`button-faq-${i}`}
              >
                <span className="font-medium text-white text-left text-sm">{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 text-purple-700/70 transition-transform duration-300 flex-shrink-0 ml-2 ${
                    openIndex === i ? 'rotate-180 text-purple-500' : ''
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 py-4 bg-purple-900/10 border-t border-purple-800/40 animate-fade-in">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
