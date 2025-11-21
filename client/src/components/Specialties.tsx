import { Card, CardContent } from '@/components/ui/card';
import { Cloud, Code, Smartphone, Cog, ArrowRight } from 'lucide-react';

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
    <section id="specialties" className="py-32 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-6 animate-fade-in-up">Core Specialties</h2>
          <p className="text-gray-500 text-lg animate-fade-in-up stagger-1">End-to-end solutions across the technology stack</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {specialties.map((specialty, i) => {
            const Icon = specialty.icon;
            return (
              <Card 
                key={i}
                className="bg-transparent border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:bg-white/[0.02] animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <CardContent className="p-6 flex flex-col h-full relative">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -mr-10 -mt-10 group-hover:bg-white/10 transition-colors duration-300"></div>
                  
                  <Icon className="h-7 w-7 text-gray-500 mb-4 group-hover:text-gray-300 transition-colors duration-200 relative z-10" />
                  <h3 className="text-base font-semibold text-white mb-2 relative z-10">{specialty.title}</h3>
                  <p className="text-gray-500 text-sm flex-grow leading-relaxed relative z-10">{specialty.description}</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-800 group-hover:border-gray-700 transition-colors duration-300 relative z-10">
                    <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-gray-400 transition-colors duration-200" />
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
