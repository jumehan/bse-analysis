import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { PlayerStatsData } from "../../types/playerStats";

interface DataProps {
  data: PlayerStatsData[];
}

/** React Component
 * Displays chart with AST to TO data for a player over a season
 * @props data: player stats data
 * { App } -> { RouteList } -> { PlayerProfile } -> { PlayerStatsChart }
 */
function PlayerStatsChart({ data }: DataProps) {
  return (
    <div className="chart-container">
      <h4 className="chart-title">AST / TO</h4>
      <br />
      <div className="smaller medium pb-3">
        <BarChart
          width={450}
          height={200}
          data={data}
          margin={{
            top: 5,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="1 5" />
          <XAxis
            aria-label="game"
            label={{ value: "game", position: "insideBottom" }}
          />
          <YAxis
            label={{ value: "#", position: "insideLeft" }}
            tickFormatter={(value) => value.toFixed(1)}
            aria-label="count"
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="assists" fill="#2963A2" />
          <Bar dataKey="turnovers" fill="#4CAABC" />˝
        </BarChart>
      </div>
    </div>
  );
}

export default PlayerStatsChart;
