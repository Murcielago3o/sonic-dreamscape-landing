
import NothingLogo from "@/components/NothingLogo";

const Index = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-background overflow-x-hidden">
      {/* Soft dot grid as ultra-minimal background accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        style={{
          background: "radial-gradient(circle at 24px 24px, #ebf0f71a 2px, transparent 1.5px), radial-gradient(circle at 0 0, #ebf0f708 1px, transparent 1.5px)",
          backgroundSize: "48px 48px",
          opacity: 0.35,
        }}
      />
      
      {/* Transparent glowing ellipse for glassmorphic effect */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[420px] h-[240px] rounded-full blur-[64px] z-0"
        style={{
          background: "linear-gradient(120deg, #E2F1F980 0%, #317de566 80%)",
          opacity: 0.7,
          filter: "blur(30px)",
        }}
      />

      <section className="relative z-10 flex flex-col items-center justify-center mt-20">
        <NothingLogo size={96} />
        <h1 className="mt-2 font-mono text-[2.8rem] sm:text-6xl md:text-7xl font-semibold tracking-widest text-foreground/90 text-center leading-tight drop-shadow-[0_6px_24px_#317de540] select-none">
          <span className="sr-only">Nothing Pulse</span>
          .pulse
        </h1>
        <h2 className="mt-2 font-mono text-lg sm:text-xl md:text-2xl text-muted-foreground font-normal tracking-wider text-center italic select-none">
          music, distilled
        </h2>
        <p className="mt-10 text-base sm:text-lg font-mono text-primary/70 text-center max-w-md tracking-widest select-none">
          Just sound.<br />
          No distractions.<br />
          Designed in London.<br />
          By <span className="font-bold text-accent">Nothing</span>.
        </p>
        <a
          href="#"
          className="mt-12 px-10 py-4 bg-accent rounded-xl text-background text-lg font-semibold font-mono tracking-widest shadow-lg hover:scale-105 transition-transform focus:outline-none"
          style={{ boxShadow: "0 0 42px 4px #317de588" }}
        >
          LISTEN
        </a>
        <span className="mt-7 block text-xs text-muted-foreground/70 font-mono tracking-wider select-none">
          No sign-up. No noise. Pure listening.
        </span>
      </section>
    </main>
  );
};

export default Index;
