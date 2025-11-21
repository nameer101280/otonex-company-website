import { Card, CardContent } from '@/components/ui/card';
import { Zap, Lock, Users, TrendingUp } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Zap,
    title: 'Lightning Fast Automation',
    description: 'Deploy 10x faster with automated CI/CD pipelines and intelligent orchestration.'
  },
  {
    id: 2,
    icon: Lock,
    title: 'Enterprise Security',
    description: 'SOC 2 compliance, encryption, and automated threat detection built-in.'
  },
  {
    id: 3,
    icon: Users,
    title: 'Team Collaboration',
    description: 'Intuitive dashboards and workflows your entire team will love.'
  },
  {
    id: 4,
    icon: TrendingUp,
    title: 'Infinite Scalability',
    description: 'Handle millions of deployments with auto-scaling and 99.99% uptime guarantee.'
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-lg text-gray-400">Comprehensive automation solutions for modern teams</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id}
                className="bg-black border border-white/10 hover:border-purple-500/50 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <CardContent className="pt-8">
                  <Icon className="h-8 w-8 text-purple-500 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
