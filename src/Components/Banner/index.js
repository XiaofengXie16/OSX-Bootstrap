import React from "react";
import { Header, Menu } from "semantic-ui-react";
const Banner = () => (
  <Menu inverted fluid borderless style={{ borderRadius: "0", margin: "0" }}>
    <Menu.Item />
    <Menu.Item>
      <Header content="Skyrex" style={{ color: "white", fontSize: "2em" }} />
    </Menu.Item>
  </Menu>
);
export default Banner;
