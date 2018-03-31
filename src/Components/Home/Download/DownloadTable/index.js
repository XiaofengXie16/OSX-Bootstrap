import React, { Component } from "react";
import { Grid, Image, Button } from "semantic-ui-react";
import DownloadForm from "../DownloadForm";
import data from "../../../../data";

export default class DownloadTable extends Component {
  render() {
    const {
      frameworkLogo,
      frameworkName,
      downloadHandler,
      changeHandler
    } = this.props;
    return (
      <Grid columns={5}>
        <Grid.Row centered>
          <Grid.Column>
            <Image src={frameworkLogo} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row textAlign="left" columns={6}>
          <Grid.Column />
          <Grid.Column>
            <DownloadForm
              name="Common"
              data={data.common}
              handler={changeHandler}
            />
          </Grid.Column>
          <Grid.Column>
            <DownloadForm
              name="Cask"
              data={data.cask}
              handler={changeHandler}
            />
          </Grid.Column>
          <Grid.Column>
            <DownloadForm
              name="Framework"
              data={data[`${frameworkName}`]}
              handler={changeHandler}
            />
          </Grid.Column>
          <Grid.Column>
            <DownloadForm
              name="VS Code Extension"
              data={data.vs_extension}
              handler={changeHandler}
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row centered columns={9}>
          <Grid.Column>
            <Button primary size="massive" onClick={downloadHandler}>
              Download
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
