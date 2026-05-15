import { ImageResponse } from "next/og";
import { data } from "./constants/data.js";
import { getTotalExperience } from "./utils/experience";

const totalExperience = getTotalExperience(data.experiences ?? []);

export const dynamic = "force-static";
export const alt = `${data.fullName} – Senior React Native & iOS Engineer`;
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #000000 0%, #1f2937 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px 100px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          width: "56px",
          height: "4px",
          background: "#3b82f6",
          borderRadius: "2px",
          marginBottom: "44px",
          display: "flex",
        }}
      />
      <div
        style={{
          color: "#94a3b8",
          fontSize: "20px",
          letterSpacing: "8px",
          textTransform: "uppercase",
          marginBottom: "20px",
          display: "flex",
        }}
      >
        {data.currentRole}
      </div>
      <div
        style={{
          color: "white",
          fontSize: "88px",
          fontWeight: "700",
          lineHeight: "1.05",
          marginBottom: "28px",
          display: "flex",
        }}
      >
        {data.fullName}
      </div>
      <div
        style={{
          color: "#4b5563",
          fontSize: "26px",
          marginBottom: "48px",
          display: "flex",
        }}
      >
        React Native · Swift iOS · {totalExperience} years
      </div>
      <div style={{ display: "flex", gap: "14px" }}>
        {["React Native", "TypeScript", "Swift", "iOS"].map((tag) => (
          <div
            key={tag}
            style={{
              background: "#1e3a5f",
              color: "#93c5fd",
              padding: "10px 24px",
              borderRadius: "8px",
              fontSize: "20px",
              display: "flex",
            }}
          >
            {tag}
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "44px",
          right: "100px",
          color: "#374151",
          fontSize: "18px",
          display: "flex",
        }}
      >
        chiragbhaiji.github.io/meet-me
      </div>
    </div>,
    { ...size },
  );
}
