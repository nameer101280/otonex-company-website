import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHidden, setIsHidden] = useState(false);
  const ticking = useRef(false);
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY || window.pageYOffset;
        setIsScrolled(scrollY > 50);

        const doc = document.documentElement;
        const docHeight = Math.max(doc.scrollHeight - window.innerHeight, 1);
        const progress = (scrollY / docHeight) * 100;
        setScrollProgress(progress);

        if (scrollY > lastY.current + 10) {
          setIsHidden(true);
        } else if (scrollY < lastY.current - 10) {
          setIsHidden(false);
        }
        lastY.current = scrollY;

        ticking.current = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollWithOffset = (target: HTMLElement) => {
    const navHeight = 88; // avoid nav covering scrolled target
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      scrollWithOffset(element);
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', href: 'hero' },
    { label: 'Services', href: 'specialties' },
    { label: 'Delivery', href: 'services' },
    { label: 'Tech', href: 'integrations' },
    { label: 'Projects', href: 'projects' },
  ];

  return (
    <nav className={`fixed inset-x-0 bottom-6 z-50 flex justify-center transition-transform duration-300 ${isHidden ? 'translate-y-24' : 'translate-y-0'}`}>
      <div className="glass-card border border-white/10 rounded-full px-4 sm:px-5 py-3 flex items-center gap-4 shadow-[0_18px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="hidden sm:flex items-center gap-5">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="text-sm font-medium text-slate-200 hover:text-white transition-colors duration-200"
              data-testid={`link-${link.href}`}
            >
              {link.label}
            </button>
          ))}
        </div>
        <div className="sm:hidden">
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

      {isMobileMenuOpen && (
        <div className="absolute -top-2 left-4 right-4 px-2">
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
    </nav>
  );
}
