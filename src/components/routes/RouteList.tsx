import { Navigate, Route, Routes } from "react-router-dom";
import PlayerProfile from "../../pages/PlayerProfile";

/** RouteList component
 * Displays a list of routes
 * { App } -> { RouteList }
 * @returns {JSX.Element} List of routes
 */
function RouteList(): JSX.Element {
  return (
    <Routes>
      <Route path="/:id" element={<PlayerProfile />} />
      <Route path="/*" element={<Navigate to="/265" />} />
    </Routes>
  );
}

export default RouteList;
