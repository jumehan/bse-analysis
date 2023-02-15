import { Spinner } from "reactstrap";

/** Custom loading spinner animated component */
function LoadingSpinner() {
  return (
    <Spinner size="sm" className="spinner">
      Loading...
    </Spinner>
  );
}

export default LoadingSpinner;
