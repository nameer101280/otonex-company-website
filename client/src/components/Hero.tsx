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
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="text-center space-y-10 max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-sm text-purple-400 font-semibold tracking-wide uppercase">About Us</p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight text-white">
              Helping Businesses Grow
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-normal">
              Otonex helps businesses streamline operations and grow faster with AI-powered automation.
            </p>
          </div>

          <div className="pt-8 animate-fade-in-up stagger-1">
            <p className="text-sm text-gray-400 mb-6">Over 50+ businesses trust us</p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {['AWS', 'Google Cloud', 'Azure', 'Kubernetes', 'Docker', 'GitLab'].map((company) => (
                <div key={company} className="text-gray-500 font-semibold text-sm">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('stats')}
            className="text-gray-500 hover:text-gray-300 transition-colors animate-bounce"
            data-testid="button-scroll-indicator"
          >
            <ChevronDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
