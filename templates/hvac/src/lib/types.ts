export interface Service {
  icon: string
  title: string
  desc: string
  urgent?: boolean
}

export interface Testimonial {
  name: string
  location: string
  text: string
  rating: number
}

export type TrustBadge = string
