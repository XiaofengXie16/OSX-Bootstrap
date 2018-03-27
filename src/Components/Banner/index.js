import React from "react";
import { Menu, Header } from "semantic-ui-react";
const Banner = () => (
  <Menu inverted fluid borderless style={{ borderRadius: "0px", margin: "0" }}>
    <Menu.Item />
    <Menu.Item>
      <Header content="Skyrex" style={{ color: "white", fontSize: "2vw" }} />
    </Menu.Item>
  </Menu>
);
export default Banner;
