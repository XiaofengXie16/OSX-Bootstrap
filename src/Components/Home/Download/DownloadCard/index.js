import React, { Component } from "react";
import { Card, Button, Image } from "semantic-ui-react";
export default class DownloadCard extends Component {
  render() {
    const { logo, name, downloadHandler, advancedHandler, color } = this.props;
    return (
      <Card color={color}>
        <Card.Content>
          <Image src={logo} inline size="small" />
          <Button.Group>
            <Button
              primary
              name={name}
              size="massive"
              onClick={downloadHandler}
            >
              Download
            </Button>
            <Button
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
