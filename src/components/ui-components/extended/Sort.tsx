/** Global constant for SVG size */
const svgSize = "8";

/** React functional component that renders an SVG icon
 * @returns SVG sorting icon
 */
export const SortUpDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize}
      height={svgSize}
      fill="currentColor"
      className="bi bi-arrow-down-up"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
      />
    </svg>
  );
};

/** React functional component that renders an SVG icon
 * @returns SVG sort down icon
 */
export const SortDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize}
      height={svgSize}
      fill="currentColor"
      className="bi bi-arrow-down"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
      />
    </svg>
  );
};

/** React functional component that renders an SVG icon
 * @returns SVG sort up icon
 */
export const SortUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize}
      height={svgSize}
      fill="currentColor"
      className="bi bi-arrow-up"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
      />
    </svg>
  );
};
