import { Navigate, Route, Routes } from "react-router-dom";
import PlayerProfile from "../../pages/PlayerProfile";

/** RouteList component
 * Displays a list of routes
 *
 * @returns {Component} List of routes
 */
function RouteList() {
  return (
    <Routes>
      <Route path="/:id" element={<PlayerProfile />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;
