import { ImageResponse } from "next/og";
import { profile } from "../data/portfolio";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Favicon generated from your initials
export default function Icon() {
  const initials = profile.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1d4ed8",
          color: "#ffffff",
          fontSize: 30,
          fontWeight: 700,
          borderRadius: 14,
        }}
      >
        {initials}
      </div>
    ),
    size
  );
}
