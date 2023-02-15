import { List, Row } from "reactstrap";

function GlossaryList() {
  return (
    <Row>
      <h3>Glossary</h3>
      <List type="inline" className="glossary muted">
        <li>
          <span className="medium">MIN: </span>Minutes Per Game
        </li>
        <li>
          <span className="medium">PTS: </span>Points Per Game
        </li>
        <li>
          <span className="medium">OR: </span>Offensive Rebounds Per Game
        </li>
        <li>
          <span className="medium">DR: </span>Defensive Rebounds Per Game
        </li>
        <li>
          <span className="medium">REB: </span>Rebounds Per Game
        </li>
        <li>
          <span className="medium">AST: </span>Assists Per Game
        </li>
        <li>
          <span className="medium">STL: </span>Steals Per Game
        </li>
        <li>
          <span className="medium">BLK: </span>Blocks Per Game
        </li>
        <li>
          <span className="medium">TO: </span>Turnovers Per Game
        </li>
        <li>
          <span className="medium">PF: </span>Fouls Per Game
        </li>
        <li>
          <span className="medium">AST/TO: </span>Assist To Turnover Ratio
        </li>
        <li>
          <span className="medium">FGM: </span>Average Field Goals Made
        </li>
        <li>
          <span className="medium">FGA: </span>Average Field Goals Attempted
        </li>
        <li>
          <span className="medium">FG%: </span>Field Goal Percentage
        </li>
        <li>
          <span className="medium">3PM: </span>Average 3-Point Field Goals Made
        </li>
        <li>
          <span className="medium">3PA: </span>Average 3-Point Field Goals Attempted
        </li>
        <li>
          <span className="medium">3P%: </span>3-Point Field Goal Percentage
        </li>
        <li>
          <span className="medium">FTM: </span>Average Free Throws Made
        </li>
        <li>
          <span className="medium">FTA: </span>Average Free Throws Attempted
        </li>
        <li>
          <span className="medium">FT%: </span>Free Throw Percentage
        </li>
        <li>
          <span className="medium">+/-: </span>Plus Minus
        </li>
      </List>
    </Row>
  );
}

export default GlossaryList;
