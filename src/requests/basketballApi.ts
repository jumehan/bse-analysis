import axios from "axios";
import { TeamStatsInterface } from "../types/teamStats";

/** Global constants */
const BASE_URL = "process.env.API_BASE_URL";
const SEASON = "2022-2023"; // current season, static for demo purposes
const LEAGUE = "12"; // NBA, static for demo purposes

/** API class for managing data requests */
class BasketBallApi {
  /** Base request constructor */
  static async request(endpoint: string, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = {
      "x-rapidapi-key": process.env.API_KEY,
      "x-rapidapi-host": process.env.API_HOST,
    };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err);
    }
  }

  /************************************************ | Individual Api Routes | */

  /** Get Request for Team Stats */
  static async getTeamStats(team: string): Promise<TeamStatsInterface> {
    const resp = await this.request("statistics", {
      season: SEASON,
      team: team,
      league: LEAGUE,
    });
    console.log(resp);
    return resp;
  }
}

export default BasketBallApi;
