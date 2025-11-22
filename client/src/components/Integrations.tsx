import { Card, CardContent } from '@/components/ui/card';
import {
  Cloud,
  Database,
  Layers,
  MonitorSmartphone,
  Smartphone,
  TerminalSquare,
  Cpu,
  Settings2,
  GitBranch,
  Boxes,
} from 'lucide-react';

const integrationCategories = [
  {
    category: 'Cloud & Data',
    items: [
      { name: 'AWS', description: 'EC2, S3, Lambda, RDS', icon: Cloud, level: 'Enterprise' },
      { name: 'Azure', description: 'App Service, SQL DB, Functions', icon: Layers, level: 'Enterprise' },
      { name: 'GCP', description: 'Cloud Run, BigQuery, Pub/Sub', icon: Database, level: 'Enterprise' },
    ],
    accent: 'from-cyan-300/30 to-blue-500/20'
  },
  {
    category: 'Frontend',
    items: [
      { name: 'React / Next', description: 'Component-driven web', icon: MonitorSmartphone, level: 'Core' },
      { name: 'React Native', description: 'Mobile with native polish', icon: Smartphone, level: 'Mobile' },
      { name: 'Tailwind', description: 'Design systems at speed', icon: Layers, level: 'Design System' },
    ],
    accent: 'from-fuchsia-300/30 to-cyan-400/20'
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node & TypeScript', description: 'Typed APIs, queues, workers', icon: TerminalSquare, level: 'Core' },
      { name: 'Python', description: 'Services and automation', icon: Cpu, level: 'Automation' },
      { name: 'Postgres', description: 'Relational backbone', icon: Database, level: 'Data' },
    ],
    accent: 'from-emerald-300/30 to-cyan-300/20'
  },
  {
    category: 'DevOps',
    items: [
      { name: 'Docker & K8s', description: 'Container orchestration', icon: Boxes, level: 'Ops' },
      { name: 'GitHub Actions', description: 'CI/CD pipelines', icon: GitBranch, level: 'CI/CD' },
      { name: 'Terraform', description: 'Infrastructure as code', icon: Settings2, level: 'Infra' },
    ],
    accent: 'from-purple-300/30 to-blue-400/20'
  },
];

export function Integrations() {
  return (
    <section id="integrations" className="relative py-14 sm:py-16 overflow-hidden scroll-reveal" data-anim="fade">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-cyan-400/12 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-7 sm:mb-9 space-y-2 scroll-pop">
          <div className="inline-flex items-center gap-2 glass-chip px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] text-slate-200">
            Tech stack
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">Tools we wield expertly</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Modern, proven technologies for cloud, delivery, and product velocity.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 sm:gap-5">
          {integrationCategories.map((category, categoryIdx) => (
            <div
              key={category.category}
              className="glass-card rounded-2xl border border-white/8 p-4 sm:p-5 space-y-3 scroll-pop"
              style={{ ['--delay' as string]: `${categoryIdx * 0.08}s` }}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold text-cyan-200 uppercase tracking-[0.18em]">{category.category}</h3>
                <div className="h-2 w-2 rounded-full bg-cyan-300/70"></div>
              </div>
              <div className="space-y-3">
                {category.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Card
                      key={item.name}
                      className="relative overflow-hidden border border-white/8 rounded-xl bg-gradient-to-br from-white/5 to-transparent hover:border-cyan-200/40 transition-colors duration-200 scroll-pop"
                      style={{ ['--delay' as string]: `${(categoryIdx * 3 + item.name.length) * 0.03}s` }}
                    >
                      <CardContent className="p-4 space-y-3">
                        <div className="flex items-center justify-between gap-3">
                          <div>
                            <h4 className="font-semibold text-white text-sm">{item.name}</h4>
                            <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                          </div>
                          {Icon && (
                            <div className="h-10 w-10 rounded-lg glass-chip border border-white/10 flex items-center justify-center text-cyan-200">
                              <Icon className="h-5 w-5" />
                            </div>
                          )}
                        </div>
                        {item.level && (
                          <span className="inline-flex items-center text-[10px] uppercase tracking-[0.16em] text-cyan-100 glass-chip px-2.5 py-1 border border-white/10 rounded-full">
                            {item.level}
                          </span>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
