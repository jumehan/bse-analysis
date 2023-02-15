import { Card, CardBody, CardSubtitle, Row, Col, CardText } from "reactstrap";
import { PlayerDetailsData } from "../../types/playerDetails";
import { PlayerStatsData } from "../../types/playerStats";

interface PlayerTeamProps {
  player: PlayerDetailsData;
  team: PlayerStatsData["team"];
}

/** Construct a Player Team Card Component
 * Display Team Logo, Name & Player Jersey, Position
 * { PlayerProfile } -> { PlayerTeamCard }
 * @props team
 * @returns styled Card Component
 */
function PlayerTeamCard({ player, team }: PlayerTeamProps) {
  return (
    <Card style={{ marginBottom: "1.5rem" }}>
      <CardBody>
        <Row className="w-100">
          <Col className="w-100 justify-content-between">
            <CardSubtitle className="subtitle" tag="h6">
              TEAM
              <hr></hr>
            </CardSubtitle>
            <CardText className="medium">{team.name}</CardText>
          </Col>
          <div className="vr px-0"></div>
          <Col className="w-100 justify-content-between">
            <CardSubtitle className="subtitle" tag="h6">
              JERSEY | POS
              <hr></hr>
            </CardSubtitle>
            <CardText className="medium">
              {player.leagues.standard.jersey} {player.leagues.standard.pos}
            </CardText>
          </Col>
          <div className="vr px-0"></div>
          <Col className="w-100 justify-content-between">
            {team ? (
              <img
                style={{
                  width: "5rem",
                  position: "relative",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
                src={team.logo}
                alt={team.nickname}
              />
            ) : (
              "team unavailable"
            )}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default PlayerTeamCard;
