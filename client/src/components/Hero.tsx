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
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-6">
            <p className="text-sm text-gray-500 animate-fade-in-up">Enterprise automation platform</p>
            
            <h1 className="text-6xl sm:text-7xl font-light tracking-tight leading-tight text-white animate-fade-in-up stagger-1">
              Enterprise Solutions Reimagined.
            </h1>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto animate-fade-in-up stagger-2">
              DevOps, Cloud, Web Development, ERP Systems, and Mobile Applications—seamlessly integrated with intelligent automation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-6 animate-fade-in-up stagger-3">
            <Button 
              onClick={() => scrollToSection('specialties')}
              className="bg-white text-black hover:bg-gray-200 transition-colors duration-200 rounded-sm px-8 py-2.5 text-sm font-medium"
              data-testid="button-cta-explore"
            >
              Explore Services
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border border-gray-600 text-white hover:bg-white/5 transition-colors duration-200 rounded-sm px-8 py-2.5 text-sm font-medium"
              data-testid="button-cta-contact"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="pt-8 animate-fade-in-up stagger-4">
            <p className="text-xs text-gray-600 mb-4">Trusted by 50+ enterprises</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'SAP'].map((tech, i) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 text-gray-600 text-xs border border-gray-800 hover:border-gray-600 transition-colors duration-200 rounded-sm animate-fade-in-up"
                  style={{ animationDelay: `${(i * 0.05) + 0.4}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in-up stagger-5">
          <button
            onClick={() => scrollToSection('specialties')}
            className="text-gray-600 hover:text-gray-400 transition-colors duration-200 animate-bounce"
            data-testid="button-scroll-indicator"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
