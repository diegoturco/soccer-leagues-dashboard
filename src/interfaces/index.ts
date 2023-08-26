export interface League {
  uid: string
  id: string
  name: string
  abbreviation: string
  children: Children[]
  seasons: Season[]
}

export interface Children {
  uid: string
  id: string
  name: string
  abbreviation: string
  standings: Standings
}

export interface Standings {
  id: string
  name: string
  displayName: string
  links: Link[]
  season: number
  seasonType: number
  seasonDisplayName: string
  entries: Entry[]
}

export interface Link {
  language: string
  rel: string[]
  href: string
  text: string
  shortText: string
  isExternal: boolean
  isPremium: boolean
}

export interface Entry {
  team: Team
  stats: Stat[]
}

export interface Team {
  id: string
  uid: string
  location: string
  name: string
  abbreviation: string
  displayName: string
  shortDisplayName: string
  isActive: boolean
  logos: Logo[]
  links: Link[]
  isNational: boolean
}

export interface Logo {
  href: string
  width: number
  height: number
  alt: string
  rel: string[]
  lastUpdated: string
}

export interface Stat {
  name: string
  displayName: string
  shortDisplayName: string
  description: string
  abbreviation: string
  type: string
  value?: number
  displayValue: string
  id?: string
  summary?: string
}

export interface Season {
  year: number
  startDate: string
  endDate: string
  displayName: string
  types: Type[]
}

export interface Type {
  id: string
  name: string
  abbreviation: string
  startDate: string
  endDate: string
  hasStandings: boolean
}
