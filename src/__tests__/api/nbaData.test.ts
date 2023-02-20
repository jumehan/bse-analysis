import nbaData from "../../api/nbaData";

describe("nbaData", () => {
  /** Testing the getPlayerIdByName method */
  describe("getPlayerIdByName", () => {
    it("returns player ID for valid player", () => {
      const playerId = nbaData.getPlayerIdByName(
        "Luka",
        "Doncic",
        "1999-02-28"
      );
      expect(playerId).toEqual("1629029");
    });

    it("returns empty string for invalid player", () => {
      const playerId = nbaData.getPlayerIdByName("Invalid", "Player", "1990-01-01");
      expect(playerId).toEqual("");
    });
  });
});
