
/**
 * A retrofuturistic minimal SVG doodle of a music player with a gradient circle glow
 */
const PlayerRetroWave = () => (
  <div className="relative mt-8 mb-6 w-full flex justify-center items-center">
    {/* Gradient circle background */}
    <svg
      width="260"
      height="260"
      viewBox="0 0 260 260"
      className="absolute -top-10 left-1/2 -translate-x-1/2 pointer-events-none z-0 animate-glow"
      aria-hidden
      style={{ filter: "blur(10px)" }}
    >
      <defs>
        <radialGradient id="pulse-gradient" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#317de5" stopOpacity="0.85" />
          <stop offset="70%" stopColor="#93b5e3" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#1a4888" stopOpacity="0.10" />
        </radialGradient>
      </defs>
      <circle cx="130" cy="130" r="110" fill="url(#pulse-gradient)" />
    </svg>

    {/* Player and wave SVG content */}
    <svg
      width="320"
      height="120"
      viewBox="0 0 320 120"
      fill="none"
      aria-hidden
      className="mx-auto block relative z-10"
    >
      {/* Play button */}
      <circle
        cx="60"
        cy="68"
        r="15"
        fill="#070c14"
        stroke="#317de5"
        strokeWidth="3"
        className="animate-glow"
      />
      <polygon
        points="55,60 72,68 55,76"
        fill="#317de5"
      />
      {/* Music wave */}
      <polyline
        points="110,85 130,60 150,95 170,50 190,90 210,56 230,100"
        stroke="#93b5e3"
        strokeWidth="5"
        fill="none"
        className="animate-pulseglow"
        style={{ filter: "drop-shadow(0 0 12px #317de5bb)" }}
      />
      {/* dots */}
      <circle cx="250" cy="68" r="6" fill="#ebf0f7"/>
      <circle cx="270" cy="68" r="6" fill="#93b5e3"/>
      <defs>
        <filter id="shadow1" x="0" y="32" width="320" height="80"
          filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#317de599"/>
        </filter>
      </defs>
    </svg>
  </div>
);

export default PlayerRetroWave;
