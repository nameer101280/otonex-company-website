import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services, CaseStudies } from '@/components/Services';
import { Integrations } from '@/components/Integrations';
import { Projects } from '@/components/Projects';
import { Team } from '@/components/Team';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Integrations />
      <CaseStudies />
      <Projects />
      <Team />
      <Contact />
    </div>
  );
}
