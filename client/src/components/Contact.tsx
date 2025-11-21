import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail, ArrowUp, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4">Let AI do the Work</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Book a Call Today and Start Automating
          </p>
        </div>

        <Card className="mb-12 border border-white/10 bg-black animate-fade-in-up">
          <CardContent className="p-8 sm:p-12">
            <div className="space-y-10">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-semibold text-white tracking-tight">Contact Information</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 animate-fade-in-up stagger-1 group">
                  <div className="p-2.5 bg-purple-600/20 rounded-lg flex-shrink-0 group-hover:bg-purple-600/30 transition-colors">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1.5 text-white tracking-tight">Email</h4>
                    <a
                      href="mailto:nameerarshad@hotmail.com"
                      className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                      data-testid="link-email-primary"
                    >
                      nameerarshad@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in-up stagger-2 group">
                  <div className="p-2.5 bg-purple-600/20 rounded-lg flex-shrink-0 group-hover:bg-purple-600/30 transition-colors">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1.5 text-white tracking-tight">Phone</h4>
                    <a
                      href="tel:+32465410698"
                      className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                      data-testid="link-phone"
                    >
                      +32 465 41 06 98
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in-up stagger-3 group">
                  <div className="p-2.5 bg-purple-600/20 rounded-lg flex-shrink-0 group-hover:bg-purple-600/30 transition-colors">
                    <MapPin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1.5 text-white tracking-tight">Location</h4>
                    <p className="text-gray-400 text-sm">Brussels, Belgium</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in-up stagger-4 group">
                  <div className="p-2.5 bg-purple-600/20 rounded-lg flex-shrink-0 group-hover:bg-purple-600/30 transition-colors">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1.5 text-white tracking-tight">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/nameer-arshad-13a5b620b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 transition-colors text-sm"
                      data-testid="link-social-linkedin"
                    >
                      Connect with us
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 text-center">
                <p className="text-gray-400 mb-4">
                  Ready to automate and scale? Let's discuss your requirements.
                </p>
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild data-testid="button-schedule-consultation">
                  <a href="mailto:nameerarshad@hotmail.com?subject=Book%20a%20Call">
                    Book a free call
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <footer className="text-center space-y-4 mt-12">
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="gap-2 text-gray-400 hover:text-white"
            data-testid="button-back-to-top"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </Button>
          <p className="text-sm text-gray-600">
            © 2024 Autonex. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
