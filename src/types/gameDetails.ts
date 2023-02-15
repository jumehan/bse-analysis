export interface GameDetails {
  get?: string;
  parameters?: {
    id?: string;
    [k: string]: unknown;
  };
  errors?: unknown[];
  results?: number;
  response: GameDetailsData[];
  [k: string]: unknown;
}

export interface GameDetailsData {
  id?: number;
  league?: string;
  season?: number;
  date?: {
    start?: string;
    end?: string;
    duration?: string;
    [k: string]: unknown;
  };
  stage?: number;
  status?: {
    clock?: null;
    halftime?: boolean;
    short?: number;
    long?: string;
    [k: string]: unknown;
  };
  periods?: {
    current?: number;
    total?: number;
    endOfPeriod?: boolean;
    [k: string]: unknown;
  };
  arena?: {
    name?: string;
    city?: string;
    state?: string;
    country?: string;
    [k: string]: unknown;
  };
  teams?: {
    visitors?: {
      id?: number;
      name?: string;
      nickname?: string;
      code?: string;
      logo?: string;
      [k: string]: unknown;
    };
    home?: {
      id?: number;
      name?: string;
      nickname?: string;
      code?: string;
      logo?: string;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  scores?: {
    visitors?: {
      win?: number;
      loss?: number;
      series?: {
        win?: number;
        loss?: number;
        [k: string]: unknown;
      };
      linescore?: string[];
      points?: number;
      [k: string]: unknown;
    };
    home?: {
      win?: number;
      loss?: number;
      series?: {
        win?: number;
        loss?: number;
        [k: string]: unknown;
      };
      linescore?: string[];
      points?: number;
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  officials?: string[];
  timesTied?: number;
  leadChanges?: number;
  nugget?: null;
  [k: string]: unknown;
}
