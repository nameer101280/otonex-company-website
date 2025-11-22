import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { Specialties } from '@/components/Specialties';
import { Stats } from '@/components/Stats';
import { Values } from '@/components/Values';
import { Comparison } from '@/components/Comparison';
import { Services } from '@/components/Services';
import { Integrations } from '@/components/Integrations';
import { FAQ } from '@/components/FAQ';
import { Team } from '@/components/Team';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050915] text-slate-100 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-20 grid-overlay"></div>
        <div className="absolute -left-24 -top-32 w-80 h-80 bg-cyan-400/25 blur-3xl rounded-full animate-float"></div>
        <div className="absolute right-[-12%] top-10 w-[420px] h-[420px] bg-fuchsia-400/20 blur-[120px] rounded-full"></div>
        <div className="absolute left-1/4 bottom-[-30%] w-[520px] h-[520px] bg-blue-500/15 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10">
        <Navigation />
        <Hero />
        <Specialties />
        <Stats />
        <Values />
        <Comparison />
        <Services />
        <Integrations />
        <FAQ />
        <Team />
        <Contact />
      </div>
    </div>
  );
}
