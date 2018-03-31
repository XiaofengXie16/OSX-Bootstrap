import React, { Component } from "react";
import { Card, Button, Image, Grid, Divider } from "semantic-ui-react";
export default class DownloadCard extends Component {
  render() {
    const { logo, name, downloadHandler, advancedHandler } = this.props;
    return (
      <Card fluid>
        <Card.Content>
          <Grid columns={2}>
            <Grid.Column>
              <Image src={logo} size="small" inline />
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Grid.Row>
                <Button primary name={name} onClick={downloadHandler}>
                  Download
                </Button>
              </Grid.Row>
              <Divider hidden />
              <Grid.Row>
                <Button secondary name={name} onClick={advancedHandler}>
                  Advanced
                </Button>
              </Grid.Row>
            </Grid.Column>
          </Grid>
        </Card.Content>
      </Card>
    );
  }
}
