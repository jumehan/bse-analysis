import { ListGroup, ListGroupItem } from "reactstrap";
import { PlayerDetailsData } from "../../types/playerDetails";

interface PlayerProfileListProps {
  player: PlayerDetailsData;
}

/** Construct a Player Profile ListComponent
 * Display a player's bio details: height, weight, start and college information
 * { PlayerProfile } -> { PlayerProfileList }
 * @props player
 * @returns styled List Component
 */
function PlayerProfileList({ player }: PlayerProfileListProps) {
  return (
    <ListGroup horizontal style={{ marginBottom: "1.5rem" }}>
      <ListGroupItem className="w-75 justify-content-between">
        <p className="subtitle">Height: </p>
        <p className="medium">
          {player.height.feets}' {player.height.inches}"
        </p>
      </ListGroupItem>
      <ListGroupItem className="w-75 justify-content-between">
        <p className="subtitle">Weight: </p>
        <p className="medium">{player.weight.pounds} lbs</p>
      </ListGroupItem>
      <ListGroupItem className="w-75 justify-content-between">
        <p className="subtitle">Start: </p>
        <p className="medium">{player.nba.start}</p>
      </ListGroupItem>
      <ListGroupItem className="w-100 justify-content-between">
        <p className="subtitle">College: </p>
        <p className="medium">{player.college}</p>
      </ListGroupItem>
    </ListGroup>
  );
}

export default PlayerProfileList;
