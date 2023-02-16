import moment from "moment";
import { useEffect, useState } from "react";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import nbaApi from "../../api/nbaApi";
import { GameDetailsData } from "../../types/gameDetails";
import LoadingSpinner from "./extended/Spinner";

/** id prop type */
interface GameIdProp {
  id: number;
}

/** game state type */
interface GameCardState {
  data: GameDetailsData;
  isLoading: boolean;
}

/** Component that displays a Win or Loss badge
 * @params scoreA, scoreB {string} ex: "128"
 * @returns Component | null if score(s) unavailable
 */
function WinLossBadge(scoreA: number | undefined, scoreB: number | undefined) {
  if (!scoreA || !scoreB) return null;
  const win = scoreA > scoreB;
  return (
    <Badge className="smaller" color={win ? "success" : "danger"} pill>
      {win ? `W ${scoreA}` : `L ${scoreA}`}
    </Badge>
  );
}

/** Component that displays linescores
 * @params linescores { string[] } ex: ["20", ...]
 * @returns Component | null if linescore unavailable
 */
function LineScore(linescore: string[] | undefined) {
  if (!linescore || !linescore.length) return null;
  return <p className="medium">| {linescore.join(" | ")} |</p>;
}

/** React Component
 * props: id
 * state: game data & loading state
 * { PlayerProfile } -> { PlayerShootingStatsTable } -> { GameDetailsCard }
 * @returns styled Card Component that displays date, teams, scores of a game by id
 */
function GameDetailsCard({ id }: GameIdProp) {
  const [game, setGame] = useState<GameCardState>({
    data: {},
    isLoading: true,
  });

  useEffect(
    function fetchGameDetails() {
      async function fetchGame() {
        const result = await nbaApi.getGameDetails(`${id}`);
        setGame({ data: result.response[0], isLoading: false });
      }
      fetchGame();
    },
    [id]
  );

  if (game.isLoading) return <LoadingSpinner />;

  const { scores, teams, date } = game.data;

  return (
    <ListGroup horizontal>
      <ListGroupItem className="w-50 justify-content-between">
        <p className="subtitle small">Date: </p>
        <p className="medium">
          {date?.start ? moment(date.start).utc().format("YYYY-MM-DD") : ""}
        </p>
      </ListGroupItem>
      <ListGroupItem className="w-100 justify-content-between">
        <p className="subtitle">Home: </p>
        <p className="medium">{teams?.home?.nickname} </p>
        {WinLossBadge(scores?.home?.points, scores?.visitors?.points)}
        <span className="medium">
          &nbsp; {LineScore(scores?.visitors?.linescore)}
        </span>
        <img
          className="game-logo"
          src={teams?.home?.logo}
          alt={teams?.home?.nickname}
        />
      </ListGroupItem>
      <ListGroupItem className="w-100 justify-content-between">
        <p className="subtitle">Visitors: </p>
        <p className="medium">{teams?.visitors?.nickname} </p>
        {WinLossBadge(scores?.visitors?.points, scores?.home?.points)}
        <span className="medium">
          &nbsp; {LineScore(scores?.visitors?.linescore)}
        </span>
        <img
          className="game-logo"
          src={teams?.visitors?.logo}
          alt={teams?.visitors?.nickname}
        />
      </ListGroupItem>
    </ListGroup>
  );
}

export default GameDetailsCard;
