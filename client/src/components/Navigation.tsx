import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 relative ${
        isScrolled
          ? 'bg-[#050915]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)]'
          : 'bg-gradient-to-b from-[#050915]/80 to-transparent backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-3 group"
            data-testid="link-logo"
          >
            <span className="brand-logo group-hover:opacity-80 transition-opacity duration-200">AUTONEX</span>
            <span className="hidden sm:inline-flex items-center text-[10px] uppercase tracking-[0.18em] text-slate-300/80 px-3 py-1 rounded-full glass-chip">
              Product Studio
            </span>
          </button>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="relative text-sm font-medium text-slate-300 hover:text-white transition-colors duration-200 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-cyan-400 after:to-fuchsia-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
                data-testid={`link-${link.href}`}
              >
                {link.label}
              </button>
            ))}

            <Button 
              onClick={() => scrollToSection('contact')}
              className="rounded-full px-5 py-2.5 bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-400 text-slate-950 font-semibold shadow-[0_12px_30px_rgba(43,209,252,0.35)] hover:shadow-[0_16px_40px_rgba(43,209,252,0.45)] transition-all duration-200"
              data-testid="button-cta-book"
            >
              Start a project
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
        <div className="md:hidden px-4 pb-3">
          <div className="glass-card border border-white/10 rounded-2xl overflow-hidden">
            <div className="py-2 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="w-full text-left px-4 py-2 text-slate-200 hover:text-white transition-colors duration-200 text-sm font-medium"
                  data-testid={`link-mobile-${link.href}`}
                >
                  {link.label}
                </button>
              ))}
              <div className="px-4 py-2">
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-400 text-slate-950 font-semibold transition-all duration-200"
                >
                  Start a project
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute left-0 right-0 bottom-0 h-[2px] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-400 transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
}
