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
      {/* Background gradient effects - subtle */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-b from-purple-800 to-purple-900 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gradient-to-t from-purple-900 to-purple-800 rounded-full mix-blend-multiply filter blur-3xl" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-left space-y-6">
          <div className="animate-fade-in-up">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              <span className="text-white">We Build Solutions That</span>
              <br />
              <span className="brand-logo block mt-3 animate-pulse-glow">
                Scale Your Revenue
              </span>
            </h1>
          </div>
          
          <p className="text-lg text-gray-400 max-w-2xl animate-fade-in-up stagger-1 font-normal leading-relaxed">
            Not just code. Custom applications, mobile solutions, and intelligent automation designed to convert customers and accelerate growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up stagger-2">
            <Button 
              onClick={() => scrollToSection('specialties')}
              className="bg-gradient-to-r from-purple-700 to-purple-900 hover:from-purple-600 hover:to-purple-800 text-white transition-all duration-300 rounded-sm px-8 py-3 text-sm font-medium w-fit"
              data-testid="button-cta-book"
            >
              Book an Intro Call
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border border-purple-700/50 text-purple-300 hover:bg-purple-900/20 transition-all duration-300 rounded-sm px-8 py-3 text-sm font-medium w-fit"
              data-testid="button-cta-portfolio"
            >
              View Our Work
            </Button>
          </div>

          <p className="text-sm text-gray-600 pt-8 animate-fade-in-up stagger-3 font-normal">
            Trusted by 50+ ambitious founders
          </p>
        </div>

        <div className="absolute bottom-8 left-4 animate-fade-in-up stagger-4">
          <button
            onClick={() => scrollToSection('specialties')}
            className="text-purple-700/70 hover:text-purple-600 transition-colors duration-300 animate-bounce"
            data-testid="button-scroll-indicator"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
