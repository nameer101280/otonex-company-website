import { X, Check } from 'lucide-react';

export function Comparison() {
  const features = [
    { name: 'Manual Deployments', traditional: true, modern: false },
    { name: 'Error-Prone Processes', traditional: true, modern: false },
    { name: 'Limited by Work Hours', traditional: true, modern: false },
    { name: 'High Labor Costs', traditional: true, modern: false },
    { name: 'Time-Consuming Tasks', traditional: true, modern: false },
  ];

  const modernFeatures = [
    'Intelligent Automation',
    '24/7 Automated Workflows',
    'Instant Deployments',
    'Cost-Effective Scaling',
    'Smart Decision Making',
  ];

  return (
    <section id="comparison" className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-4">Traditional vs Modern</h2>
          <p className="text-gray-500 animate-fade-in-up stagger-1">See the difference intelligent automation makes</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-up">
            <h3 className="text-lg font-medium text-white mb-8">Traditional Approach</h3>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className={`flex items-start gap-3 animate-fade-in-up ${i === 0 ? '' : `stagger-${i + 1}`}`}>
                  <X className="h-4 w-4 text-red-500/60 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-500 text-sm">{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up stagger-2">
            <h3 className="text-lg font-medium text-white mb-8">Autonex Platform</h3>
            <ul className="space-y-3">
              {modernFeatures.map((feature, i) => (
                <li key={i} className={`flex items-start gap-3 animate-fade-in-up ${i === 0 ? 'stagger-2' : `stagger-${i + 3}`}`}>
                  <Check className="h-4 w-4 text-green-500/60 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
