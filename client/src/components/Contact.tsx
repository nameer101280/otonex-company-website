import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Linkedin, Mail, ArrowUp, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 bg-black border-t border-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl sm:text-6xl font-light text-white mb-4">Let's Work Together</h2>
          <p className="text-gray-500 animate-fade-in-up stagger-1">Ready to transform your infrastructure?</p>
        </div>

        <Card className="mb-12 border border-gray-800 bg-transparent animate-fade-in-up stagger-2">
          <CardContent className="p-8 sm:p-12">
            <div className="space-y-10">
              <div className="text-center space-y-2">
                <h3 className="text-lg font-medium text-white">Get in Touch</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4 animate-fade-in-up stagger-3">
                  <Mail className="h-5 w-5 text-gray-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white text-sm mb-1">Email</h4>
                    <a
                      href="mailto:nameerarshad@hotmail.com"
                      className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm"
                      data-testid="link-email-primary"
                    >
                      nameerarshad@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in-up stagger-4">
                  <Phone className="h-5 w-5 text-gray-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white text-sm mb-1">Phone</h4>
                    <a
                      href="tel:+32465410698"
                      className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm"
                      data-testid="link-phone"
                    >
                      +32 465 41 06 98
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in-up stagger-5">
                  <MapPin className="h-5 w-5 text-gray-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white text-sm mb-1">Location</h4>
                    <p className="text-gray-500 text-sm">Brussels, Belgium</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 animate-fade-in-up stagger-1">
                  <Linkedin className="h-5 w-5 text-gray-600 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-white text-sm mb-1">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/nameer-arshad-13a5b620b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-gray-300 transition-colors duration-200 text-sm"
                      data-testid="link-social-linkedin"
                    >
                      Connect with us
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-gray-800 text-center animate-fade-in-up stagger-2">
                <p className="text-gray-500 text-sm mb-4">
                  Let's discuss your project and how we can help.
                </p>
                <Button size="sm" className="bg-white text-black hover:bg-gray-200 transition-colors duration-200 rounded-sm px-6 py-2 text-sm font-medium" asChild data-testid="button-schedule-consultation">
                  <a href="mailto:nameerarshad@hotmail.com?subject=Schedule%20Consultation">
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <footer className="text-center space-y-4 animate-fade-in-up stagger-3">
          <Button
            variant="ghost"
            onClick={scrollToTop}
            className="gap-2 text-gray-500 hover:text-white transition-colors duration-200"
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
