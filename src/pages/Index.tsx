
// Modern retro-futuristic landing for PulsePlayer "by Nothing"

import PlayerRetroWave from "@/components/PlayerRetroWave";
import { Music, Volume } from "lucide-react";
import NothingLogo from "@/components/NothingLogo";

const APP_NAME = "PulsePlayer";

const Index = () => {
  return (
    <main className="relative flex flex-col items-center min-h-screen justify-center px-2 py-10 bg-background overflow-x-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-background/95 to-secondary/60"
        aria-hidden
      />
      <div className="pointer-events-none fixed -top-32 left-0 w-full h-72 blur-accent z-0" />
      <section className="w-full max-w-3xl mx-auto z-10 flex flex-col items-center mt-16 mb-6">
        <div className="mb-6 flex flex-col items-center justify-center">
          <PlayerRetroWave />
        </div>
        <h1
          className="text-[2.8rem] sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-center text-primary drop-shadow-[0_2px_18px_#317de5aa] animate-glow select-none flex flex-col items-center gap-0"
          style={{ textShadow: "0 0 16px #317de5" }}
        >
          <span className="inline-flex items-center gap-2">
            <NothingLogo size={42} />
            <Volume className="h-8 w-8 inline-block text-accent -mt-1 animate-pulseglow" /> 
            {APP_NAME}
            <Music className="h-8 w-8 inline-block text-accent -mt-1" />
          </span>
          <span className="block text-lg font-mono text-muted-foreground/70 mt-2 tracking-widest" style={{ letterSpacing: "0.13em" }}>
            by <span className="font-semibold text-accent">Nothing</span>
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/90 max-w-xl text-center mb-8 mt-1 font-sans" style={{letterSpacing: '0.03em'}}>
          A new era in web-based music, brought to you by <span className="font-semibold text-accent">Nothing</span>.<br />
          Your music, uninterrupted.<br />
          <span className="text-primary/80">Minimal ads</span>
          {", "}
          <span className="text-accent font-bold">never between your songs</span>.<br />
          Crafted with minimalism and unmistakable clarity.<br />
          Experience transparency in sound and design.
        </p>
        <a
          href="#"
          className="neon-btn group mt-2 animate-glow focus:outline-none"
          style={{ boxShadow: "0 0 24px 2px #317de580" }}
        >
          Start Listening
        </a>
        <span className="block mt-5 text-base text-muted-foreground/70 text-center font-mono tracking-wider">
          No sign-up required &bull; Pure listening, powered by Nothing
        </span>
        <span className="block mt-2">
          <a
            className="retro-link"
            href="mailto:hello@pulseplayer.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Want early access? Get notified &rarr;
          </a>
        </span>
      </section>
    </main>
  );
};

export default Index;
