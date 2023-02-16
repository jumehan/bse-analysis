export interface Team {
  id: number;
  name: string;
  nickname: string;
  code: string;
  city: string;
  logo: string;
  allStar: boolean;
  nbaFranchise: boolean;
  leagues: {
      standard: {
          conference: string;
          division: string;
      };
      utah?: {
        conference: string;
        division: string;
      };
      sacramento?: {
        conference: string;
        division: string;
      };
  };
}