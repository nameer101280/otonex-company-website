import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function Comparison() {
  const solutions = [
    { title: 'Web Applications', description: 'Modern, scalable web platforms built with React, Node.js, and cloud.' },
    { title: 'Mobile Apps', description: 'Native iOS and Android applications with exceptional UX.' },
    { title: 'Automation', description: 'DevOps, CI/CD pipelines, and workflow automation.' },
    { title: 'Cloud Infrastructure', description: 'AWS, Azure, GCP setup with security and optimization.' },
    { title: 'ERP Systems', description: 'Enterprise resource planning tailored to your business.' },
    { title: 'System Integration', description: 'Seamless integration of existing systems.' },
  ];

  return (
    <section id="comparison" className="py-24 bg-black border-t border-purple-600/20 relative">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-4 animate-fade-in-up">Services</h2>
          <p className="text-gray-400 text-lg animate-fade-in-up stagger-1">Complete solutions for your needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <Card 
              key={i}
              className="bg-black/40 border border-purple-600/30 hover:border-purple-600/70 bg-gradient-to-br hover:bg-purple-600/10 transition-all duration-300 group overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <CardContent className="p-6 relative">
                <Check className="h-5 w-5 text-purple-500 mb-4 group-hover:text-purple-400 transition-colors duration-200" />
                <h3 className="text-base font-semibold text-white mb-2">{solution.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{solution.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
