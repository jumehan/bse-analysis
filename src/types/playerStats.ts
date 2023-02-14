export interface PlayerStats {
  get?: string;
  parameters?: {
    season?: string;
    id?: string;
    [k: string]: unknown;
  };
  errors?: unknown[];
  results?: number;
  response: PlayerStatsData[];
  [k: string]: unknown;
}

export interface PlayerStatsData {
  player?: {
    id?: number;
    firstname?: string;
    lastname?: string;
    [k: string]: unknown;
  };
  team: {
    id?: number;
    name: string;
    nickname?: string;
    code?: string;
    logo?: string;
    [k: string]: unknown;
  };
  game: {
    id: number;
    [k: string]: unknown;
  };
  points?: number;
  pos?: string;
  min?: string;
  fgm?: number;
  fga?: number;
  fgp?: string;
  ftm?: number;
  fta?: number;
  ftp?: string;
  tpm?: number;
  tpa?: number;
  tpp?: string;
  offReb?: number;
  defReb?: number;
  totReb?: number;
  assists?: number;
  pFouls?: number;
  steals?: number;
  turnovers?: number;
  blocks?: number;
  plusMinus?: string;
  comment?: null;
  [k: string]: unknown;
}
