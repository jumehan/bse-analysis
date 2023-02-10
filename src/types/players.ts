export interface Players {
  get?: string
  parameters?: {
    search?: string
    [k: string]: unknown
  }
  errors?: unknown[]
  results?: number
  response?: {
    [k: string]: unknown
  }[]
  [k: string]: unknown
}