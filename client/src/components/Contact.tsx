import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowUp, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactOptions = [
    {
      icon: Mail,
      label: 'Email',
      value: 'nameerarshad@hotmail.com',
      href: 'mailto:nameerarshad@hotmail.com',
      testId: 'link-email-primary',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+32 465 41 06 98',
      href: 'tel:+32465410698',
      testId: 'link-phone',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Brussels, Belgium',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect with us',
      href: 'https://linkedin.com/in/nameer-arshad-13a5b620b',
      testId: 'link-social-linkedin',
    },
  ];

  return (
    <section id="contact" className="relative py-14 sm:py-16 overflow-hidden scroll-reveal" data-anim="fade">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-72 h-72 bg-fuchsia-400/18 blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-14 space-y-3 scroll-reveal">
          <div className="inline-flex items-center gap-2 glass-chip px-4 py-2 rounded-full text-xs uppercase tracking-[0.14em] text-slate-200">
            Let’s build together
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight">Ready for a launch-worthy build?</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Tell us about the product, the outcomes you need, and the timeline. We’ll come back with a crisp plan.
          </p>
        </div>

        <Card className="glass-card rounded-3xl border border-white/10 mb-6 sm:mb-8 scroll-reveal" style={{ ['--delay' as string]: '0.08s' }}>
          <CardContent className="p-6 sm:p-10 space-y-8">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
              {contactOptions.map((option) => {
                const Icon = option.icon;
                return (
                  <div key={option.label} className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl glass-chip border border-white/10 flex items-center justify-center text-cyan-200">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">{option.label}</h4>
                      {option.href ? (
                        <a
                          href={option.href}
                          target={option.href.startsWith('http') ? '_blank' : undefined}
                          rel={option.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                          data-testid={option.testId}
                        >
                          {option.value}
                        </a>
                      ) : (
                        <p className="text-slate-300 text-sm">{option.value}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-6 border-t border-white/10 text-center space-y-4">
              <p className="text-slate-300 text-sm">
                Share the problem, the audience, and your timeline. We’ll respond within one business day with next steps.
              </p>
              <Button
                size="sm"
                className="rounded-full px-6 py-2 bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-400 text-slate-950 font-semibold shadow-[0_12px_30px_rgba(43,209,252,0.35)]"
                asChild
                data-testid="button-schedule-consultation"
              >
                <a href="mailto:nameerarshad@hotmail.com?subject=Project%20Inquiry">
                  Start a conversation
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <footer className="text-center space-y-3 pb-6">
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="gap-2 text-slate-400 hover:text-white transition-colors duration-200"
            size="sm"
            data-testid="button-back-to-top"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </Button>
          <p className="text-xs text-slate-500">
            © 2024 Autonex. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
