import React, { Component } from "react";
import { Grid, Header, Divider, Image } from "semantic-ui-react";
import Logo from "../../../Logo.svg";
class Display extends Component {
  render() {
    return (
      <Grid columns="equal">
        <Grid.Column />
        <Grid.Column width={10}>
          <Divider hidden />
          <Grid.Row>
            <Image src={Logo} centered size="medium" />
          </Grid.Row>
          <Divider hidden />
          <Grid.Row>
            <Header style={{ fontSize: "4vw" }}>Skyrex</Header>
          </Grid.Row>
          <Divider hidden />
          <Divider hidden />
          <Grid.Row>
            <h1 style={{ fontSize: "3vw" }}>
              Frontend Dev Tools Bundle For Mac
            </h1>
          </Grid.Row>
        </Grid.Column>
        <Grid.Column />
      </Grid>
    );
  }
}

export default Display;
