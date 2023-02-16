/** import json data as a module to bypass CORS err from NBA DATA API */
import * as players from "../data/nbaPlayers.json" assert { type: "JSON" };

/** Class for managing data from NBA DATA 2022 PLAYERS json file
 * source URL: https://data.nba.net/data/10s/prod/v1/2022/players.json
 */
class nbaData {
  /** Fetch id for a player
   * Finds a player by name & date of birth
   * @param {string} firstname
   * @param {string} lastname
   * @param {string} birthdate
   * @returns {string} personId value for player or null if not found
   */
  static getPlayerIdByName(
    firstname: string,
    lastname: string,
    birthdate: string
  ): string {
    const player = players.league.standard.filter(
      (p) =>
        p.firstName === firstname &&
        p.lastName === lastname &&
        p.dateOfBirthUTC === birthdate
    );
    console.debug("getPlayerIdByName", player);
    return player[0]?.personId ?? "";
  }
}

export default nbaData;
