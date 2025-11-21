import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'Services', href: 'specialties' },
    { label: 'Solutions', href: 'services' },
    { label: 'Team', href: 'team' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur border-b border-cyan-500/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            data-testid="link-logo"
          >
            AUTONEX
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-white/80 hover:text-cyan-400 transition-colors text-sm font-medium"
                data-testid={`link-${link.href}`}
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:opacity-90 text-white rounded-md px-6 py-2"
              data-testid="button-cta-book"
            >
              Get Started
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-menu-toggle"
              className="text-white"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="w-full text-left px-4 py-2 text-white/80 hover:text-cyan-400 transition-colors text-sm font-medium"
                data-testid={`link-mobile-${link.href}`}
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 py-2">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-md"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
