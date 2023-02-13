export interface PlayerDetails {
  get?: string;
  parameters?: {
    id?: string;
    [k: string]: unknown;
  };
  errors?: unknown[];
  results?: number;
  response: PlayerDetailsData[];
  [k: string]: unknown;
}

export interface PlayerDetailsData {
  id: number;
  firstname: string;
  lastname: string;
  birth: {
    date: string;
    country?: string;
    [k: string]: unknown;
  };
  nba?: {
    start?: number;
    pro?: number;
    [k: string]: unknown;
  };
  height?: {
    feets?: null;
    inches?: null;
    meters?: null;
    [k: string]: unknown;
  };
  weight?: {
    pounds?: null;
    kilograms?: null;
    [k: string]: unknown;
  };
  college?: null;
  affiliation?: string;
  leagues?: {
    standard?: {
      jersey?: number;
      active?: boolean;
      pos?: null;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  [k: string]: unknown;
}