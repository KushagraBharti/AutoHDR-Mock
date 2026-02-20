export type HdrStyle = "classic" | "golden" | "midnight" | "pink" | "lisa"
export type TvScene = "off" | "beach" | "city" | "mountains" | "custom"
export type ActiveFeature = "hdr" | "tv" | "fire" | "grass"

export interface CapabilityState {
  activeFeature: ActiveFeature
  hdrStyle: HdrStyle
  tvScene: TvScene
  fireOn: boolean
  grassOn: boolean
}

export interface FeatureOption {
  value: string
  label: string
}

export interface Feature {
  id: ActiveFeature
  label: string
  description: string
  type: "radio" | "toggle"
  options: FeatureOption[]
}
