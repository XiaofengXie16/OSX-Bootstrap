import React, { Component } from "react";
import { Grid, Header, Divider, Image } from "semantic-ui-react";
import fileDownload from "js-file-download";
import Logo from "../../../Logo.svg";
import axios from "axios";
class Display extends Component {
  onClickHandler = async () => {
    const res = await axios.get(
      "https://us-central1-osx-boots.cloudfunctions.net/api/script"
    );
    return fileDownload(res.data, "osx_bootstrap.sh");
  };
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
