import React from "react";

interface RibbonProps {
  href: string;
  src: string;
  alt: string;
}
const Ribbon = (props: RibbonProps) => (
  <a href={props.href}>
    <img
      style={{ position: "absolute", top: "0", right: "0", border: "0" }}
      src={props.src}
      alt={props.alt}
    />
  </a>
);

export default Ribbon;
