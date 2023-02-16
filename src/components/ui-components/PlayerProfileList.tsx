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
  const { height, weight, nba, college } = player;

  const items = [
    { title: "Height:", value: `${height.feets}' ${height.inches}"` },
    { title: "Weight:", value: `${weight.pounds} lbs` },
    { title: "Start:", value: nba.start },
    { title: "College:", value: college },
  ];

  return (
    <>
      <ListGroup horizontal style={{ marginBottom: "1.5rem" }}>
        {items.map((item, index) => (
          <ListGroupItem key={index} className="w-75 justify-content-between">
            <p className="subtitle">{item.title}</p>
            <p className="medium">{item.value}</p>
          </ListGroupItem>
        ))}
      </ListGroup>
    </>
  );
}

export default PlayerProfileList;
