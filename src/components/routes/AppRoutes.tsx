import LoadingSpinner from "../ui-components/extended/Spinner";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const PlayerProfile = lazy(() => import("../../pages/PlayerProfile"));
const NotFound = lazy(() => import("../../pages/NotFound"));

/** RouteList component
 * Displays a list of routes
 * { App } -> { AppRoutes }
 * @returns {JSX.Element} List of routes
 */
function AppRoutes(): JSX.Element {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/players/:id" element={<PlayerProfile />} />
        <Route path="/*" element={<Navigate to="/players/265" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
