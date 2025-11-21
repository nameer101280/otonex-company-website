import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail, ArrowUp, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 bg-black border-t border-purple-600/20 relative">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-4">Let's Build Together</h2>
          <p className="text-gray-400">Ready to transform your idea into reality?</p>
        </div>

        <Card className="mb-12 border border-purple-600/30 bg-black/40 hover:border-purple-600/70 transition-all duration-300 hover:bg-purple-600/10 animate-fade-in-up stagger-1">
          <CardContent className="p-8 sm:p-12">
            <div className="space-y-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 animate-fade-in-up stagger-2">
                  <Mail className="h-5 w-5 text-purple-600/70 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white text-sm mb-1">Email</h4>
                    <a
                      href="mailto:nameerarshad@hotmail.com"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                      data-testid="link-email-primary"
                    >
                      nameerarshad@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in-up stagger-3">
                  <Phone className="h-5 w-5 text-purple-600/70 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white text-sm mb-1">Phone</h4>
                    <a
                      href="tel:+32465410698"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                      data-testid="link-phone"
                    >
                      +32 465 41 06 98
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in-up stagger-4">
                  <MapPin className="h-5 w-5 text-purple-600/70 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white text-sm mb-1">Location</h4>
                    <p className="text-gray-400 text-sm">Brussels, Belgium</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in-up stagger-5">
                  <Linkedin className="h-5 w-5 text-purple-600/70 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white text-sm mb-1">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/nameer-arshad-13a5b620b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                      data-testid="link-social-linkedin"
                    >
                      Connect with us
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-purple-600/30 text-center animate-fade-in-up stagger-1">
                <p className="text-gray-400 text-sm mb-4">
                  Let's discuss your project and how we can help bring it to life.
                </p>
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white transition-all duration-200 rounded-sm px-6 py-2 text-sm font-medium" asChild data-testid="button-schedule-consultation">
                  <a href="mailto:nameerarshad@hotmail.com?subject=Project%20Inquiry">
                    Start a Conversation
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <footer className="text-center space-y-4 animate-fade-in-up stagger-2">
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="gap-2 text-gray-500 hover:text-purple-400 transition-colors duration-200"
            size="sm"
            data-testid="button-back-to-top"
          >
            <ArrowUp className="h-4 w-4" />
            Back to Top
          </Button>
          <p className="text-xs text-gray-600">
            © 2024 Autonex. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
