
/**
 * A retrofuturistic minimal SVG doodle of a music player with wave
 */
const PlayerRetroWave = () => (
  <div className="relative mt-8 mb-6 w-full flex justify-center">
    <svg
      width="320"
      height="120"
      viewBox="0 0 320 120"
      fill="none"
      aria-hidden
      className="mx-auto block"
    >
      <rect
        x="20"
        y="40"
        width="280"
        height="56"
        rx="14"
        fill="#1a4888"
        stroke="#317de5"
        strokeWidth="3"
        filter="url(#shadow1)"
      />
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
