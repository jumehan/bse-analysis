import React, { lazy, Suspense, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row as R } from "react-table";
import { Col, Row } from "reactstrap";
import nbaApi from "../api/nbaApi";
import nbaData from "../api/nbaData";
import GlossaryList from "../components/layout/GlossaryListFooter";
import LoadingSpinner from "../components/ui-components/extended/Spinner";
import GameDetailsCard from "../components/ui-components/GameDetailsCard";
import { PlayerDetailsData } from "../types/playerDetails";
import { PlayerStatsData } from "../types/playerStats";

// import components using lazy
const PlayerProfileCard = lazy(
  () => import("../components/ui-components/PlayerProfileCard")
);
const SearchForm = lazy(() => import("../components/ui-components/SearchForm"));
const PlayerTeamCard = lazy(
  () => import("../components/ui-components/PlayerTeamCard")
);
const PlayerProfileList = lazy(
  () => import("../components/ui-components/PlayerProfileList")
);
const PlayerStatsChart = lazy(
  () => import("../components/ui-components/PlayerStatsChart")
);
const PlayerStatsPercentageChart = lazy(
  () => import("../components/ui-components/PlayerStatsPercentageChart")
);
const PlayerShootingStatsTable = lazy(
  () => import("../components/ui-components/PlayerShootingStatsTable")
);

const DEFAULT_PLAYER_ID = "153";
const SEASON = "2022"; // hardcoded, future versions could change

interface PlayerProfileProps {
  details?: PlayerDetailsData;
  stats?: PlayerStatsData[];
  personId: string;
  isLoading: boolean;
}

/** Player Profile Page
 * Displays the player profile incl. bio, stats, data table, etc.
 * State: stores player data { details, stats, personId, isLoading }
 * { App } -> { AppRoutes } -> { PlayerProfile }
 * @returns Player Profile Page
 */
function PlayerProfile() {
  const [player, setPlayer] = useState<PlayerProfileProps>({
    details: undefined,
    stats: undefined,
    personId: "",
    isLoading: true,
  });
  const [error, setError] = useState<Error | null>(null);
  const { id } = useParams();
  const season = SEASON;

  useEffect(
    function fetchPlayerDetail() {
      async function fetchPlayer() {
        try {
          const { response: playerDetails } = await nbaApi.getPlayerDetails(
            id || DEFAULT_PLAYER_ID
          );
          const { response: playerStats } = await nbaApi.getPlayerStats(
            id || DEFAULT_PLAYER_ID,
            SEASON
          );
          const personId = nbaData.getPlayerIdByName(
            playerDetails[0].firstname,
            playerDetails[0].lastname,
            playerDetails[0].birth?.date
          );
          setPlayer({
            details: playerDetails[0],
            stats: playerStats,
            personId: personId,
            isLoading: false,
          });
        } catch (err) {
          console.error(err);
          setError(err as Error);
        }
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

  // TODO: handle error more elegantly in future versions
  if (error) {
    return <div>"Failed to fetch player data"</div>;
  }

  if (player.isLoading || !player.details || !player.stats) {
    return <LoadingSpinner />;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
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
            <PlayerTeamCard
              team={player.stats[0].team}
              player={player.details}
            />
            <PlayerProfileList player={player.details} />
          </Col>
          <Row>
            <Col lg={6}>
              {" "}
              <PlayerStatsChart data={player.stats} />
            </Col>
            <Col lg={6}>
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
    </Suspense>
  );
}

export default PlayerProfile;
