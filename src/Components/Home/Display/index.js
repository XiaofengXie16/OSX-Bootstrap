import React, { Component } from "react";
import { Container, Header, Image, Label } from "semantic-ui-react";
import Logo from "../../../Logo.svg";
const style = {
  title: {
    fontSize: "2.5em"
  },
  code: {
    paddingLeft: "3em",
    paddingRight: "3em",
    fontSize: "2em",
    textAlign: "center",
    margin: "2em 0 2em 0"
  },
  logo: {
    marginTop: "2em",
    marginBottom: "2em"
  }
};
class Display extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid>
          <Image src={Logo} style={style.logo} size="medium" centered />
        </Container>
        <Container text>
          <Header
            style={style.title}
            content=" Frontend Dev Tools Bundle For Mac"
          />
        </Container>
        <Container fluid>
          <Label style={style.code} content="$ sh osx_bootstrap.sh" />
        </Container>
      </React.Fragment>
    );
  }
}

export default Display;
