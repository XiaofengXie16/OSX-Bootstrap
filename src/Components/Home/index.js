import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Display from "./Display";
import Download from "./Download";
class Home extends Component {
  render() {
    return (
      <Container fluid>
        <Display />
        <Download />
      </Container>
    );
  }
}

export default Home;
