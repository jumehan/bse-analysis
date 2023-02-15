import nbaApi from "../../api/nbaApi";
import { useEffect, useState } from "react";
import { Badge, ListGroup, ListGroupItem } from "reactstrap";
import { GameDetailsData } from "../../types/gameDetails";
import moment from "moment";
import LoadingSpinner from "./extended/Spinner";

/** id prop type */
interface GameIdProp {
  id: number;
}

/** game state type */
interface Game {
  data: GameDetailsData;
  isLoading: boolean;
}

/** React Component
 * props: id
 * state: game data & loading state
 * { PlayerProfile } -> { PlayerShootingStatsTable } -> { GameDetailsCard }
 * @returns styled Card Component that displays date, teams, scores of a game by id
 */
function GameDetailsCard({ id }: GameIdProp) {
  const [game, setGame] = useState<Game>({ data: {}, isLoading: true });

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

  return (
    <ListGroup horizontal>
      <ListGroupItem className="w-50 justify-content-between">
        <p className="subtitle small">Date: </p>
        <p className="medium">
          {game.data?.date?.start
            ? moment(game.data.date.start).utc().format("YYYY-MM-DD")
            : ""}
        </p>
      </ListGroupItem>
      <ListGroupItem className="w-100 justify-content-between">
        <p className="subtitle">Home: </p>
        <p className="medium">{game.data?.teams?.home?.nickname} </p>
        {WinLossBadge(
          game.data.scores?.home.points,
          game.data.scores?.visitors.points
        )}
        <p className="medium">
          &nbsp; {LineScore(game.data?.scores?.visitors?.linescore)}
        </p>
        <img
          style={{
            width: "1.5rem",
            position: "relative",
            float: "right",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          src={game.data?.teams?.home?.logo}
          alt={game.data?.teams?.home?.nickname}
        />
      </ListGroupItem>
      <ListGroupItem className="w-100 justify-content-between">
        <p className="subtitle">Visitors: </p>
        <p className="medium">{game.data?.teams?.visitors?.nickname} </p>
        {WinLossBadge(
          game.data.scores?.visitors.points,
          game.data.scores?.home.points
        )}
        <p className="medium">
          &nbsp; {LineScore(game.data?.scores?.visitors?.linescore)}
        </p>
        <img
          style={{
            width: "1.5rem",
            position: "relative",
            float: "right",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
          src={game.data?.teams?.visitors?.logo}
          alt={game.data?.teams?.visitors?.nickname}
        />
      </ListGroupItem>
    </ListGroup>
  );
}

export default GameDetailsCard;

/* | Individual Custom Components | */

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
  return <p className="medium">| {linescore.map((score) => ` ${score} |`)}</p>;
}
