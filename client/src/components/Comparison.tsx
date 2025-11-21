import { X, Check } from 'lucide-react';

export function Comparison() {
  const features = [
    { name: 'Manual Work', traditional: true, otonex: false },
    { name: 'Prone to Human Errors', traditional: true, otonex: false },
    { name: 'Limited by Work Hours', traditional: true, otonex: false },
    { name: 'High Labor Costs & Overhead', traditional: true, otonex: false },
    { name: 'Slow & Time-Consuming Tasks', traditional: true, otonex: false },
    { name: 'Disconnected & Repetitive Work', traditional: true, otonex: false },
    { name: 'Inconsistent & Dependent on Workforce', traditional: true, otonex: false },
  ];

  const otonexFeatures = [
    'Smart, AI-Driven Decisions',
    '24/7 Automated Workflows',
    'Scalable & Cost-Effective',
    'Instant Data Processing',
    'Seamless System Integration',
    'Consistent & Reliable Output',
  ];

  return (
    <section id="comparison" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">What Makes Us Stand Out</h2>
          <p className="text-lg text-gray-400">Traditional vs AI-Powered Automation</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <h3 className="text-2xl font-bold text-gray-300 mb-8">Traditional Approach</h3>
            <ul className="space-y-4">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up stagger-1">
            <h3 className="text-2xl font-bold text-purple-400 mb-8">Otonex AI Automation</h3>
            <ul className="space-y-4">
              {otonexFeatures.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
