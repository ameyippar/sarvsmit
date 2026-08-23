import { ImageResponse } from "next/og";

export const alt =
  "Sarvsmit Global Enterprise — Engineering the Future of Consumption";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070708",
          color: "#e8e4dc",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              fontSize: 18,
              letterSpacing: 8,
              textTransform: "uppercase",
              color: "#c8c3b8",
            }}
          >
            SARVSMIT GLOBAL ENTERPRISE
          </div>
          <div style={{ fontSize: 14, color: "#8a857c" }}>
            FMCG R&D & Commercialization Consultancy
          </div>
        </div>
        <div
          style={{
            fontSize: 72,
            lineHeight: 1.05,
            fontWeight: 500,
            maxWidth: 980,
          }}
        >
          Engineering the Future of Consumption
        </div>
        <div style={{ fontSize: 20, color: "#c8c3b8", letterSpacing: 4 }}>
          IDEATE · INNOVATE · CREATE · SCALE · IMPACT
        </div>
      </div>
    ),
    { ...size },
  );
}
