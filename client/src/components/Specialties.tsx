import { Card, CardContent } from '@/components/ui/card';
import { Cloud, Code, Smartphone, Cog } from 'lucide-react';

export function Specialties() {
  const specialties = [
    {
      icon: Cog,
      title: 'DevOps',
      description: 'CI/CD pipelines, infrastructure automation, and deployment orchestration.'
    },
    {
      icon: Cloud,
      title: 'Cloud',
      description: 'AWS, Azure, and GCP deployments with scalability and optimization.'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern web applications with React, Node.js, and frameworks.'
    },
    {
      icon: Cog,
      title: 'ERP Systems',
      description: 'Enterprise resource planning solutions for business processes.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform solutions for iOS and Android.'
    }
  ];

  return (
    <section id="specialties" className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-4">Core Specialties</h2>
          <p className="text-gray-500">End-to-end solutions across the technology stack</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {specialties.map((specialty, i) => {
            const Icon = specialty.icon;
            return (
              <Card 
                key={i}
                className="bg-transparent border border-gray-800 hover:border-gray-700 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <Icon className="h-6 w-6 text-gray-400 mb-4 group-hover:text-white transition-colors duration-200" />
                  <h3 className="text-base font-medium text-white mb-2">{specialty.title}</h3>
                  <p className="text-gray-500 text-sm flex-grow leading-relaxed">{specialty.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
