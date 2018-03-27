import React, { Component } from "react";
import {
  Button,
  Container,
  Header,
  Grid,
  Image,
  Divider
} from "semantic-ui-react";
import fileDownload from "js-file-download";
import axios from "axios";
import Logo from "../../Logo.svg";
class Home extends Component {
  onClickHandler = async () => {
    const res = await axios.get(
      "https://us-central1-osx-boots.cloudfunctions.net/api/script"
    );
    return fileDownload(res.data, "osx_bootstrap.sh");
  };
  render() {
    return (
      <Container fluid>
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
            <Divider hidden />
            <Divider hidden />
            <Grid.Row>
              <Button primary size="massive" onClick={this.onClickHandler}>
                Download Now
              </Button>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column />
        </Grid>
      </Container>
    );
  }
}

export default Home;
