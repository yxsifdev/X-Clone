import type { SVGProps } from "react";
const GifIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14zm3.5 9h1q.425 0 .713-.288T10.5 13v-.5q0-.2-.15-.35T10 12t-.35.15t-.15.35v.5h-1v-2H10q.2 0 .35-.15t.15-.35t-.15-.35T10 10H8.5q-.425 0-.712.288T7.5 11v2q0 .425.288.713T8.5 14m3.5 0q.2 0 .35-.15t.15-.35v-3q0-.2-.15-.35T12 10t-.35.15t-.15.35v3q0 .2.15.35T12 14m2 0q.2 0 .35-.15t.15-.35v-1h1q.2 0 .35-.15T16 12t-.15-.35t-.35-.15h-1V11H16q.2 0 .35-.15t.15-.35t-.15-.35T16 10h-2q-.2 0-.35.15t-.15.35v3q0 .2.15.35T14 14"
    />
  </svg>
);
export default GifIcon;
