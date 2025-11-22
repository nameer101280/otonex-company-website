import { Button } from '@/components/ui/button';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';

export function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reduceMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 88;
      const top = element.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || reduceMotion) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  const handleLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section id="hero" className="min-h-screen flex items-center pt-12 sm:pt-14 pb-4 relative overflow-hidden">
      <div className="absolute top-5 sm:top-6 left-1/2 -translate-x-1/2 z-20">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_12px_45px_rgba(0,0,0,0.4)]">
          <span className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-200">AUTONEX</span>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400 shadow-[0_0_12px_rgba(111,207,255,0.8)]"></span>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -left-32 top-[-18%] w-[340px] h-[340px] bg-cyan-400/30 blur-3xl rounded-full animate-float"></div>
        <div className="absolute right-[-10%] top-[-6%] w-[420px] h-[420px] bg-fuchsia-500/25 blur-[120px] rounded-full animate-float" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute left-1/3 bottom-[-35%] w-[520px] h-[520px] bg-blue-500/20 blur-[120px] rounded-full"></div>
        <div className="absolute inset-0 opacity-40 mix-blend-screen [mask-image:radial-gradient(circle_at_center,white,transparent_70%)]" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(111,207,255,0.12), transparent 35%), radial-gradient(circle at 80% 25%, rgba(248,114,193,0.16), transparent 38%), linear-gradient(115deg, rgba(255,255,255,0.05) 0%, transparent 40%)' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid md:grid-cols-[1.05fr,0.95fr] gap-8 lg:gap-12 items-center">
          <div className="space-y-7">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
              AI-led, DevOps-grade builds that <span className="gradient-text">convert faster.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.16s' }}>
              Full-stack web, cloud-native backends, AI copilots, and mobile—shipped with SRE discipline so every release is faster, safer, and built to turn visitors into customers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-in-up" style={{ animationDelay: '0.24s' }}>
              <Button
                onClick={() => scrollToSection('specialties')}
                className="rounded-full px-7 py-3 bg-gradient-to-r from-cyan-300 via-blue-500 to-fuchsia-400 text-slate-950 font-semibold shadow-[0_16px_50px_rgba(43,209,252,0.35)] hover:shadow-[0_22px_60px_rgba(43,209,252,0.45)] transition-all duration-300"
                data-testid="button-cta-book"
              >
                Start a project
                <ArrowUpRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('projects')}
                className="rounded-full px-7 py-3 glass-chip border border-white/20 text-slate-100 hover:text-white hover:border-white/40 transition-colors duration-200"
                data-testid="button-cta-portfolio"
              >
                View projects
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -left-10 -top-12 w-36 h-36 bg-gradient-to-br from-cyan-300/30 to-fuchsia-400/30 blur-3xl rounded-full"></div>
            <div
              ref={cardRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              className="relative overflow-visible"
              style={{
                transform: `rotateX(${tilt.y * -12}deg) rotateY(${tilt.x * 16}deg) translateZ(0)`,
                transition: 'transform 160ms ease-out',
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="relative h-80 w-full rounded-[36px] overflow-hidden glass-card border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-saturate-150 bg-gradient-to-br from-[#0b172c] via-[#0a1c38] to-[#0d1f3f]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(111,207,255,0.22),transparent_32%),radial-gradient(circle_at_80%_50%,rgba(248,114,193,0.2),transparent_38%)] pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:70px_70px] opacity-18 animate-pan-grid pointer-events-none" />
                <div className="absolute inset-8 rounded-[28px] border border-white/8 pointer-events-none"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-44 w-44 sm:h-48 sm:w-48">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-300/45 to-fuchsia-400/38 blur-3xl"></div>
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-white/12 to-transparent" />
                    <div className="absolute inset-0 animate-spin-slow rounded-full border border-white/8 [mask-image:radial-gradient(circle,white,transparent_60%)]" />
                    <div className="absolute inset-[24%] rounded-full bg-white/12 mix-blend-screen" />
                  </div>
                </div>

                <div className="absolute inset-x-8 bottom-6 grid grid-cols-2 gap-3">
                  <div className="glass-chip rounded-2xl p-4 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">Deploy cadence</p>
                    <p className="text-lg font-semibold text-white mt-1">Daily ships</p>
                  </div>
                  <div className="glass-chip rounded-2xl p-4 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                    <p className="text-[11px] uppercase tracking-[0.12em] text-slate-400">Reliability</p>
                    <p className="text-lg font-semibold text-emerald-200 mt-1">99.9% uptime</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-4">
          <button
            onClick={() => scrollToSection('specialties')}
            className="text-slate-400 hover:text-white transition-colors duration-300 animate-bounce"
            data-testid="button-scroll-indicator"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
