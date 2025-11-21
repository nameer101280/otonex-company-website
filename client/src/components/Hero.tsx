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
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-tight text-foreground">
              Cloud-native solutions{' '}
              <span className="text-primary">
                for modern teams.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-normal">
              DevOps automation, full-stack development, and AI-powered infrastructure that scales with your ambition.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2.5 animate-fade-in-up stagger-1">
            <span className="px-3.5 py-1.5 bg-muted text-foreground/80 rounded-full text-sm hover:scale-105 transition-transform duration-300">
              DevOps
            </span>
            <span className="px-3.5 py-1.5 bg-muted text-foreground/80 rounded-full text-sm hover:scale-105 transition-transform duration-300">
              CI/CD
            </span>
            <span className="px-3.5 py-1.5 bg-muted text-foreground/80 rounded-full text-sm hover:scale-105 transition-transform duration-300">
              Full-Stack
            </span>
            <span className="px-3.5 py-1.5 bg-muted text-foreground/80 rounded-full text-sm hover:scale-105 transition-transform duration-300">
              AI Integration
            </span>
            <span className="px-3.5 py-1.5 bg-muted text-foreground/80 rounded-full text-sm hover:scale-105 transition-transform duration-300">
              Cloud
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 pt-2 animate-fade-in-up stagger-2">
            <Button onClick={scrollToServices} size="lg" data-testid="button-view-services" className="rounded-full px-8 font-medium hover:scale-105 transition-all duration-300">
              Explore Services
            </Button>
            <Button variant="outline" size="lg" asChild data-testid="button-contact" className="rounded-full px-8 font-medium hover:scale-105 transition-all duration-300">
              <a href="#contact">Schedule Demo</a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto border-t border-border/50 mt-16 animate-fade-in-up stagger-3">
            <div className="text-center pt-8 group hover:scale-110 transition-transform duration-300 cursor-default">
              <div className="text-3xl font-bold mb-1.5 group-hover:text-primary transition-colors" data-testid="stat-experience">8+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center pt-8 group hover:scale-110 transition-transform duration-300 cursor-default">
              <div className="text-3xl font-bold mb-1.5 group-hover:text-primary transition-colors" data-testid="stat-projects">50+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center pt-8 group hover:scale-110 transition-transform duration-300 cursor-default">
              <div className="text-3xl font-bold mb-1.5 group-hover:text-primary transition-colors" data-testid="stat-uptime">99.8%</div>
              <div className="text-sm text-muted-foreground">System Uptime</div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToServices}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 animate-pulse"
            data-testid="button-scroll-indicator"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
