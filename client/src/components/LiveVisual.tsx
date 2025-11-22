export function LiveVisual() {
  return (
    <div className="relative isolate">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/8 via-fuchsia-400/4 to-transparent blur-3xl" />
      <div className="relative glass-card rounded-3xl p-6 sm:p-7 overflow-hidden backdrop-saturate-150">
        <div className="absolute -left-10 top-10 h-32 w-32 bg-gradient-to-br from-cyan-400/30 to-transparent blur-2xl" />
        <div className="absolute -right-10 bottom-0 h-32 w-32 bg-gradient-to-tr from-fuchsia-400/20 to-transparent blur-2xl" />

        <div className="space-y-6">
          <div className="h-40 perspective-1000">
            <div className="relative h-full w-full rounded-2xl bg-gradient-to-br from-[#0b172c] via-[#0a1c38] to-[#0d1f3f] border border-white/10 shadow-[0_15px_50px_rgba(0,0,0,0.4)] transform rotateX(14deg) rotateY(-16deg) animate-tilt will-change-transform">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(111,207,255,0.25),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(248,114,193,0.25),transparent_35%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:26px_26px] opacity-40 animate-pan-grid" />
              <div className="absolute inset-x-0 top-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-80 animate-scan" />
              <div className="absolute inset-3 rounded-2xl border border-white/10" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="glass-chip rounded-xl p-3 border border-white/10">
              <p className="text-[11px] uppercase tracking-[0.14em] text-slate-400">Live uptime</p>
              <p className="text-lg font-semibold text-emerald-200">99.98%</p>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/5">
                <div className="h-full w-[92%] bg-gradient-to-r from-emerald-400 to-cyan-400 animate-pulse-bar" />
              </div>
            </div>
            <div className="glass-chip rounded-xl p-3 border border-white/10">
              <p className="text-[11px] uppercase tracking-[0.14em] text-slate-400">Deploy cadence</p>
              <p className="text-lg font-semibold text-white">Daily ships</p>
              <svg viewBox="0 0 120 36" className="mt-2 w-full h-10 text-cyan-300/80">
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="4,24 18,14 32,20 46,10 60,18 74,9 88,15 104,8 116,12"
                  className="animate-sparkline"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
