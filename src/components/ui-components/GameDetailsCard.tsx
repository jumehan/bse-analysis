import nbaApi from "../../api/nbaApi";
import { useEffect, useState } from "react";
import { Card, ListGroup, ListGroupItem } from "reactstrap";
import { GameDetailsData } from "../../types/gameDetails";
import moment from "moment";

interface GameIdProp {
  id: number;
}

interface Game {
  data: GameDetailsData;
  isLoading: boolean;
}

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

  if (game.isLoading) return <i>Loading...</i>;

  return (
    <ListGroup horizontal>
      <ListGroupItem className="w-100 justify-content-between">
        <p className="subtitle small">Date: </p>
        <p className="medium">
          {game.data?.date?.start ? moment(game.data.date.start).utc().format("YYYY-MM-DD") : ""}
        </p>
      </ListGroupItem>
      <ListGroupItem className="w-100 justify-content-between">
        <p className="subtitle">Home: </p>
        <p className="medium">{game.data?.teams?.home?.nickname}</p>
        <img
          style={{
            width: "1.5rem",
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          src={game.data?.teams?.home?.logo}
          alt={game.data?.teams?.home?.nickname}
        />
      </ListGroupItem>
      <ListGroupItem className="w-100 justify-content-between">
        <p className="subtitle">Visitors: </p>
        <p className="medium">{game.data?.teams?.visitors?.nickname}</p>
        <img
          style={{
            width: "1.5rem",
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          src={game.data?.teams?.visitors?.logo}
          alt={game.data?.teams?.visitors?.nickname}
        />
      </ListGroupItem>
      <ListGroupItem className="w-100 justify-content-between">
        <p className="subtitle">Score: </p>
        <p className="medium">{game.data?.scores?.home?.points}</p> vs&nbsp;
        <p className="medium">{game.data?.scores?.visitors?.points}</p>
      </ListGroupItem>
    </ListGroup>
  );
}

export default GameDetailsCard;
