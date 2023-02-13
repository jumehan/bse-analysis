import nbaApi from "../../api/nbaApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  ListGroup,
  ListGroupItem,
} from "reactstrap";
import { PlayerDetailsData } from "../../types/playerDetails";
import getAge from "../../utils/getAge";
import nbaData from "../../api/nbaData";

interface PlayerProfile {
  data?: PlayerDetailsData;
  personId?: string;
  isLoading: boolean;
}

/**  */
function PlayerProfile() {
  const [player, setPlayer] = useState<PlayerProfile>({
    data: undefined,
    personId: undefined,
    isLoading: true,
  });
  const { id } = useParams();
  const season = "";
  const imgUrl = import.meta.env.VITE_NBA_PLAYER_IMG;

  useEffect(
    function fetchPlayerDetail() {
      async function fetchPlayer() {
        const result = await nbaApi.getPlayerDetails(id ? id : "2855");
        setPlayer({
          data: result?.response[0],
          isLoading: true,
        });
        const personId = nbaData.getPlayerId(
          player.data!.firstname,
          player.data!.lastname
        );
        setPlayer({
          data: result?.response[0],
          personId: personId,
          isLoading: false,
        });
      }
      fetchPlayer();
    },
    [id]
  );

  return (
    <Card
      style={{
        width: "18rem",
      }}
    >
      <img alt="player headshot" src={`${imgUrl}/${player.personId}.png`} />
      <CardBody>
        <CardTitle tag="h5">
          {player.data?.firstname} {player.data?.lastname}
        </CardTitle>
        {player.data?.birth?.date ? (
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Birthdate: {player.data.birth.date} (
            {getAge(player.data.birth.date)})
          </CardSubtitle>
        ) : null}
        <CardText></CardText>
        <Button>Button</Button>
      </CardBody>
        <ListGroup horizontal>
          <ListGroupItem></ListGroupItem>
        </ListGroup>
    </Card>
  );
}

export default PlayerProfile;
