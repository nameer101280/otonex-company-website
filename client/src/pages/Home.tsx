import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
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
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Stats />
      <Values />
      <Comparison />
      <Services />
      <Integrations />
      <FAQ />
      <Team />
      <Contact />
    </div>
  );
}
