
import NothingLogo from "@/components/NothingLogo";

const Index = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-background overflow-x-hidden">
      {/* Ultra-light subtle dot grid as background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        style={{
          background: "radial-gradient(circle at 24px 24px, #ececec10 2px, transparent 1.5px)",
          backgroundSize: "48px 48px",
          opacity: 0.15,
        }}
      />
      {/* Blurred red ellipse for accent */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[440px] h-[180px] rounded-full blur-[80px] z-0"
        style={{
          background: "linear-gradient(120deg, #FC0019 30%, #ececec 80%)",
          opacity: 0.25,
          filter: "blur(26px)",
        }}
      />
      <section className="relative z-10 flex flex-col items-center justify-center mt-24">
        <NothingLogo size={92} />
        <h1 className="mt-2 font-sans text-[2.8rem] sm:text-6xl md:text-7xl font-medium tracking-[0.22em] text-foreground/95 text-center leading-tight select-none">
          <span className="sr-only">Pulse by Nothing</span>
          pulse
        </h1>
        <h2 className="mt-2 font-sans text-lg sm:text-xl md:text-2xl text-secondary font-normal tracking-wider text-center select-none">
          Music, reimagined by <span className="font-bold tracking-[0.18em] text-accent">Nothing</span>
        </h2>

        <p className="mt-10 text-base sm:text-lg font-sans text-foreground/80 text-center max-w-md tracking-widest select-none">
          Clean. Minimal. No distractions.<br />
          Designed in London.<br />
          By <span className="font-bold text-accent">Nothing</span>.
        </p>
        <a
          href="#"
          className="mt-12 px-9 py-4 neon-btn text-lg font-semibold font-sans tracking-widest shadow-lg hover:scale-105 transition-transform focus:outline-none"
        >
          LISTEN
        </a>
        <span className="mt-7 block text-xs text-muted-foreground/70 font-sans tracking-widest select-none">
          No sign-up. No noise. Pure listening.
        </span>
      </section>
    </main>
  );
};

export default Index;
