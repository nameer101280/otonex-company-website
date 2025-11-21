import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
