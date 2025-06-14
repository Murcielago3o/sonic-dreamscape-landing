
// Modern retro-futuristic landing for PulsePlayer

import PlayerRetroWave from "@/components/PlayerRetroWave";
import { Music, Volume } from "lucide-react";

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
          className="text-[2.6rem] sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-center text-primary drop-shadow-[0_2px_18px_#317de5aa] animate-glow select-none"
          style={{ textShadow: "0 0 16px #317de5" }}
        >
          <span className="inline-flex items-center gap-2">
            <Volume className="h-8 w-8 inline-block text-accent -mt-1 animate-pulseglow" /> 
            {APP_NAME}
            <Music className="h-8 w-8 inline-block text-accent -mt-1" />
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-medium text-foreground/90 max-w-xl text-center mb-8">
          Your free, web-based music player.
          <br />
          <span className="text-primary/90">Minimal ads</span>, and we <span className="text-accent font-semibold">promise not to ever interrupt your songs for an ad</span>.  
          Pure music. Chill vibes. Retro-future feel.
        </p>
        <a
          href="#"
          className="neon-btn group mt-2 animate-glow focus:outline-none"
          style={{ boxShadow: "0 0 24px 2px #317de580" }}
        >
          Start Listening
        </a>
        <span className="block mt-5 text-base text-muted-foreground/80 text-center">
          No sign-up required • No interruptions
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
