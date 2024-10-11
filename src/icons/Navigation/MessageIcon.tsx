import type { SVGProps } from "react";
const MessageIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="none" stroke="currentColor" strokeWidth="2">
      <rect width="16" height="12" x="4" y="6" rx="2" />
      <path d="m4 9l7.106 3.553a2 2 0 0 0 1.788 0L20 9" />
    </g>
  </svg>
);
export default MessageIcon;
