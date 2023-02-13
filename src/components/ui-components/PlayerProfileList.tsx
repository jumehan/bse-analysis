import { Card, ListGroup, ListGroupItem } from "reactstrap";
import { PlayerDetailsData } from "../../types/playerDetails";

interface PlayerProfileListProps {
  player: PlayerDetailsData;
}

function PlayerProfileList({ player }: PlayerProfileListProps) {
  return (
    <div className="col-8 mx-auto px-2">
      <ListGroup horizontal className="w-100">
        <ListGroupItem className="w-75 justify-content-between">
          <p className="text-muted">Height: </p>
          <p className="medium">
            {player.height.feets}' {player.height.inches}"
          </p>
        </ListGroupItem>
        <ListGroupItem className="w-75 justify-content-between">
          <p className="text-muted">Weight: </p>
          <p className="medium">{player.weight.pounds} lbs</p>
        </ListGroupItem>
        <ListGroupItem className="w-75 justify-content-between">
          <p className="text-muted">Start: </p>
          <p className="medium">{player.nba.start}</p>
        </ListGroupItem>
        <ListGroupItem className="w-100 justify-content-between">
          <p className="text-muted">College: </p>
          <p className="medium">{player.college}</p>
        </ListGroupItem>
      </ListGroup>
      <Card className="my-3">
        <>
        {player.leagues.standard.jersey} //
        {player.nba.pro} //
        {player.leagues.standard.active} //
        {player.leagues.standard.pos} //
        </>
      </Card>
    </div>
  );
}

export default PlayerProfileList;
