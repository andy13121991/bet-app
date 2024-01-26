export type Root = Root2[]

export interface Root2 {
  id: number
  date: string
  time: string
  status: string
  league: League
  country: Country
  teams: Teams
  scores: Scores
}

export interface League {
  id: number
  title: string
  logo: string
  name: string
}

export interface Country {
  id: number
  name: string
  flag: string
  title: string
}

export interface Teams {
  home: Home
  away: Away
}

export interface Home {
  id: number
  name: string
  group: string
  logo: string
}

export interface Away {
  id: number
  name: string
  group: string
  logo: string
}

export interface Scores {
  home: Home2
  away: Away2
}

export interface Home2 {
  quarter_1: number
  quarter_2: number
  quarter_3: number
  quarter_4: number
  over_time: any
  total: number
}

export interface Away2 {
  quarter_1: number
  quarter_2: number
  quarter_3: number
  quarter_4: number
  over_time: any
  total: number
}
