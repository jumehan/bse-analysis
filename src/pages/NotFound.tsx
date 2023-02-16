import React from "react";
import { Link } from "react-router-dom";

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <p style={{ textAlign: "center" }}>
          OOPS! PAGE NOT FOUND
          <Link to="/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
export default NotFound;
