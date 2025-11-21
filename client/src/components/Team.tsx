import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import founderImage from '@assets/generated_images/professional_developer_headshot_portrait.png';

export function Team() {
  return (
    <section id="team" className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-4">Our Team</h2>
          <p className="text-gray-500">Technology experts committed to your success</p>
        </div>

        <div className="max-w-2xl mx-auto animate-fade-in-up">
          <Card className="overflow-hidden border border-gray-800 bg-transparent">
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
                    <h3 className="text-2xl font-medium text-white">Nameer Arshad</h3>
                    <p className="text-gray-500 text-sm mt-1">Founder & Lead Engineer</p>
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed">
                    DevOps and full-stack engineer with 8+ years experience. Specializes in cloud infrastructure, automation, and enterprise solutions. Based in Brussels, Belgium.
                  </p>

                  <div className="space-y-2 pt-4 border-t border-gray-800">
                    <h4 className="font-medium text-white text-sm">Key Achievements</h4>
                    <ul className="space-y-1 text-gray-500 text-sm">
                      <li>30% improvement in operational efficiency</li>
                      <li>40% reduction in deployment time</li>
                      <li>99.8% system uptime maintained</li>
                      <li>20+ enterprise projects delivered</li>
                    </ul>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      asChild 
                      className="border-gray-800 text-gray-400 hover:text-white hover:border-gray-700"
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
                      className="border-gray-800 text-gray-400 hover:text-white hover:border-gray-700"
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
