import axios from "axios";
import { PlayerDetails } from "../types/playerDetails";
import { Players } from "../types/players";
import { PlayerStats } from "../types/playerStats";

/** Global constants */
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/** API class for managing data requests for NBA data from rapidAPI */
class nbaApi {
  /** Base request constructor */
  static async request(endpoint: string, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
    };
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err);
    }
  }

  /************************************************ | Individual Api Routes | */

  /** Get Request for Player details by id
   *
   * @param id Player ID = string number
   *
   * @returns array of Player details object
   */
  static async getPlayerDetails(id: string): Promise<PlayerDetails> {
    const resp = await this.request("players/", {
      id: id || "",
    });
    console.debug("getPlayerDetails()", resp);
    return resp;
  }

  /** Get Request for Player stats by id & season
   *
   * @param id Player ID = string number
   * @param season Season ID =  string number
   *
   * @returns array of Player stats object
   */
  static async getPlayerStats(
    id: string,
    season: string
  ): Promise<PlayerStats> {
    const resp = await this.request("players/statistics", {
      id: id || "",
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
    console.debug("getPlayers()", resp);
    return resp;
  }
}

export default nbaApi;
