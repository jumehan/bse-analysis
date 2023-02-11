import nbaApi from "../../api/nbaApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PlayerStats } from "../../types/playerStats";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import { PlayerDetails } from "../../types/playerDetails";

interface PlayerProfile {
  data: null | PlayerDetails["response"];
  isLoading: boolean;
}

function PlayerProfile() {
  const [player, setPlayer] = useState<PlayerProfile>({
    data: null,
    isLoading: true,
  });

  const { id } = useParams();
  const season = "";

  useEffect(
    function fetchPlayerDetail() {
      async function fetchPlayer() {
        const result = await nbaApi.getPlayerDetails(id ? id : "2855");
        setPlayer({
          data: result?.response,
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
      <img alt="Sample" src="https://picsum.photos/300/200" />
      <CardBody>
        {/* <CardTitle tag="h5">{player.data && player.data.firstname}</CardTitle> */}
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Card subtitle
        </CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card‘s content.
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
}

export default PlayerProfile;
