/** Global constant for SVG size */
const svgSize = "11";

/** React functional component that renders an SVG icon
 * @returns SVG chevron right expand icon
 */
export const ExpandIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize}
      height={svgSize}
      fill="currentColor"
      className="bi bi-chevron-right"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  );
};

/** React functional component that renders an SVG icon
 * @returns SVG chevron up collapse icon
 */
export const CollapseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={svgSize}
      height={svgSize}
      fill="currentColor"
      className="bi bi-chevron-up"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
      />
    </svg>
  );
};
