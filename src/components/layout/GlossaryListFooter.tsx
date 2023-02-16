import { List, Row } from "reactstrap";

/** Glossary List Footer Component
 * { App } -> { RouteList } -> { PlayerProfile } -> { GlossaryList }
 * Displays a list of NBA stat abbreviations
 * @returns styled Component
 */
function GlossaryList() {
  const abbreviations = [
    { abbr: "MIN", description: "Minutes Per Game" },
    { abbr: "PTS", description: "Points Per Game" },
    { abbr: "OR", description: "Offensive Rebounds Per Game" },
    { abbr: "DR", description: "Defensive Rebounds Per Game" },
    { abbr: "REB", description: "Rebounds Per Game" },
    { abbr: "AST", description: "Assists Per Game" },
    { abbr: "STL", description: "Steals Per Game" },
    { abbr: "BLK", description: "Blocks Per Game" },
    { abbr: "TO", description: "Turnovers Per Game" },
    { abbr: "PF", description: "Fouls Per Game" },
    { abbr: "AST/TO", description: "Assist To Turnover Ratio" },
    { abbr: "FGM", description: "Average Field Goals Made" },
    { abbr: "FGA", description: "Average Field Goals Attempted" },
    { abbr: "FG%", description: "Field Goal Percentage" },
    { abbr: "3PM", description: "Average 3-Point Field Goals Made" },
    { abbr: "3PA", description: "Average 3-Point Field Goals Attempted" },
    { abbr: "3P%", description: "3-Point Field Goal Percentage" },
    { abbr: "FTM", description: "Average Free Throws Made" },
    { abbr: "FTA", description: "Average Free Throws Attempted" },
    { abbr: "FT%", description: "Free Throw Percentage" },
    { abbr: "+/-", description: "Plus Minus" },
  ];

  return (
    <Row>
      <h3>Glossary</h3>
      <List type="inline" className="glossary muted">
        {abbreviations.map(({ abbr, description }) => (
          <li key={abbr}>
            <abbr title={description} className="medium">
              {abbr}:{" "}
            </abbr>
            {description}
          </li>
        ))}
      </List>
    </Row>
  );
}

export default GlossaryList;
