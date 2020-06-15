import React from "react";
import {
  Container,
  Header,
  Image,
  Label,
  Message,
  Icon,
} from "semantic-ui-react";
import Logo from "../../../Logo.svg";

const style = {
  title: {
    fontSize: "2.5em",
  },
  code: {
    paddingLeft: "3em",
    paddingRight: "3em",
    fontSize: "2em",
    textAlign: "center",
    margin: "1.5em 0 1em 0",
  },
  message: {
    marginTop: "1.5em",
  },
  icon: {
    fontSize: "2em",
    verticalAlign: "middle",
  },
  logo: {
    marginTop: "2em",
    marginBottom: "2em",
  },
};
const Display = () => (
  <React.Fragment>
    <Container fluid>
      <Image src={Logo} style={style.logo} size="small" centered />
    </Container>
    <Container text>
      <Header style={style.title} content="Frontend Dev Tools Bundle For Mac" />
    </Container>
    <Container>
      <Message style={style.message}>
        <Message.Content>
          <Icon
            style={style.icon}
            name={"arrow alternate circle down outline"}
          />
          Download the script file and run the command below to bootstrap your
          frontend development environment !
        </Message.Content>
      </Message>
    </Container>
    <Container fluid>
      <Label style={style.code} content="$ sh osx_bootstrap.sh" />
    </Container>
  </React.Fragment>
);

export default Display;
