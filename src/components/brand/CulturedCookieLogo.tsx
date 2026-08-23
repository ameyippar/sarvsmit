import React from "react";

export function CulturedCookieLogo({
  className = "h-8 w-auto",
  theme = "dark",
}: {
  className?: string;
  theme?: "dark" | "light" | "gold";
}) {
  const textColor =
    theme === "light"
      ? "#FFFFFF"
      : theme === "gold"
      ? "#E5A93C"
      : "#253135";

  return (
    <svg
      viewBox="0 0 240 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cultured Cookie Co."
      style={{ overflow: "visible" }}
    >
      {/* CULTURED */}
      <text
        x="120"
        y="42"
        textAnchor="middle"
        fontFamily="'Faculty Glyphic', 'Times New Roman', Georgia, serif"
        fontWeight="bold"
        fontSize="34"
        letterSpacing="0.06em"
        fill={textColor}
      >
        CULTURED
      </text>

      {/* Left horizontal bar */}
      <rect x="22" y="53" width="70" height="2.5" rx="1" fill={textColor} />

      {/* CO in the middle */}
      <text
        x="120"
        y="58"
        textAnchor="middle"
        fontFamily="'Faculty Glyphic', 'Times New Roman', Georgia, serif"
        fontWeight="bold"
        fontSize="15"
        letterSpacing="0.12em"
        fill={textColor}
      >
        CO
      </text>

      {/* Right horizontal bar */}
      <rect x="148" y="53" width="70" height="2.5" rx="1" fill={textColor} />

      {/* Left Diamond Accent */}
      <g transform="translate(36, 85)">
        <polygon points="0,-7 7,0 0,7 -7,0" fill={textColor} />
      </g>

      {/* COOKIE */}
      <text
        x="120"
        y="92"
        textAnchor="middle"
        fontFamily="'Faculty Glyphic', 'Times New Roman', Georgia, serif"
        fontWeight="bold"
        fontSize="32"
        letterSpacing="0.08em"
        fill={textColor}
      >
        COOKIE
      </text>

      {/* Right Diamond Accent */}
      <g transform="translate(204, 85)">
        <polygon points="0,-7 7,0 0,7 -7,0" fill={textColor} />
      </g>
    </svg>
  );
}
