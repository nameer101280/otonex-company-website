import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import founderImage from '@assets/generated_images/professional_developer_headshot_portrait.png';

export function Team() {
  const tags = ['Full-stack', 'Cloud & SRE', 'Automation', 'Product leadership'];

  return (
    <section id="team" className="relative py-20 sm:py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-10 w-72 h-72 bg-cyan-300/16 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 glass-chip px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] text-slate-200">
            Meet the founder
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">Your embedded partner</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            A hands-on lead who pairs product thinking with deep engineering and DevOps expertise.
          </p>
        </div>

        <Card className="glass-card rounded-3xl overflow-hidden shadow-lg scroll-reveal">
          <div className="grid md:grid-cols-[1fr,1.2fr]">
            <div className="relative h-full min-h-[280px] sm:min-h-[420px] overflow-hidden">
              <img
                src={founderImage}
                alt="Nameer Arshad"
                className="absolute inset-0 w-full h-full object-cover"
                data-testid="img-founder"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050915] via-transparent to-transparent"></div>
            </div>
            <div>
              <CardContent className="p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">Nameer Arshad</h3>
                    <p className="text-cyan-200 text-sm mt-1">Founder & Lead Engineer</p>
                  </div>
                  <span className="glass-chip rounded-full px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-emerald-200 border border-white/10">
                    Brussels · CET
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed">
                  Full-stack engineer and DevOps specialist with 8+ years building scalable solutions. I partner with founders and teams to deliver products that are beautiful on the surface and resilient underneath.
                </p>

                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="glass-chip rounded-full px-3 py-1 text-xs text-slate-100 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-2 pt-4 border-t border-white/10">
                  <h4 className="font-semibold text-white text-sm">Expertise</h4>
                  <ul className="space-y-1 text-slate-300 text-sm">
                    <li>Full-stack web (React, Node, TypeScript)</li>
                    <li>Cloud infrastructure (AWS, Azure, GCP) with observability</li>
                    <li>DevOps & automation (CI/CD, Kubernetes, feature flags)</li>
                    <li>Mobile development (React Native, native patterns)</li>
                  </ul>
                </div>

                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild 
                    className="rounded-full glass-chip border border-white/20 text-slate-100 hover:text-white hover:border-white/40"
                    data-testid="link-founder-linkedin"
                  >
                    <a href="https://linkedin.com/in/nameer-arshad-13a5b620b" target="_blank" rel="noopener noreferrer" className="gap-2">
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    asChild 
                    className="rounded-full glass-chip border border-white/20 text-slate-100 hover:text-white hover:border-white/40"
                    data-testid="link-founder-email"
                  >
                    <a href="mailto:nameerarshad@hotmail.com" className="gap-2">
                      <Mail className="h-4 w-4" />
                      Contact
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
