import * as React from "react";
export const SvgSpotify = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="#fff"
    stroke="#597e8d"
    {...props}
  >
    <path fill="none" stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="M8 11.973c2.5-1.473 5.5-.973 7.5.527M9 15c1.5-1 4-1 5 .5M7 9c2-1 6-2 10 .5" />
  </svg>
);