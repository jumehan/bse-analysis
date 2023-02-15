import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import { PlayerDetailsData } from "../../types/playerDetails";
import getAge from "../../utils/getAge";

interface PlayerProfileProps {
  player: PlayerDetailsData;
  id: string;
}

/** Construct a Player Profile Card Component
 * Display a player's name, age, and profile picture
 * { PlayerProfile } -> { PlayerProfileCard }
 * @props player
 * @props id
 * @returns styled Card Component
 */
function PlayerProfileCard({ player, id }: PlayerProfileProps) {
  const imgUrl = import.meta.env.VITE_NBA_PLAYER_IMG;

  return (
    <Card style={{ marginBottom: "1.5rem" }}>
      {id.length ? (
        <img alt="player headshot" src={`${imgUrl}/${id}.png`} />
      ) : (
        <img
          alt="placeholder image"
          src="https://picsum.photos/id/135/318/180?grayscale&blur=10"
          width="100%"
        />
      )}
      <CardBody>
        <CardTitle tag="h5">
          {player.firstname} {player.lastname}
        </CardTitle>
        <CardSubtitle className="subtitle" tag="h6">
          Birthdate: {player.birth.date} ({getAge(player.birth.date)})
        </CardSubtitle>
      </CardBody>
    </Card>
  );
}

export default PlayerProfileCard;
