import type { SVGProps } from "react";
const SavedIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...props}
  >
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M128 80V64a48.14 48.14 0 0 1 48-48h224a48.14 48.14 0 0 1 48 48v368l-80-64"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="32"
      d="M320 96H112a48.14 48.14 0 0 0-48 48v352l152-128l152 128V144a48.14 48.14 0 0 0-48-48Z"
    />
  </svg>
);
export default SavedIcon;
