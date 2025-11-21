import { Card, CardContent } from '@/components/ui/card';
import { Zap, Lock, Users, TrendingUp } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Zap,
    title: 'Fast Automation',
    description: '10x faster deployments with intelligent CI/CD.'
  },
  {
    id: 2,
    icon: Lock,
    title: 'Security',
    description: 'Enterprise-grade compliance and threat detection.'
  },
  {
    id: 3,
    icon: Users,
    title: 'Collaboration',
    description: 'Intuitive tools for seamless team workflows.'
  },
  {
    id: 4,
    icon: TrendingUp,
    title: 'Scalability',
    description: 'Handle millions with 99.99% uptime guarantee.'
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-6 animate-fade-in-up">Solutions</h2>
          <p className="text-gray-500 text-lg animate-fade-in-up stagger-1">Comprehensive automation for modern teams</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id}
                className="bg-transparent border border-gray-800 hover:border-gray-700 transition-all duration-300 group hover:bg-white/[0.02] animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <CardContent className="p-6 relative">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-full -mr-8 -mt-8 group-hover:bg-white/10 transition-colors duration-300"></div>
                  
                  <Icon className="h-7 w-7 text-gray-500 mb-4 group-hover:text-gray-300 transition-colors duration-200 relative z-10" />
                  <h3 className="text-base font-semibold text-white mb-2 relative z-10">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed relative z-10">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
