import React, { Component } from "react";
import VueLogo from "../../../assets/vue.svg";
import ReactLogo from "../../../assets/react.svg";
import AngularLogo from "../../../assets/angular.svg";
import { Grid } from "semantic-ui-react";
import DownloadCard from "./DownloadCard";
class Download extends Component {
  render() {
    return (
      <Grid columns={5}>
        <Grid.Column />
        <Grid.Column>
          <DownloadCard logo={AngularLogo} />
        </Grid.Column>
        <Grid.Column>
          <DownloadCard logo={VueLogo} />
        </Grid.Column>
        <Grid.Column>
          <DownloadCard logo={ReactLogo} />
        </Grid.Column>
        <Grid.Column />
      </Grid>
    );
  }
}

export default Download;
