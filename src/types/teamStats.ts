export interface TeamStatsInterface {
  league: League;
  country: Country;
  team: Team;
  games: Games;
  points: Points;
}

/******************************************************* | Nested Interface | */

interface League extends Team {
  type: string;
  season: string;
}

interface Country {
  id: number;
  name: string;
  code: string;
  flag: string;
}

interface Team {
  id: number;
  name: string;
  logo?: string;
}

interface Played {
  home: number;
  away: number;
  all: number;
}

interface PlayedAvg {
  home: string;
  away: string;
  all: string;
}

interface GamesStats {
  total: number;
  percentage: string;
}

interface GamesLocationStats {
  home: GamesStats;
  away: GamesStats;
  all: GamesStats;
}

interface Games {
  played: Played;
  wins: GamesLocationStats;
  draws: GamesLocationStats;
  loses: GamesLocationStats;
}

interface PointsStats {
  total: Played;
  average: PlayedAvg;
}

interface Points {
  for: PointsStats;
  against: PointsStats;
}

