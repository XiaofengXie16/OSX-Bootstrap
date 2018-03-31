import React, { Component } from "react";
import VueLogo from "../../../assets/vue.svg";
import ReactLogo from "../../../assets/react.svg";
import AngularLogo from "../../../assets/angular.svg";
import { Grid } from "semantic-ui-react";
import DownloadCard from "./DownloadCard";
export default class Download extends Component {
  render() {
    const { downloadHandler, advancedHandler } = this.props;
    return (
      <Grid columns="equal">
        <Grid.Column />
        <Grid.Column>
          <DownloadCard
            logo={ReactLogo}
            name="react"
            downloadHandler={downloadHandler}
            advancedHandler={advancedHandler}
          />
        </Grid.Column>
        <Grid.Column>
          <DownloadCard
            logo={AngularLogo}
            name="angular"
            downloadHandler={downloadHandler}
            advancedHandler={advancedHandler}
          />
        </Grid.Column>
        <Grid.Column>
          <DownloadCard
            logo={VueLogo}
            name="vue"
            downloadHandler={downloadHandler}
            advancedHandler={advancedHandler}
          />
        </Grid.Column>
        <Grid.Column />
      </Grid>
    );
  }
}
