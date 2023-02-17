import { Link } from "react-router-dom";

/** Simple 404 Not Found Component
 * Prompts user to go back to the homepage
 * @returns Not Found Page
 */
function NotFound() {
  return (
    <div>
      <p style={{ textAlign: "center" }}>
        OOPS! PAGE NOT FOUND
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
}
export default NotFound;
