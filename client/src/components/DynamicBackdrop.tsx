export function DynamicBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(111,207,255,0.16),transparent_26%),radial-gradient(circle_at_80%_18%,rgba(248,114,193,0.12),transparent_28%),radial-gradient(circle_at_40%_70%,rgba(99,102,241,0.14),transparent_30%)] blur-3xl opacity-80" />
      <div className="absolute left-[12%] top-[20%] w-[520px] h-[520px] rounded-full bg-cyan-300/10 bg-orb" />
      <div className="absolute right-[8%] top-[10%] w-[460px] h-[460px] rounded-full bg-fuchsia-400/12 bg-orb" style={{ animationDelay: '0.5s' }} />
      <div className="absolute left-1/3 bottom-[-15%] w-[620px] h-[620px] rounded-full bg-blue-500/10 bg-orb" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-x-[-10%] top-10 bg-plane">
        <div className="mx-auto h-[420px] max-w-5xl rounded-[36px] border border-white/6 bg-gradient-to-br from-white/4 via-white/1 to-white/2 shadow-[0_30px_100px_rgba(0,0,0,0.45)] backdrop-blur-2xl" />
      </div>
    </div>
  );
}
