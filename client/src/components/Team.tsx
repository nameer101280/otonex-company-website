import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import founderImage from '@assets/generated_images/professional_developer_headshot_portrait.png';

export function Team() {
  return (
    <section id="team" className="py-24 bg-black border-t border-purple-800/30 relative">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-gradient-to-bl from-purple-800 to-purple-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-4">Our Team</h2>
          <p className="text-gray-400">Experts committed to your success</p>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in-up stagger-1">
          <Card className="overflow-hidden border border-purple-800/40 hover:border-purple-700/70 bg-black/40 hover:bg-gradient-to-br hover:from-purple-900/30 hover:to-black transition-all duration-300">
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
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Nameer Arshad</h3>
                    <p className="text-purple-400 text-sm mt-1">Founder & Lead Engineer</p>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    Full-stack engineer and DevOps specialist with 8+ years building scalable solutions. Based in Brussels, I specialize in cloud infrastructure, automation, and enterprise applications.
                  </p>

                  <div className="space-y-2 pt-4 border-t border-purple-800/30">
                    <h4 className="font-medium text-white text-sm">Expertise</h4>
                    <ul className="space-y-1 text-gray-400 text-sm">
                      <li>Full-stack Web Development (React, Node.js)</li>
                      <li>Cloud Infrastructure (AWS, Azure, GCP)</li>
                      <li>DevOps & Automation (CI/CD, Kubernetes)</li>
                      <li>Mobile App Development (iOS, Android)</li>
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild 
                      className="border-purple-800/40 text-gray-400 hover:text-purple-400 hover:border-purple-700/70"
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
                      className="border-purple-800/40 text-gray-400 hover:text-purple-400 hover:border-purple-700/70"
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
      </div>
    </section>
  );
}
