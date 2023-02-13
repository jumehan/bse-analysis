import * as players from "../data/nbaPlayers.json" assert { type: 'JSON' };

/** Class for managing data from json file obtained from NBA Data API */
class nbaData {

  /**
   * @param {string} firstname
   * @param {string} lastname
   * @return {string} NBA Data API person id number for player
   */
  static getPlayerId(firstname: string, lastname: string): string {
    const player = players.league.standard.filter(
      (player) =>
        player.firstName === firstname && player.lastName === lastname
    );
    console.debug("getPlayerId", player);
    return player[0].personId;
  }
}

export default nbaData;
