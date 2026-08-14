import { ImageResponse } from "next/og";
import { content } from "./content";

export const alt = content.meta.ogAlt;
export const size = {
  width: 1200,
  height: 630,
};
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
          justifyContent: "center",
          padding: 80,
          background:
            "linear-gradient(135deg, #5A00E3 0%, #7C3AED 55%, #8B5CF6 100%)",
          color: "#ffffff",
        }}
      >
        <div
          style={{
            fontSize: 26,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            opacity: 0.85,
          }}
        >
          {content.brand.name}
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            marginTop: 24,
            lineHeight: 1.12,
            maxWidth: 920,
          }}
        >
          {content.hero.title}
        </div>
        <div
          style={{
            fontSize: 28,
            marginTop: 28,
            opacity: 0.92,
            maxWidth: 820,
          }}
        >
          {content.footer.tagline}
        </div>
      </div>
    ),
    size,
  );
}
