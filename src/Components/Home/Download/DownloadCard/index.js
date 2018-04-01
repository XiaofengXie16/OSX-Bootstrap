import React, { Component } from "react";
import { Card, Button, Image, Grid, Divider } from "semantic-ui-react";
export default class DownloadCard extends Component {
  render() {
    const { logo, name, downloadHandler, advancedHandler, color } = this.props;
    return (
      <Card color={color}>
        <Card.Content>
          <Grid columns={2}>
            <Grid.Column>
              <Image src={logo} inline />
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Grid.Row>
                <Button
                  primary
                  name={name}
                  size="massive"
                  onClick={downloadHandler}
                >
                  Download
                </Button>
              </Grid.Row>
              <Divider hidden />
              <Grid.Row>
                <Button
                  secondary
                  name={name}
                  size="massive"
                  onClick={advancedHandler}
                >
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
