import type { SVGProps } from "react";

export function LogoMark({ className = "w-8 h-8", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <defs>
        {/* Ambient Drop Glow */}
        <filter id="chromeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#ffffff" floodOpacity="0.18" />
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="#000000" floodOpacity="0.8" />
        </filter>

        {/* Outer Silver Gradient */}
        <linearGradient id="silverOuter" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="18%" stopColor="#c5c0b5" />
          <stop offset="38%" stopColor="#76726b" />
          <stop offset="55%" stopColor="#f5f2eb" />
          <stop offset="72%" stopColor="#8c8780" />
          <stop offset="90%" stopColor="#3d3c39" />
          <stop offset="100%" stopColor="#e2ded6" />
        </linearGradient>

        {/* Inner Ridge Light Gradient */}
        <linearGradient id="silverInner" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#252422" />
          <stop offset="25%" stopColor="#dedbd3" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="75%" stopColor="#7a766f" />
          <stop offset="100%" stopColor="#f0ede6" />
        </linearGradient>

        {/* Rim Metallic Sheen */}
        <linearGradient id="rimSheen" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
          <stop offset="50%" stopColor="#a39e94" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {/* Outer 3D Shadow Layer */}
      <path
        d="M 68 22 C 68 22 55 12 44 12 C 28 12 18 21 18 33 C 18 45 28 50 42 54 C 60 59 74 65 74 80 C 74 94 59 99 44 99 C 27 99 14 88 14 88 L 18 78 C 18 78 30 89 44 89 C 53 89 63 84 63 76 C 63 67 52 62 37 57 C 22 52 9 44 9 30 C 9 16 23 4 43 4 C 60 4 72 13 72 13 L 68 22 Z"
        fill="#0b0b0d"
        opacity="0.6"
        transform="translate(2, 4)"
      />

      {/* Main Base Body */}
      <path
        d="M 70 20 C 70 20 57 10 44 10 C 27 10 16 20 16 33 C 16 46 27 52 43 56 C 62 61 76 67 76 82 C 76 97 60 100 44 100 C 26 100 12 88 12 88 L 17 77 C 17 77 30 89 44 89 C 54 89 64 83 64 75 C 64 65 52 60 36 55 C 20 50 7 42 7 28 C 7 14 22 2 43 2 C 61 2 74 12 74 12 L 70 20 Z"
        fill="url(#silverOuter)"
        filter="url(#chromeGlow)"
      />

      {/* Inner Bevel & High Relief Highlight */}
      <path
        d="M 66 18 C 66 18 55 12 44 12 C 29 12 20 19 20 31 C 20 41 28 47 42 51 C 60 56 72 63 72 78 C 72 90 58 96 44 96 C 29 96 17 86 17 86 L 20 79 C 20 79 31 87 44 87 C 52 87 60 83 60 76 C 60 67 49 63 35 58 C 22 53 11 46 11 31 C 11 18 24 5 43 5 C 58 5 69 13 69 13 L 66 18 Z"
        fill="url(#silverInner)"
      />

      {/* Specular Highlight Ridges */}
      <path
        d="M 43 4 C 59 4 70 12 70 12 L 67 17 C 67 17 57 11 44 11 C 28 11 18 19 18 32 C 18 43 27 49 41 53 L 42 51 C 29 47 20 42 20 31 C 20 19 29 12 44 12 C 55 12 66 18 66 18 L 69 13 C 69 13 58 5 43 5 L 43 4 Z"
        fill="#ffffff"
        opacity="0.85"
      />

      <path
        d="M 72 78 C 72 90 58 96 44 96 C 29 96 17 86 17 86 L 19 83 C 19 83 30 92 44 92 C 56 92 68 87 68 78 C 68 67 56 61 40 56 L 39 58 C 53 63 64 67 64 76 C 64 83 54 87 44 87 C 31 87 20 79 20 79 L 17 86 C 17 86 29 96 44 96 Z"
        fill="#ffffff"
        opacity="0.7"
      />

      {/* Center Bevel Line */}
      <path
        d="M 43 4 Q 18 17 18 33 Q 18 49 43 55 Q 74 62 74 81 Q 74 99 44 99"
        stroke="url(#rimSheen)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
    </svg>
  );
}
