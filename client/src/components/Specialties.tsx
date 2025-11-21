import { Card, CardContent } from '@/components/ui/card';
import { Cloud, Code, Smartphone, Cog, ArrowRight } from 'lucide-react';

export function Specialties() {
  const specialties = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, scalable web applications with React, Node.js, and cloud infrastructure.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native iOS and Android applications with exceptional user experience.'
    },
    {
      icon: Cog,
      title: 'Automation',
      description: 'DevOps, CI/CD pipelines, and intelligent workflow automation.'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'AWS, Azure, GCP setup with security, scalability, and optimization.'
    },
    {
      icon: Cog,
      title: 'System Integration',
      description: 'Seamless integration of your existing systems with modern technologies.'
    },
  ];

  return (
    <section id="specialties" className="py-32 bg-black border-t border-purple-800/30 relative">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-800 to-purple-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-6 animate-fade-in-up">What We Build</h2>
          <p className="text-gray-400 text-lg animate-fade-in-up stagger-1">Complete solutions for your business needs</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {specialties.map((specialty, i) => {
            const Icon = specialty.icon;
            return (
              <Card 
                key={i}
                className="bg-black/40 border border-purple-800/40 hover:border-purple-700/70 transition-all duration-300 group hover:bg-gradient-to-br hover:from-purple-900/30 hover:to-black animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <CardContent className="p-6 flex flex-col h-full relative">
                  <Icon className="h-7 w-7 text-purple-500 mb-4 group-hover:text-purple-400 transition-colors duration-200" />
                  <h3 className="text-base font-semibold text-white mb-2">{specialty.title}</h3>
                  <p className="text-gray-400 text-sm flex-grow leading-relaxed">{specialty.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-purple-800/30 group-hover:border-purple-700/50 transition-colors duration-300">
                    <ArrowRight className="h-4 w-4 text-purple-700/70 group-hover:text-purple-500 transition-colors duration-200" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
