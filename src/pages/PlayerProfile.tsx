import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import nbaApi from "../api/nbaApi";
import nbaData from "../api/nbaData";
import PlayerProfileCard from "../components/ui-components/PlayerProfileCard";
import PlayerProfileList from "../components/ui-components/PlayerProfileList";
import { PlayerDetailsData } from "../types/playerDetails";

interface PlayerProfile {
  data?: PlayerDetailsData;
  personId?: string;
  isLoading: boolean;
}

/**  */
function PlayerProfile() {
  const [player, setPlayer] = useState<PlayerProfile>({
    data: undefined,
    personId: undefined,
    isLoading: true,
  });
  const { id } = useParams();

  useEffect(
    function fetchPlayerDetail() {
      async function fetchPlayer() {
        const result = await nbaApi.getPlayerDetails(id || "2855");
        const personId = nbaData.getPlayerId(
          result?.response[0].firstname,
          result?.response[0].lastname
        );
        setPlayer({
          data: result?.response[0],
          personId: personId,
          isLoading: false,
        });
      }
      fetchPlayer();
    },
    [id]
  );

  if (player.isLoading || !player.data || !player.personId)
    return <i>Loading...</i>;

  return (
    <React.Fragment>
      <div className="row align-items-start">
        <PlayerProfileCard player={player.data} id={player.personId} />
        <PlayerProfileList player={player.data} />
      </div>
    </React.Fragment>
  );
}

export default PlayerProfile;
