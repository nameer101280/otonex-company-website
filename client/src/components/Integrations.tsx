import { Card, CardContent } from '@/components/ui/card';

const integrationCategories = [
  {
    category: 'Cloud & Data',
    items: [
      { name: 'AWS', description: 'EC2, S3, Lambda, RDS' },
      { name: 'Azure', description: 'App Service, SQL DB, Functions' },
      { name: 'GCP', description: 'Cloud Run, BigQuery, Pub/Sub' },
    ]
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React / Next', description: 'Component-driven web' },
      { name: 'React Native', description: 'Mobile with native polish' },
      { name: 'Tailwind', description: 'Design systems at speed' },
    ]
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node & TypeScript', description: 'Typed APIs, queues, workers' },
      { name: 'Python', description: 'Services and automation' },
      { name: 'Postgres', description: 'Relational backbone' },
    ]
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Docker & K8s', description: 'Container orchestration' },
      { name: 'GitHub Actions', description: 'CI/CD pipelines' },
      { name: 'Terraform', description: 'Infrastructure as code' },
    ]
  },
];

export function Integrations() {
  return (
    <section id="integrations" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-cyan-400/18 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-14 space-y-3 scroll-reveal">
          <div className="inline-flex items-center gap-2 glass-chip px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] text-slate-200">
            Tech stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">Tools we wield expertly</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Modern, proven technologies that balance velocity with stability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {integrationCategories.map((category, categoryIdx) => (
            <div key={category.category} className="space-y-4 scroll-reveal" style={{ ['--delay' as string]: `${categoryIdx * 0.08}s` }}>
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold text-cyan-200 uppercase tracking-[0.16em]">{category.category}</h3>
                <div className="h-2 w-2 rounded-full bg-cyan-300/70"></div>
              </div>
              
              <div className="space-y-3">
                {category.items.map((item, itemIdx) => (
                  <Card 
                    key={item.name}
                    className="glass-card rounded-2xl border border-white/10 hover:border-cyan-200/40 transition-all duration-300 scroll-reveal"
                    style={{ ['--delay' as string]: `${(categoryIdx * 3 + itemIdx) * 0.05 + 0.12}s` }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                          <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                        </div>
                        <div className="h-1.5 w-1.5 rounded-full bg-white/30 mt-1 flex-shrink-0"></div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
