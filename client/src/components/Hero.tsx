import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              Building Tomorrow's{' '}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Digital Infrastructure
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium max-w-3xl mx-auto">
              Expert DevOps automation, full-stack development, and cloud solutions that scale with your business.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
              DevOps Automation
            </span>
            <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
              CI/CD Pipelines
            </span>
            <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
              Full-Stack Development
            </span>
            <span className="px-4 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium">
              Cloud Infrastructure
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-6">
            <Button onClick={scrollToServices} size="lg" data-testid="button-view-services">
              Explore Our Services
            </Button>
            <Button variant="outline" size="lg" asChild data-testid="button-contact">
              <a href="#contact">Start Your Project</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="stat-experience">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="stat-projects">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2" data-testid="stat-uptime">99.8%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={scrollToServices}
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
