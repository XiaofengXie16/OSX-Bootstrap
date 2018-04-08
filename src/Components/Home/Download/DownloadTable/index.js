import React, { Component } from "react";
import ScrollableAnchor from "react-scrollable-anchor";
import { Button, Grid, Image } from "semantic-ui-react";
import DownloadForm from "../DownloadForm";
import DownloadSearch from "../DownloadSearch";

export default class DownloadTable extends Component {
  render() {
    const {
      frameworkLogo,
      frameworkName,
      downloadHandler,
      changeHandler,
      data
    } = this.props;
    return (
      <ScrollableAnchor id={"selection"}>
        <div>
          <Grid stackable>
            <Grid.Row centered>
              <Image src={frameworkLogo} size="medium" />
            </Grid.Row>
            <Grid.Row centered>
              <DownloadSearch />
            </Grid.Row>
            <Grid.Row columns={16} textAlign="left">
              <Grid.Column width={2} />
              <Grid.Column width={3}>
                <DownloadForm
                  name="Common"
                  data={data.common}
                  handler={changeHandler}
                />
              </Grid.Column>
              <Grid.Column width={3}>
                <DownloadForm
                  name="Cask"
                  data={data.cask}
                  handler={changeHandler}
                />
              </Grid.Column>
              <Grid.Column width={3}>
                <DownloadForm
                  name="Framework"
                  data={data[`${frameworkName}`]}
                  handler={changeHandler}
                />
                <DownloadForm
                  name="npm"
                  data={data.npm}
                  handler={changeHandler}
                />
              </Grid.Column>
              <Grid.Column width={3}>
                <DownloadForm
                  name="VS Code Extension"
                  data={data.vs_extension}
                  handler={changeHandler}
                />
              </Grid.Column>
              <Grid.Column width={2} />
            </Grid.Row>
            <Grid.Row centered columns={5}>
              <Button
                primary
                size="massive"
                style={{ margin: "2em" }}
                onClick={downloadHandler}
              >
                Download
              </Button>
            </Grid.Row>
          </Grid>
        </div>
      </ScrollableAnchor>
    );
  }
}
