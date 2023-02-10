import { Navigate, Route, Routes } from "react-router-dom";

/** RouteList component
 * Displays a list of routes
 *
 * @returns {Component} List of routes
 */
function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<h1>hi</h1>} />
      <Route path="/*" element={<Navigate to="/" />} /> 
    </Routes>
  );
}

export default RouteList;