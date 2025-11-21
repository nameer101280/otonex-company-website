import { Card, CardContent } from '@/components/ui/card';
import { Zap, Shield, Users, TrendingUp } from 'lucide-react';

export function Values() {
  const values = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Deploy 10x faster with automated CI/CD pipelines and intelligent orchestration.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Enterprise-grade security with compliance, encryption, and automated threat detection.'
    },
    {
      icon: Users,
      title: 'Team Friendly',
      description: 'Intuitive dashboards and collaboration tools your entire team will love.'
    },
    {
      icon: TrendingUp,
      title: 'Scale Infinitely',
      description: 'Handle millions of deployments with auto-scaling infrastructure and reliability.'
    },
  ];

  return (
    <section id="values" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-black mb-4">Why Choose Otonex</h2>
          <p className="text-xl text-gray-600">The platform built for modern DevOps teams</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <Card key={i} className="border-0 bg-gray-50 hover:bg-gray-100 transition-colors animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <CardContent className="pt-8">
                  <div className="mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-black mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
