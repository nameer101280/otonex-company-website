import { Button } from '@/components/ui/button';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import heroImage from '@assets/generated_images/professional_developer_headshot_portrait.png';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Alex Chen
                </span>
              </h1>
              <p className="text-2xl sm:text-3xl text-muted-foreground font-medium">
                Full-Stack Developer & Designer
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-lg text-foreground/80">
                I craft beautiful, user-centric digital experiences with clean code and thoughtful design.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                  React & TypeScript
                </span>
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                  UI/UX Design
                </span>
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-medium">
                  System Architecture
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button onClick={scrollToProjects} size="lg" data-testid="button-view-projects">
                View My Work
              </Button>
              <Button variant="outline" size="lg" asChild data-testid="button-contact">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex gap-3 pt-2">
              <Button variant="ghost" size="icon" asChild data-testid="link-github">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="link-linkedin">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild data-testid="link-email">
                <a href="mailto:alex@example.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3"></div>
              <img
                src={heroImage}
                alt="Professional portrait"
                className="relative rounded-2xl w-full h-auto object-cover shadow-2xl"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToProjects}
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="button-scroll-indicator"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  );
}
