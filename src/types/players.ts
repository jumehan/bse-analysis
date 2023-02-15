import { PlayerDetailsData } from "./playerDetails";

export interface Players {
  get?: string
  parameters?: {
    search?: string
    [k: string]: unknown
  }
  errors?: unknown[]
  results?: number
  response: PlayerDetailsData[];
  [k: string]: unknown
}