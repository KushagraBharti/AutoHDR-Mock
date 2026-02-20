import type { CapabilityState, Feature } from "@/types/capabilities"

export function resolveImage(s: CapabilityState): string {
  if (s.activeFeature === "hdr") return `/images/${s.hdrStyle}-desktop.jpg`
  if (s.activeFeature === "tv") {
    return s.tvScene === "off"
      ? "/images/tv_off_fire_off-desktop.jpg"
      : `/images/tv_${s.tvScene}-desktop.jpg`
  }
  if (s.activeFeature === "fire") {
    return s.fireOn
      ? "/images/fire_on_tv_off-desktop.jpg"
      : "/images/tv_off_fire_off-desktop.jpg"
  }
  if (s.activeFeature === "grass") {
    return s.grassOn
      ? "/images/grass_on-desktop.jpg"
      : "/images/grass_off-desktop.jpg"
  }
  return "/images/classic-desktop.jpg"
}

export const ALL_IMAGES = [
  "/images/classic-desktop.jpg",
  "/images/golden-desktop.jpg",
  "/images/midnight-desktop.jpg",
  "/images/pink-desktop.jpg",
  "/images/lisa-desktop.jpg",
  "/images/grass_off-desktop.jpg",
  "/images/grass_on-desktop.jpg",
  "/images/tv_off_fire_off-desktop.jpg",
  "/images/tv_beach-desktop.jpg",
  "/images/tv_city-desktop.jpg",
  "/images/tv_mountains-desktop.jpg",
  "/images/tv_custom-desktop.jpg",
  "/images/fire_on_tv_off-desktop.jpg",
]

export const DEFAULT_STATE: CapabilityState = {
  activeFeature: "hdr",
  hdrStyle: "classic",
  tvScene: "off",
  fireOn: false,
  grassOn: false,
}

export const FEATURES: Feature[] = [
  {
    id: "hdr",
    label: "HDR Editing",
    description: "Natural light enhancements that make every room shine",
    type: "radio",
    options: [
      { value: "classic", label: "Classic" },
      { value: "golden", label: "Golden" },
      { value: "midnight", label: "Midnight" },
      { value: "pink", label: "Pink" },
      { value: "lisa", label: "Lisa" },
    ],
  },
  {
    id: "tv",
    label: "TV Screen",
    description: "Replace blank screens with stunning lifestyle scenes",
    type: "radio",
    options: [
      { value: "off", label: "Off" },
      { value: "beach", label: "Beach" },
      { value: "city", label: "City" },
      { value: "mountains", label: "Mountains" },
      { value: "custom", label: "Custom" },
    ],
  },
  {
    id: "fire",
    label: "Fire in Fireplace",
    description: "Add realistic flames to bring warmth to any room",
    type: "toggle",
    options: [
      { value: "off", label: "Off" },
      { value: "on", label: "On" },
    ],
  },
  {
    id: "grass",
    label: "Grass Greening",
    description: "Transform patchy lawns into lush green landscapes",
    type: "toggle",
    options: [
      { value: "off", label: "Off" },
      { value: "on", label: "On" },
    ],
  },
]

export const TESTIMONIALS = [
  {
    quote:
      "AutoHDR saved me 30+ minutes per day. The AI edits are indistinguishable from manual retouching — my clients love the results.",
    name: "Sarah Mitchell",
    role: "Real Estate Photographer",
    company: "Mitchell Media Co.",
    rating: 5,
  },
  {
    quote:
      "Switching to AutoHDR was the best business decision I made this year. The turnaround time went from hours to minutes.",
    name: "James Kowalski",
    role: "Senior Photographer",
    company: "Prestige Property Photos",
    rating: 5,
  },
  {
    quote:
      "The grass greening and TV screen features alone are worth the subscription. My listing photos look incredible every time.",
    name: "Priya Nair",
    role: "Real Estate Agent & Photographer",
    company: "Premier Realty Group",
    rating: 5,
  },
]

export const POST_PROCESSING_FEATURES = [
  {
    title: "AI Re-edit",
    description:
      "Describe the change you want in plain language and our AI applies it instantly.",
    icon: "Sparkles",
  },
  {
    title: "Virtual Twilight",
    description:
      "Transform daytime exterior shots into stunning golden-hour photos.",
    icon: "Sunset",
  },
  {
    title: "Grass Greening",
    description:
      "Automatically enhance patchy, dull lawns into vibrant green landscapes.",
    icon: "Leaf",
  },
  {
    title: "Paint Colour Accuracy",
    description:
      "Recover and correct paint colours lost in HDR processing for true-to-life results.",
    icon: "Palette",
  },
]

export const INTEGRATIONS = [
  "Dropbox",
  "Aryeo",
  "tonomo",
  "HDPhotoHub",
  "Spiro",
  "BoxBrownie",
]
