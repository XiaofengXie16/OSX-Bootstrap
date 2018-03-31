import React, { Component } from "react";
import { Grid, Image, Button } from "semantic-ui-react";
import DownloadForm from "../DownloadForm";
import data from "../../../../data";
export default class DownloadTable extends Component {
  render() {
    const { frameworkLogo, frameworkName } = this.props;
    return (
      <Grid columns={5}>
        <Grid.Row>
          <Grid.Column />
          <Grid.Column />
          <Grid.Column>
            <Image src={frameworkLogo} />
          </Grid.Column>
          <Grid.Column />
          <Grid.Column />
        </Grid.Row>
        <Grid.Row textAlign="left" columns={6} divided>
          <Grid.Column />
          <Grid.Column>
            <DownloadForm name="Common" data={data.common} />
          </Grid.Column>
          <Grid.Column>
            <DownloadForm name="Cask" data={data.cask} />
          </Grid.Column>
          <Grid.Column>
            <DownloadForm name="Framework" data={data[`${frameworkName}`]} />
          </Grid.Column>
          <Grid.Column>
            <DownloadForm name="VS Code Extension" data={data.vs_extension} />
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
        <Grid.Row />
        <Grid.Row>
          <Grid.Column />
          <Grid.Column />
          <Grid.Column>
            <Button primary size="massive">
              Download
            </Button>
          </Grid.Column>
          <Grid.Column />
          <Grid.Column />
        </Grid.Row>
      </Grid>
    );
  }
}
