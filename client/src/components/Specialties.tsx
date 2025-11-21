import { Card, CardContent } from '@/components/ui/card';
import { Cloud, Code, Smartphone, Cog, Globe } from 'lucide-react';

export function Specialties() {
  const specialties = [
    {
      icon: Cog,
      title: 'DevOps Automation',
      description: 'CI/CD pipelines, infrastructure automation, and deployment orchestration for seamless operations.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'AWS, Azure, and GCP deployments with scalability, security, and cost optimization.',
      color: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern web applications with React, Node.js, and cutting-edge frameworks.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Cog,
      title: 'ERP Systems',
      description: 'Enterprise resource planning solutions tailored to your business processes.',
      color: 'from-purple-600 to-blue-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile solutions for iOS and Android.',
      color: 'from-cyan-400 to-purple-500'
    }
  ];

  return (
    <section id="specialties" className="py-24 bg-black border-t border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">
            Core <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Specialties</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            End-to-end solutions across the entire technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {specialties.map((specialty, i) => {
            const Icon = specialty.icon;
            return (
              <Card 
                key={i}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-500/20 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className={`mb-4 p-3 rounded-lg bg-gradient-to-r ${specialty.color} w-fit`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{specialty.title}</h3>
                  <p className="text-gray-400 text-sm flex-grow">{specialty.description}</p>
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-xs text-cyan-400 font-semibold">Learn More →</p>
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
