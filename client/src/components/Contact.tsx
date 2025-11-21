import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Github, Linkedin, Mail, Twitter, ArrowUp } from 'lucide-react';
import { SiDribbble } from 'react-icons/si';

export function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">Let's Work Together</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
        </div>

        <Card className="mb-12">
          <CardContent className="p-8 sm:p-12">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Get In Touch</h3>
                <a
                  href="mailto:alex.chen@example.com"
                  className="inline-flex items-center gap-2 text-2xl sm:text-3xl font-bold text-primary hover:underline"
                  data-testid="link-email-primary"
                >
                  <Mail className="h-8 w-8" />
                  alex.chen@example.com
                </a>
              </div>

              <div className="pt-6">
                <p className="text-muted-foreground mb-6">Follow me on social media</p>
                <div className="flex justify-center gap-3">
                  <Button variant="outline" size="icon" asChild data-testid="link-social-github">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild data-testid="link-social-linkedin">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild data-testid="link-social-twitter">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild data-testid="link-social-dribbble">
                    <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
                      <SiDribbble className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
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
            © 2024 Alex Chen. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}
