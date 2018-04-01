import React, { Component } from "react";
import VueLogo from "../../../assets/vue.svg";
import ReactLogo from "../../../assets/react.svg";
import AngularLogo from "../../../assets/angular.svg";
import { Card, Grid } from "semantic-ui-react";
import DownloadCard from "./DownloadCard";
export default class Download extends Component {
  render() {
    const { downloadHandler, advancedHandler } = this.props;
    return (
      <Grid columns={16}>
        <Grid.Column width={2} />
        <Grid.Column width={12}>
          <Card.Group itemsPerRow={3} stackable>
            <DownloadCard
              logo={ReactLogo}
              name="react"
              color="blue"
              downloadHandler={downloadHandler}
              advancedHandler={advancedHandler}
            />

            <DownloadCard
              logo={AngularLogo}
              name="angular"
              color="red"
              downloadHandler={downloadHandler}
              advancedHandler={advancedHandler}
            />

            <DownloadCard
              logo={VueLogo}
              name="vue"
              color="green"
              downloadHandler={downloadHandler}
              advancedHandler={advancedHandler}
            />
          </Card.Group>
        </Grid.Column>
        <Grid.Column width={2} />
      </Grid>
    );
  }
}
