import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Users } from 'lucide-react';
import aboutImage from '@assets/generated_images/developer_casual_workspace_scene.png';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-muted/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display tracking-tight">About Autonex</h2>
          <p className="text-lg text-muted-foreground">
            Your trusted partner in modern DevOps and cloud transformation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={aboutImage}
              alt="Autonex workspace"
              className="rounded-2xl w-full h-auto object-cover shadow-lg"
              data-testid="img-about"
            />
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed">
                Autonex specializes in DevOps automation, full-stack development, and 
                cloud infrastructure solutions. We help businesses modernize their IT operations, 
                streamline deployment processes, and build scalable applications that drive growth.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                With expertise spanning GitLab CI/CD, Docker, Kubernetes, AWS, and modern web frameworks 
                like React and Node.js, we deliver end-to-end solutions that improve operational efficiency 
                by up to 30% while maintaining 99.8% system uptime.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                Our approach combines technical excellence with a deep understanding of business needs, 
                ensuring that every solution we deliver is not just technically sound, but also aligned 
                with your strategic objectives.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="text-center border-border/50 scroll-reveal" style={{ ['--delay' as string]: '0.05s' }}>
            <CardContent className="pt-10 pb-10">
              <div className="flex justify-center mb-5">
                <div className="p-2.5 bg-primary/5 rounded-lg group hover:bg-primary/10 transition-colors">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2.5 tracking-tight">Our Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Empower businesses with cutting-edge DevOps practices and cloud-native solutions that accelerate innovation.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 scroll-reveal" style={{ ['--delay' as string]: '0.1s' }}>
            <CardContent className="pt-10 pb-10">
              <div className="flex justify-center mb-5">
                <div className="p-2.5 bg-primary/5 rounded-lg group hover:bg-primary/10 transition-colors">
                  <Award className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2.5 tracking-tight">Our Expertise</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deep technical knowledge in DevOps automation, cloud infrastructure, and full-stack development.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-border/50 scroll-reveal" style={{ ['--delay' as string]: '0.15s' }}>
            <CardContent className="pt-10 pb-10">
              <div className="flex justify-center mb-5">
                <div className="p-2.5 bg-primary/5 rounded-lg group hover:bg-primary/10 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2.5 tracking-tight">Our Approach</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Client-focused solutions with agile methodologies, ensuring timely delivery and measurable results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
