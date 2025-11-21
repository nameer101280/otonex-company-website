import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center space-y-10 max-w-4xl mx-auto">
          {/* Bold headline inspired by Xtract */}
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold tracking-tight leading-[1.1] text-black">
              <span className="block">Automate Your</span>
              <span className="block text-primary">DevOps Pipeline.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-normal">
              AI-powered automation for DevOps teams. Scale faster, deploy smarter, and focus on what matters.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 animate-fade-in-up stagger-1">
            <Button onClick={() => scrollToSection('stats')} size="lg" className="rounded-full px-8 py-6 text-base font-medium bg-primary hover:bg-primary/90">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 py-6 text-base font-medium">
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="pt-8 animate-fade-in-up stagger-2">
            <p className="text-sm text-gray-500 mb-4">Trusted by 100+ teams worldwide</p>
            <div className="flex flex-wrap justify-center gap-4">
              {['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker', 'GitLab'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gray-50 text-gray-700 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('stats')}
            className="text-gray-400 hover:text-gray-600 transition-all duration-300 animate-bounce"
            data-testid="button-scroll-indicator"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
