import LoadingSpinner from "../../components/ui-components/extended/Spinner";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import PlayerProfile from "../../pages/PlayerProfile";
const PlayerProfile = lazy(() => import("../../pages/PlayerProfile"));

/** RouteList component
 * Displays a list of routes
 * { App } -> { RouteList }
 * @returns {JSX.Element} List of routes
 */
function RouteList(): JSX.Element {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/:id" element={<PlayerProfile />} />
        <Route path="/*" element={<Navigate to="/265" />} />
      </Routes>
    </Suspense>
  );
}

export default RouteList;
