import { X, Check, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Comparison() {
  const features = [
    { name: 'Manual Deployments', benefit: 'Slow and error-prone' },
    { name: 'Error-Prone Processes', benefit: 'High failure rates' },
    { name: 'Limited by Work Hours', benefit: 'Delayed operations' },
    { name: 'High Labor Costs', benefit: 'Reduced profitability' },
    { name: 'Time-Consuming Tasks', benefit: 'Wasted resources' },
  ];

  const modernFeatures = [
    { name: 'Intelligent Automation', benefit: '10x faster execution' },
    { name: '24/7 Automated Workflows', benefit: 'Always operational' },
    { name: 'Instant Deployments', benefit: 'Zero downtime' },
    { name: 'Cost-Effective Scaling', benefit: 'Reduced expenses' },
    { name: 'Smart Decision Making', benefit: 'Data-driven operations' },
  ];

  return (
    <section id="comparison" className="py-32 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-6">The Transformation</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">Traditional workflows versus intelligent automation—see the dramatic difference</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 relative">
          {/* Left Side - Traditional */}
          <Card className="border border-red-500/20 bg-red-500/5 overflow-hidden">
            <CardContent className="p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center">
                  <X className="h-5 w-5 text-red-500/80" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Traditional Approach</h3>
              </div>

              <ul className="space-y-5">
                {features.map((feature, i) => (
                  <div key={i} className="space-y-1 pb-4 border-b border-red-500/10 last:border-0 last:pb-0 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                    <div className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500/60 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium text-sm">{feature.name}</p>
                        <p className="text-red-400/70 text-xs mt-0.5">{feature.benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-red-500/10">
                <p className="text-xs text-red-400/60">Result: Delays, errors, wasted resources</p>
              </div>
            </CardContent>
          </Card>

          {/* Arrow in Middle - Hidden on mobile */}
          <div className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-black px-4 py-2 border border-gray-800 rounded-full">
              <ArrowRight className="h-5 w-5 text-gray-500" />
            </div>
          </div>

          {/* Right Side - Autonex */}
          <Card className="border border-green-500/20 bg-green-500/5 overflow-hidden lg:relative lg:z-0">
            <CardContent className="p-8 sm:p-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-500/80" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Autonex Platform</h3>
              </div>

              <ul className="space-y-5">
                {modernFeatures.map((feature, i) => (
                  <div key={i} className="space-y-1 pb-4 border-b border-green-500/10 last:border-0 last:pb-0 animate-fade-in-up" style={{ animationDelay: `${i * 0.1 + 0.2}s` }}>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500/60 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-white font-medium text-sm">{feature.name}</p>
                        <p className="text-green-400/70 text-xs mt-0.5">{feature.benefit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </ul>

              <div className="mt-10 pt-8 border-t border-green-500/10">
                <p className="text-xs text-green-400/60">Result: Speed, reliability, growth</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Summary */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 pt-12 border-t border-gray-900">
          {[
            { metric: '10x', label: 'Faster Deployments' },
            { metric: '40%', label: 'Cost Reduction' },
            { metric: '99.99%', label: 'Uptime' }
          ].map((item, i) => (
            <div key={i} className="text-center p-6 border border-gray-800 rounded-lg hover:border-gray-700 transition-colors duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1 + 0.5}s` }}>
              <div className="text-3xl font-light text-white mb-2">{item.metric}</div>
              <p className="text-sm text-gray-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
