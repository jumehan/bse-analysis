import { Fragment } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { PlayerStatsData } from "../../types/playerStats";

interface DataProps {
  data: PlayerStatsData[];
}

/** React Component
 * Displays chart with 3P%, FG% and FT% data for a player over a season
 * @prop data: player stats data
 * { App } -> { RouteList } -> { PlayerProfile } -> { PlayerStatsPercentageChart }
 */
function PlayerStatsPercentageChart({ data }: DataProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3
        style={{
          display: "inline-block",
          margin: "0 auto",
          marginBottom: "2",
        }}
      >
        3P%, FG% and FT%
      </h3> <br />
      <div className="smaller medium">
        <LineChart
          width={450}
          height={200}
          data={data}
          margin={{
            top: 5,
            right: 5,
            left: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="tpp" stroke="#8884d8" />
          <Line
            type="monotone"
            dataKey="fgp"
            stroke="#82ca9d"
            activeDot={{ r: 5 }}
          />
          <Line type="monotone" dataKey="ftp" stroke="#FFAC1C" />
        </LineChart>
      </div>
    </div>
  );
}

export default PlayerStatsPercentageChart;
