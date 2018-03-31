import React from "react";
import { Card, Button, Image, Grid, Divider } from "semantic-ui-react";
const DownloadCard = props => (
  <Card>
    <Card.Content>
      <Grid columns={2}>
        <Grid.Column>
          <Image src={props.logo} size="small" inline />
        </Grid.Column>

        <Grid.Column verticalAlign="middle">
          <Grid.Row>
            <Button primary>Download</Button>
          </Grid.Row>
          <Divider hidden />
          <Grid.Row>
            <Button secondary>Advanced</Button>
          </Grid.Row>
        </Grid.Column>
      </Grid>
    </Card.Content>
  </Card>
);

export default DownloadCard;
