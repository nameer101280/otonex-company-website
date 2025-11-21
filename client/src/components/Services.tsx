import { Card, CardContent } from '@/components/ui/card';
import { Zap, Lock, Users, TrendingUp } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: Zap,
    title: 'Fast Delivery',
    description: 'Rapid development cycles without compromising quality or design.'
  },
  {
    id: 2,
    icon: Lock,
    title: 'Security First',
    description: 'Enterprise-grade security and compliance built into every project.'
  },
  {
    id: 3,
    icon: Users,
    title: 'Team Collaboration',
    description: 'Regular updates and collaboration throughout your project lifecycle.'
  },
  {
    id: 4,
    icon: TrendingUp,
    title: 'Scalable Design',
    description: 'Solutions built to grow with your business and user base.'
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-black border-t border-purple-800/30 relative">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-800 to-purple-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-6 animate-fade-in-up">Why Choose Us</h2>
          <p className="text-gray-400 text-lg animate-fade-in-up stagger-1">Excellence in every project we deliver</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id}
                className="bg-black/40 border border-purple-800/40 hover:border-purple-700/70 transition-all duration-300 group hover:bg-gradient-to-br hover:from-purple-900/30 hover:to-black animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <CardContent className="p-6 relative">
                  <Icon className="h-7 w-7 text-purple-500 mb-4 group-hover:text-purple-400 transition-colors duration-200" />
                  <h3 className="text-base font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
