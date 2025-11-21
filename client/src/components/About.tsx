import { Card, CardContent } from '@/components/ui/card';
import aboutImage from '@assets/generated_images/developer_casual_workspace_scene.png';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-muted/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">About Me</h2>
          <p className="text-lg text-muted-foreground">
            Passionate developer with a love for creating impactful digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={aboutImage}
              alt="Workspace"
              className="rounded-2xl w-full h-auto object-cover shadow-lg"
              data-testid="img-about"
            />
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed">
                I'm a full-stack developer with over 8 years of experience building web applications 
                that combine beautiful design with robust functionality. My journey in tech started 
                with a curiosity about how websites work, and has evolved into a career focused on 
                creating seamless user experiences.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                I believe in writing clean, maintainable code and staying up-to-date with the latest 
                technologies. When I'm not coding, you'll find me contributing to open-source projects, 
                writing technical articles, or exploring new design trends.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                My approach combines technical expertise with a strong design sensibility, ensuring 
                that every project I work on is not only functional but also delightful to use.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-6">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1" data-testid="stat-years">8+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1" data-testid="stat-projects">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-1" data-testid="stat-clients">30+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
