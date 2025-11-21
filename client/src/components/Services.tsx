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
    <section id="services" className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-4">Solutions</h2>
          <p className="text-gray-500">Comprehensive automation for modern teams</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id}
                className="bg-transparent border border-gray-800 hover:border-gray-700 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                <CardContent className="p-6">
                  <Icon className="h-6 w-6 text-gray-400 mb-4 hover:text-white transition-colors duration-200" />
                  <h3 className="text-base font-medium text-white mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
