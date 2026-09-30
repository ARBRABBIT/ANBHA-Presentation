export const brand = {
  name: "ANBHA",
  tagline: "Pure Silver. Endless Stories",
  subtitle: "Brand Identity Presentation",
} as const;

export const brandColors = [
  {
    name: "Pure White",
    hex: "#F9F9F9",
    words: ["Cleanliness", "Simplicity", "Purity"],
    description: "A soft, premium foundation with space for every detail to breathe.",
  },
  {
    name: "Lotus Mist",
    hex: "#E2E8DF",
    words: ["Calmness", "Softness", "Elegance"],
    description: "A natural quietness that supports ANBHA’s graceful character.",
  },
  {
    name: "Temple Green",
    hex: "#193B32",
    words: ["Depth", "Trust", "Timelessness"],
    description: "The grounding tone that gives the identity its enduring presence.",
  },
] as const;

export const meanings = [
  ["Lotus", "Purity and spiritual grace"],
  ["Lakshmi inspiration", "Prosperity and abundance"],
  ["Elegant form", "Feminine, premium, timeless"],
  ["Minimal structure", "Clean, versatile, memorable"],
] as const;

export const misuse = [
  "Do not stretch",
  "Do not rotate",
  "Do not recolor",
  "Do not add effects",
  "Avoid visual clutter",
  "Keep proportions",
] as const;

export const chapters = [
  { id: "story", number: "01", label: "The Story" },
  { id: "identity", number: "02", label: "The Identity" },
  { id: "guidelines", number: "03", label: "Guidelines" },
  { id: "experience", number: "04", label: "Experience" },
] as const;
