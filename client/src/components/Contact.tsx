import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail, ArrowUp, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display tracking-tight">Let's Build Something Great</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your infrastructure? Get in touch for a free consultation.
          </p>
        </div>

        <Card className="mb-12 border-border/50">
          <CardContent className="p-8 sm:p-12">
            <div className="space-y-10">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-semibold tracking-tight">Contact Information</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/5 rounded-lg flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1.5 tracking-tight">Email</h4>
                    <a
                      href="mailto:nameerarshad@hotmail.com"
                      className="text-primary hover:opacity-80 transition-opacity text-sm"
                      data-testid="link-email-primary"
                    >
                      nameerarshad@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/5 rounded-lg flex-shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1.5 tracking-tight">Phone</h4>
                    <a
                      href="tel:+32465410698"
                      className="text-primary hover:opacity-80 transition-opacity text-sm"
                      data-testid="link-phone"
                    >
                      +32 465 41 06 98
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/5 rounded-lg flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1.5 tracking-tight">Location</h4>
                    <p className="text-foreground/70 text-sm">Brussels, Belgium</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-primary/5 rounded-lg flex-shrink-0">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1.5 tracking-tight">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/nameer-arshad-13a5b620b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:opacity-80 transition-opacity text-sm"
                      data-testid="link-social-linkedin"
                    >
                      Connect with us
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50 text-center">
                <p className="text-muted-foreground mb-4">
                  Interested in working together? Let's discuss your project requirements.
                </p>
                <Button size="lg" asChild data-testid="button-schedule-consultation">
                  <a href="mailto:nameerarshad@hotmail.com?subject=Project Consultation">
                    Schedule a Consultation
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <footer className="text-center space-y-4">
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="gap-2"
            data-testid="button-back-to-top"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </Button>
          <p className="text-sm text-muted-foreground">
            © 2024 CloudForge Solutions. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
