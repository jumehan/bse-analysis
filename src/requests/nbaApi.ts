import axios from "axios";
import { Players } from "../types/players";
import { PlayerStats } from "../types/playerStats";

/** Global constants */
const BASE_URL = "process.env.API_BASE_URL";

/** API class for managing data requests */
class nbaApi {
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

  /** Get Request for Player stats by optional parameters
   *
   * @param id Player ID (optional)
   * @param season Season ID (optional)
   * @param game Game ID (optional)
   * @param team Team ID (optional)
   *
   * @returns array of Player stats object
   */
  static async getPlayerStats(
    id: number,
    season: number,
    game: number,
    team: number
  ): Promise<PlayerStats> {
    const resp = await this.request("players/statistics", {
      id: id || "",
      game: game || "",
      team: team || "",
      season: season || "",
    });
    console.debug("getPlayerStats()", resp);
    return resp;
  }

  /** Get Request to search for players by optional params: last name or team
   *
   * @param search Player LastName (optional)
   * @param team Team ID (optional)
   *
   * @returns array of found Players object
   */
  static async getPlayers(search: string, team: number): Promise<Players> {
    const resp = await this.request("players/", {
      search: search || "",
      team: team || "",
    });
    console.debug("getPlayerStats()", resp);
    return resp;
  }
}

export default nbaApi;
