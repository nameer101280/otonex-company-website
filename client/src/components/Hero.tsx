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
      {/* Background gradient effects */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            <p className="text-sm text-gray-400 animate-fade-in-up font-light">Enterprise solutions built with precision</p>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light tracking-tight leading-tight text-white animate-fade-in-up stagger-1">
              Transform Your <span className="text-purple-400 font-semibold">Ideas</span> into Reality
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto animate-fade-in-up stagger-2 font-light">
              Web applications, mobile apps, and intelligent automation. We build scalable solutions that drive your business forward.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6 animate-fade-in-up stagger-3">
            <Button 
              onClick={() => scrollToSection('specialties')}
              className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 rounded-sm px-8 py-3 text-sm font-medium shadow-lg hover:shadow-purple-600/50"
              data-testid="button-cta-explore"
            >
              Explore Services
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border border-purple-600/50 text-purple-400 hover:bg-purple-600/10 transition-all duration-300 rounded-sm px-8 py-3 text-sm font-medium"
              data-testid="button-cta-contact"
            >
              Schedule Demo
            </Button>
          </div>

          <div className="pt-8 animate-fade-in-up stagger-4">
            <p className="text-xs text-gray-600 mb-4">Trusted by leading enterprises</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['AWS', 'Azure', 'React', 'Node.js', 'Kubernetes', 'PostgreSQL'].map((tech, i) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 text-gray-500 text-xs border border-purple-600/30 hover:border-purple-600/70 transition-colors duration-300 rounded-sm font-medium animate-fade-in-up"
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
            className="text-purple-600/70 hover:text-purple-500 transition-colors duration-300 animate-bounce"
            data-testid="button-scroll-indicator"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
