import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Server, Code, GitBranch, Cloud, Database, Shield, Zap, Layers } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: GitBranch,
    title: 'DevOps Automation',
    description: 'Streamline your development workflow with automated CI/CD pipelines, reducing deployment time by up to 40% while ensuring consistent, reliable releases.',
    features: ['GitLab/GitHub CI/CD', 'Docker & Kubernetes', 'Infrastructure as Code', 'Automated Testing'],
    highlight: 'Reduce deployment time by 40%',
  },
  {
    id: 2,
    icon: Code,
    title: 'Full-Stack Development',
    description: 'End-to-end web application development using modern frameworks and best practices, delivering scalable solutions that grow with your business.',
    features: ['React & Node.js', 'PostgreSQL & MongoDB', 'RESTful APIs', 'Responsive Design'],
    highlight: 'Modern, scalable applications',
  },
  {
    id: 3,
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Design and deploy robust cloud solutions on AWS, ensuring 99.8% uptime with automated monitoring, security patching, and disaster recovery.',
    features: ['AWS Deployment', 'Load Balancing', 'Auto-scaling', 'Backup & Recovery'],
    highlight: '99.8% uptime guarantee',
  },
  {
    id: 4,
    icon: Server,
    title: 'Linux Administration',
    description: 'Expert Linux server management with security hardening, regular updates, and performance optimization to keep your systems running smoothly.',
    features: ['System Security', 'Performance Tuning', 'Network Configuration', 'Monitoring & Alerts'],
    highlight: 'Enhanced system reliability',
  },
  {
    id: 5,
    icon: Database,
    title: 'Database Optimization',
    description: 'Optimize your database performance with expert tuning, indexing strategies, and query optimization, improving response times by up to 25%.',
    features: ['PostgreSQL Tuning', 'Query Optimization', 'Data Migration', 'Backup Strategies'],
    highlight: '25% performance improvement',
  },
  {
    id: 6,
    icon: Layers,
    title: 'System Integration',
    description: 'Seamlessly integrate your tools and platforms with custom APIs, webhooks, and automation workflows that connect your entire tech stack.',
    features: ['API Development', 'Third-party Integration', 'Workflow Automation', 'Data Synchronization'],
    highlight: 'Unified tech ecosystem',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive DevOps and development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className="group hover-elevate transition-all duration-300"
                data-testid={`card-service-${service.id}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {service.highlight}
                    </Badge>
                  </div>
                  <CardTitle className="font-display text-2xl">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                        data-testid={`feature-${service.id}-${idx}`}
                      >
                        <span className="text-primary">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-4" data-testid={`button-learn-more-${service.id}`}>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
