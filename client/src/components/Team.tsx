import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail } from 'lucide-react';
import founderImage from '@assets/generated_images/professional_developer_headshot_portrait.png';

export function Team() {
  return (
    <section id="team" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">Meet the Minds Behind <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Autonex</span></h2>
          <p className="text-lg text-gray-400">
            Technology and strategy experts dedicated to your success
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <Card className="overflow-hidden border border-white/10 bg-black">
            <div className="grid md:grid-cols-2">
              <div className="relative h-full min-h-[400px]">
                <img
                  src={founderImage}
                  alt="Nameer Arshad"
                  className="absolute inset-0 w-full h-full object-cover"
                  data-testid="img-founder"
                />
              </div>
              <div>
                <CardHeader>
                  <CardTitle className="font-display text-3xl">Nameer Arshad</CardTitle>
                  <CardDescription className="text-lg">Founder & Lead Engineer</CardDescription>
                  <div className="flex gap-2 mt-3">
                    <Badge variant="secondary">DevOps Expert</Badge>
                    <Badge variant="secondary">Full-Stack Dev</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-foreground/80">
                    IT and Python Engineer with extensive experience in web development, cloud 
                    infrastructure, and automation. Currently working at ENTSO-E, specializing in 
                    React, JavaScript, PostgreSQL, and CI/CD optimization.
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Key Achievements:</h4>
                    <ul className="space-y-2 text-sm text-foreground/80">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Improved operational efficiency by 30% through IT automation</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Reduced deployment time by 40% with GitLab CI/CD pipelines</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Enhanced system uptime to 99.8% through proactive monitoring</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Led delivery of 20+ web and mobile development projects</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Education:</h4>
                    <p className="text-sm text-foreground/80">
                      Master's in AI & Machine Learning - UBI Business School, Belgium
                    </p>
                    <p className="text-sm text-foreground/80">
                      B.Sc. Computer Science - Iqra University, Pakistan
                    </p>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" asChild data-testid="link-founder-linkedin">
                      <a href="https://linkedin.com/in/nameer-arshad-13a5b620b" target="_blank" rel="noopener noreferrer" className="gap-2">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild data-testid="link-founder-email">
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

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Based in Brussels, Belgium • Serving clients across Europe and beyond
          </p>
        </div>
      </div>
    </section>
  );
}
