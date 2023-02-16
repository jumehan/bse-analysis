import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row as R } from "react-table";
import { Col, Row } from "reactstrap";
import nbaApi from "../api/nbaApi";
import nbaData from "../api/nbaData";
import GlossaryList from "../components/layout/GlossaryListFooter";
import LoadingSpinner from "../components/ui-components/extended/Spinner";
import GameDetailsCard from "../components/ui-components/GameDetailsCard";
import PlayerProfileCard from "../components/ui-components/PlayerProfileCard";
import PlayerProfileList from "../components/ui-components/PlayerProfileList";
import PlayerShootingStatsTable from "../components/ui-components/PlayerShootingStatsTable";
import PlayerStatsChart from "../components/ui-components/PlayerStatsChart";
import PlayerStatsPercentageChart from "../components/ui-components/PlayerStatsPercentageChart";
import PlayerTeamCard from "../components/ui-components/PlayerTeamCard";
import SearchForm from "../components/ui-components/SearchForm";
import { PlayerDetailsData } from "../types/playerDetails";
import { PlayerStatsData } from "../types/playerStats";

interface PlayerProfile {
  details?: PlayerDetailsData;
  stats?: PlayerStatsData[];
  personId?: string;
  isLoading: boolean;
}

/** Player Profile Page
 * Displays the player profile incl. bio, stats, data table, etc.
 * State: stores player data { details, stats, personId, isLoading }
 * { App } -> { RouteList } -> { ProfilePage }
 */
function PlayerProfile() {
  const [player, setPlayer] = useState<PlayerProfile>({
    details: undefined,
    stats: undefined,
    personId: undefined,
    isLoading: true,
  });
  const { id } = useParams();
  const season = "2022"; // hardcoded, future versions could change

  useEffect(
    function fetchPlayerDetail() {
      async function fetchPlayer() {
        const playerDetails = await nbaApi.getPlayerDetails(id || "2855");
        const playerStats = await nbaApi.getPlayerStats(id || "2855", season);
        const personId = nbaData.getPlayerId(
          playerDetails?.response[0].firstname,
          playerDetails?.response[0].lastname
        );
        setPlayer({
          details: playerDetails.response[0],
          stats: playerStats.response,
          personId: personId,
          isLoading: false,
        });
      }
      fetchPlayer();
    },
    [id]
  );

  const renderRowSubComponent = (row: R<PlayerStatsData>) => {
    const {
      game: { id },
    } = row.original;
    return <GameDetailsCard id={id} />;
  };

  if (player.isLoading || !player.details || !player.stats) {
    return <LoadingSpinner />;
  }

  return (
    <React.Fragment>
      <Row className="align-items-start">
        <Col sm="4" className="px-2">
          <PlayerProfileCard
            player={player.details}
            id={player.personId || ""}
          />
        </Col>
        <Col className="px-2" sm="8">
          <SearchForm />
          <PlayerTeamCard team={player.stats[0].team} player={player.details} />
          <PlayerProfileList player={player.details} />
        </Col>
        <Row >
          <Col md={6}>
            <PlayerStatsChart data={player.stats} />
          </Col>
          <Col md={6}>
            <PlayerStatsPercentageChart data={player.stats} />
          </Col>
        </Row>
        <PlayerShootingStatsTable
          data={player.stats}
          season={season}
          renderRowSubComponent={renderRowSubComponent}
        />
      </Row>
      <hr />
      <GlossaryList />
    </React.Fragment>
  );
}

export default PlayerProfile;
