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
 * @props player, team
 * @returns styled Card Component
 */
function PlayerTeamCard({ player, team }: PlayerTeamProps) {
  if (!team) return <div>team info unavailable</div>;

  return (
    <Card style={{ marginBottom: "1.5rem" }}>
      <CardBody>
        <Row>
          <Col>
            <CardSubtitle className="subtitle" tag="h6">
              TEAM
              <hr />
            </CardSubtitle>
            <CardText className="medium">{team.name}</CardText>
          </Col>
          <div className="vr px-0"></div>
          <Col>
            <CardSubtitle className="subtitle" tag="h6">
              JERSEY | POS
              <hr />
            </CardSubtitle>
            <CardText className="medium">
              {player.leagues.standard.jersey} {player.leagues.standard.pos}
            </CardText>
          </Col>
          <div className="vr px-0"></div>
          <Col>
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
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}

export default PlayerTeamCard;
