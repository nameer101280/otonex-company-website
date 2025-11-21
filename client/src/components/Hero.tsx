import { Button } from '@/components/ui/button';
import { ChevronDown, Zap } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-black">
      {/* Gradient backgrounds with cyan and purple */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center space-y-10 max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full">
              <Zap className="h-4 w-4 text-cyan-400" />
              <span className="text-sm text-cyan-400 font-semibold">Next Generation Automation</span>
            </div>
            
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight">
              <span className="text-white">Enterprise Solutions </span>
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent">Reimagined.</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-normal">
              DevOps, Cloud, Web Apps, ERP Systems, and Mobile Applications—all seamlessly integrated with intelligent automation to accelerate your business transformation.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 animate-fade-in-up stagger-1">
            <Button 
              onClick={() => scrollToSection('specialties')}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 text-white rounded-md px-8 py-6 text-base font-medium"
              data-testid="button-cta-explore"
            >
              Explore Solutions
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-md px-8 py-6 text-base font-medium"
              data-testid="button-cta-contact"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicator */}
          <div className="pt-8 animate-fade-in-up stagger-2">
            <p className="text-sm text-gray-500 mb-4">Trusted by 50+ enterprises globally</p>
            <div className="flex flex-wrap justify-center gap-3">
              {['AWS', 'Azure', 'GCP', 'Kubernetes', 'Docker', 'SAP'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 text-gray-400 rounded-full text-xs font-medium hover:border-cyan-500/50 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('specialties')}
            className="text-gray-500 hover:text-cyan-400 transition-colors animate-bounce"
            data-testid="button-scroll-indicator"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
