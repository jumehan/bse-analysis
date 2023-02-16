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

function PlayerStatsChart({ data }: DataProps) {
  return (
    <div style={{ textAlign: "center" }}>
      <h3
        style={{
          display: "inline-block",
          margin: "0 auto",
          marginBottom: "2",
        }}
      >
        AST / TO
      </h3>{" "}
      <br />{" "}
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
          <Line
            type="monotone"
            dataKey="assists"
            stroke="#8884d8"
            activeDot={{ r: 5 }}
          />
          <Line type="monotone" dataKey="turnovers" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}

export default PlayerStatsChart;
