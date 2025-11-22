import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Specialties } from '@/components/Specialties';
import { Services } from '@/components/Services';
import { Integrations } from '@/components/Integrations';
import { Contact } from '@/components/Contact';
import { FAQ } from '@/components/FAQ';
import { DynamicBackdrop } from '@/components/DynamicBackdrop';
import { Projects } from '@/components/Projects';
import { AIHighlight } from '@/components/AIHighlight';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050915] text-slate-100 relative overflow-hidden">
      <DynamicBackdrop />

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Specialties />
        <Services />
        <Integrations />
        <AIHighlight />
        <Projects />
        <FAQ />
        <Contact />
      </div>
    </div>
  );
}
