import { Check, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Comparison() {
  const solutions = [
    { title: 'Web Applications', description: 'Modern, scalable web platforms built with React, Node.js, and cloud infrastructure.' },
    { title: 'Mobile Apps', description: 'Native and cross-platform iOS/Android applications designed for performance and user experience.' },
    { title: 'Automation', description: 'DevOps, CI/CD pipelines, and intelligent automation to streamline your operations.' },
    { title: 'Cloud Infrastructure', description: 'AWS, Azure, GCP setup and management with security, scalability, and optimization.' },
    { title: 'ERP Systems', description: 'Enterprise resource planning solutions tailored to your business processes and workflows.' },
    { title: 'System Integration', description: 'Seamless integration of your existing systems with modern technologies and APIs.' },
  ];

  return (
    <section id="comparison" className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-4 animate-fade-in-up">What We Build</h2>
          <p className="text-gray-500 text-lg animate-fade-in-up stagger-1">Complete solutions tailored to your business needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <Card 
              key={i}
              className="border border-gray-800 hover:border-gray-700 bg-transparent transition-all duration-300 group hover:bg-white/[0.02] overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <CardContent className="p-6 relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -mr-8 -mt-8 group-hover:bg-white/10 transition-colors duration-300"></div>
                
                <div className="flex items-start gap-3 mb-4 relative z-10">
                  <Check className="h-5 w-5 text-green-500/70 mt-0.5 flex-shrink-0" />
                  <h3 className="text-base font-semibold text-white">{solution.title}</h3>
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed relative z-10">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
