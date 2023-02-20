/* eslint-env jest */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PlayerStatsChart from "../../components/ui-components/PlayerStatsChart";

describe("PlayerStatsChart", () => {
  it("renders chart with AST to TO data", () => {
    const data = [
      {
        team: { name: "test team" },
        game: { id: 1 },
        assists: 5,
        turnovers: 2,
      },
      {
        team: { name: "test team" },
        game: { id: 2 },
        assists: 3,
        turnovers: 1,
      },
      {
        team: { name: "test team" },
        game: { id: 3 },
        assists: 6,
        turnovers: 3,
      },
    ];
    render(<PlayerStatsChart data={data} />);
    expect(screen.getByText("AST / TO")).toBeInTheDocument();
    expect(
      screen.getByLabelText("game", {
        selector: "line.recharts-cartesian-axis-line",
      })
    ).toBeInTheDocument();
    expect(screen.getAllByLabelText("count")[0]).toBeInTheDocument();
    expect(screen.getByText("assists")).toBeInTheDocument();
    expect(screen.getByText("turnovers")).toBeInTheDocument();
  });
});
