import { BrowserRouter } from "react-router-dom";
import { Container } from "reactstrap";
import NavBar from "./components/layout/NavBar";
import RouteList from "./components/routes/RouteList";

/** React App Component
 * { App } -> { NavBar } { RouteList }
 * @returns {JSX.Element} App Component
 */
function App(): JSX.Element {
  return (
    <Container className="my-4">
      <BrowserRouter>
        <NavBar />
        <RouteList />
      </BrowserRouter>
    </Container>
  );
}

export default App;
