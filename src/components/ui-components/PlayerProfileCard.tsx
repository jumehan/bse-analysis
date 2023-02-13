import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { PlayerDetailsData } from "../../types/playerDetails";
import getAge from "../../utils/getAge";

interface PlayerProfileProps {
  player: PlayerDetailsData;
  id: string;
}

/** Construct a Player Profile Card Component
 * 2/3 width of the page and display a user's name, age, and profile picture
 * @props player
 * @props id
 * @returns styled Card Component
 */
function PlayerProfileCard({ player, id }: PlayerProfileProps) {
  const imgUrl = import.meta.env.VITE_NBA_PLAYER_IMG;

  return (
    <div className="col-3 mx-auto px-2">
      <Card style={{ width: "18rem" }}>
        <img alt="player headshot" src={`${imgUrl}/${id}.png`} />
        <CardBody>
          <CardTitle tag="h5">
            {player.firstname} {player.lastname}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Birthdate: {player.birth.date} ({getAge(player.birth.date)})
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default PlayerProfileCard;
