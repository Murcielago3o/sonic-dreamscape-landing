
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-background overflow-x-hidden">
      {/* Subtle blue/purple dot-grid as BG */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 w-full h-full z-0"
        style={{
          background: "radial-gradient(circle at 24px 24px, #1a488840 2px, transparent 1.5px)",
          backgroundSize: "48px 48px",
          opacity: 0.16,
        }}
      />
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[460px] h-[200px] rounded-full blur-[90px] z-0"
        style={{
          background: "linear-gradient(120deg, #317de5 40%, #93b5e3 90%)",
          opacity: 0.3,
        }}
      />
      <section className="relative z-10 flex flex-col items-center justify-center mt-28">
        {/* Logo or Icon Placeholder */}
        <svg width={92} height={48} viewBox="0 0 92 48" className="mb-3" aria-label="Retro Music Logo">
          <ellipse cx="26" cy="24" rx="22" ry="22" stroke="#93b5e3" strokeDasharray="2,6" strokeWidth="2.5" fill="none" opacity="0.82"/>
          <text x="52" y="30" fontSize="18" fill="#93b5e3" fontWeight="bold" fontFamily="'DM Sans', 'Inter', monospace, sans-serif" letterSpacing="3.5" opacity="0.88">PULSE</text>
        </svg>
        <h1 className="font-sans text-5xl md:text-7xl font-bold tracking-[0.16em] text-foreground text-center drop-shadow-md select-none">
          PulsePlayer
        </h1>
        <h2 className="mt-3 font-sans text-xl md:text-2xl text-secondary font-semibold tracking-wider text-center">
          Free. Minimal ads. <span className="text-accent">Never</span> interrupt your music.
        </h2>
        <p className="mt-10 text-base md:text-lg font-sans max-w-2xl text-foreground/85 text-center tracking-wide select-none">
          Welcome to a retrofuturistic, ultra-minimal music web app.<br />
          Enjoy unlimited listening for free, with minimal interruptions.<br />
          We promise: <span className="font-bold text-primary">no more ads cutting your favorite tracks.</span>
        </p>
        <div className="flex gap-4 mt-14">
          <a
            href="#"
            className="px-12 py-4 retro-btn text-lg font-semibold font-sans tracking-widest shadow-xl hover:scale-105 transition-transform focus:outline-none"
          >
            LISTEN NOW
          </a>
          <Link
            to="/portfolio"
            className="px-12 py-4 border-2 border-accent text-accent hover:bg-accent hover:text-background rounded-xl font-semibold font-sans tracking-widest transition-all duration-300 hover:scale-105 focus:outline-none"
          >
            PORTFOLIO
          </Link>
        </div>
        <span className="mt-8 block text-xs text-muted-foreground/80 font-sans tracking-widest select-none">
          Pure music. Pure focus.
        </span>
      </section>
    </main>
  );
};

export default Index;
