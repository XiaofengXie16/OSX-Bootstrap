import React, { Component } from "react";
import { Card, Button, Image } from "semantic-ui-react";
export default class DownloadCard extends Component {
  render() {
    const { logo, name, downloadHandler, advancedHandler, color } = this.props;
    return (
      <Card color={color} style={{ marginBottom: "2em" }}>
        <Card.Content>
          <Image src={logo} inline size="small" />
          <Button.Group attached="left" fluid>
            <Button
              compact
              primary
              name={name}
              size="massive"
              onClick={downloadHandler}
            >
              Download
            </Button>
            <Button
              compact
              secondary
              name={name}
              size="massive"
              onClick={advancedHandler}
            >
              Advanced
            </Button>
          </Button.Group>
        </Card.Content>
      </Card>
    );
  }
}
