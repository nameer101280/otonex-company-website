import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Server, Code, GitBranch, Cloud, Database, Sparkles, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    icon: GitBranch,
    title: 'DevOps Automation',
    description: 'Streamline your development workflow with automated CI/CD pipelines, reducing deployment time by up to 40% while ensuring consistent, reliable releases.',
    features: ['GitLab/GitHub CI/CD', 'Docker & Kubernetes', 'Infrastructure as Code', 'Automated Testing'],
    highlight: '40% faster deployments',
  },
  {
    id: 2,
    icon: Code,
    title: 'Full-Stack Development',
    description: 'End-to-end web application development using modern frameworks and best practices, delivering scalable solutions that grow with your business.',
    features: ['React & Node.js', 'PostgreSQL & MongoDB', 'RESTful APIs', 'Responsive Design'],
    highlight: 'Production-ready apps',
  },
  {
    id: 3,
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'Design and deploy robust cloud solutions on AWS, ensuring 99.8% uptime with automated monitoring, security patching, and disaster recovery.',
    features: ['AWS Deployment', 'Load Balancing', 'Auto-scaling', 'Backup & Recovery'],
    highlight: '99.8% uptime',
  },
  {
    id: 4,
    icon: Sparkles,
    title: 'AI Integration',
    description: 'Integrate cutting-edge AI capabilities into your applications with LLM APIs, ML models, and intelligent automation to enhance user experiences.',
    features: ['OpenAI/LLM Integration', 'AI Model Training', 'Prompt Engineering', 'Data Analysis & Insights'],
    highlight: 'AI-powered solutions',
  },
  {
    id: 5,
    icon: Database,
    title: 'Database Optimization',
    description: 'Optimize your database performance with expert tuning, indexing strategies, and query optimization, improving response times by up to 25%.',
    features: ['PostgreSQL Tuning', 'Query Optimization', 'Data Migration', 'Backup Strategies'],
    highlight: '25% faster queries',
  },
  {
    id: 6,
    icon: Server,
    title: 'Web Design',
    description: 'Create beautiful, user-friendly websites that convert visitors into customers with modern design principles and responsive layouts.',
    features: ['UI/UX Design', 'Responsive Layouts', 'Brand Identity', 'Performance Optimization'],
    highlight: 'Modern, clean design',
  },
];

const caseStudies = [
  {
    id: 1,
    company: 'TechStartup Inc',
    metric: '60% faster',
    description: 'Deployment time reduction with CI/CD automation',
    fullDescription: 'Implemented automated CI/CD pipelines using GitLab, reducing deployment time from 2 hours to 40 minutes.',
  },
  {
    id: 2,
    company: 'FinanceCore Solutions',
    metric: '99.9%',
    description: 'Uptime achieved with cloud infrastructure',
    fullDescription: 'Deployed highly available AWS infrastructure with auto-scaling and multi-region failover.',
  },
  {
    id: 3,
    company: 'DataDriven Analytics',
    metric: '3x faster',
    description: 'Query performance improvement',
    fullDescription: 'Optimized PostgreSQL database with advanced indexing and query tuning strategies.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed for modern teams
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.id}
                className={`group hover-elevate transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in-up stagger-${service.id % 5}`}
                data-testid={`card-service-${service.id}`}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs font-semibold whitespace-nowrap bg-primary/10 text-primary hover:bg-primary/20">
                      {service.highlight}
                    </Badge>
                  </div>
                  <div className="space-y-2">
                    <CardTitle className="text-xl font-bold tracking-tight">{service.title}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground">{service.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                        data-testid={`feature-${service.id}-${idx}`}
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0 group-hover:bg-primary transition-colors" />
                        <span>{feature}</span>
                      </div>
                    ))}
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

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 sm:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 tracking-tight">
            Trusted by innovative companies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from companies that transformed their infrastructure with CloudForge
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Card
              key={study.id}
              className={`border-border/50 hover-elevate transition-all duration-300 animate-fade-in-up stagger-${study.id}`}
            >
              <CardHeader className="space-y-4">
                <div className="space-y-2">
                  <div className="text-3xl sm:text-4xl font-bold text-primary">{study.metric}</div>
                  <CardDescription className="text-sm">{study.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-sm text-foreground/70">{study.fullDescription}</p>
                <div className="pt-4 border-t border-border/30">
                  <p className="font-semibold text-sm mb-3">{study.company}</p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-primary hover:text-primary/80">
                    Read case study <ArrowRight className="h-3 w-3 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
