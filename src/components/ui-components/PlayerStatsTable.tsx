import React from "react";
import { Table } from "reactstrap";
import { PlayerStatsData } from "../../types/playerStats";

interface PlayerStatsTableProps {
  stats: PlayerStatsData[];
  season: string;
}

function PlayerStatsTable({ stats, season }: PlayerStatsTableProps) {
  return (
    <React.Fragment>
      <h6>Shooting stats per Game</h6>
      <Table size="sm" striped title="Shooting stats per Game">
        <caption>Player shooting stats per Game</caption>
        <thead>
          <tr>
            <th>#</th>
            <th><abbr title="Points">pts</abbr></th>
            <th><abbr title="Position">pos</abbr></th>
            <th><abbr title="Minutes per Game">min</abbr></th>
            <th><abbr title="Average Field Goals Made">fgm</abbr></th>
            <th><abbr title="Average Field Goals Attempted">fga</abbr></th>
            <th><abbr title="Field Goal Percentage">fg%</abbr></th>
            <th><abbr title="Average Free Throws Made">ftm</abbr></th>
            <th><abbr title="Average Free Throws Attempted">fta</abbr></th>
            <th><abbr title="Free Throws Percentage">ft%</abbr></th>
            <th><abbr title="Average 3-Point Field Goals Made">3pm</abbr></th>
            <th><abbr title="Average 3-Point Field Goals Attempted">3pa</abbr></th>
            <th><abbr title="3-Point Field Goals Percentage">3p%</abbr></th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat) => (
            <tr key={stat.game.id + "T1"}>
              <th scope="row">{stat.game.id}</th>
              <td>{stat.points}</td>
              <td>{stat.pos}</td>
              <td>{stat.min}</td>
              <td>{stat.fgm}</td>
              <td>{stat.fga}</td>
              <td>{stat.fgp}</td>
              <td>{stat.ftm}</td>
              <td>{stat.fta}</td>
              <td>{stat.ftp}</td>
              <td>{stat.tpm}</td>
              <td>{stat.tpa}</td>
              <td>{stat.tpp}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Table size="sm">
        <thead>
          <tr style={{ fontSize: "x-small" }}>
            <th>#</th>
            <th>offReb</th>
            <th>defReb</th>
            <th>totReb</th>
            <th>assists</th>
            <th>pFouls</th>
            <th>steals</th>
            <th>turnovers</th>
            <th>blocks</th>
            <th>plusMinus</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat) => (
            <tr key={stat.game.id + "T2"}>
              <th scope="row">{stat.game.id}</th>
              <td>{stat.offReb}</td>
              <td>{stat.defReb}</td>
              <td>{stat.totReb}</td>
              <td>{stat.assists}</td>
              <td>{stat.pFouls}</td>
              <td>{stat.steals}</td>
              <td>{stat.turnovers}</td>
              <td>{stat.blocks}</td>
              <td>{stat.plusMinus}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </React.Fragment>
  );
}

export default PlayerStatsTable;
