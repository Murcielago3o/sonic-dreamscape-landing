
import React from "react";

/**
 * Minimalist "Nothing" logo lookalike.
 * Normally, use an official SVG. For demo: dotted/transparent circle with "NOTHING." text.
 */
const NothingLogo = ({ size = 32 }: { size?: number }) => (
  <svg
    viewBox="0 0 64 32"
    width={size}
    height={size * 0.5}
    aria-label="Nothing logo"
    className="mr-2"
    fill="none"
  >
    <ellipse
      cx="16"
      cy="16"
      rx="14"
      ry="14"
      stroke="#ebf0f7"
      strokeDasharray="2,5"
      strokeWidth="2"
      fill="none"
      opacity="0.85"
    />
    <text
      x="36"
      y="20.5"
      fontSize="16"
      fill="#ebf0f7"
      fontFamily="'DM Sans', 'Inter', monospace, sans-serif"
      letterSpacing="2.5"
      opacity="0.86"
      fontWeight="bold"
      textAnchor="start"
    >
      NOTHING.
    </text>
  </svg>
);

export default NothingLogo;
