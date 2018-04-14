import React, { Component } from "react";
import { Card } from "semantic-ui-react";
import AngularLogo from "../../../assets/angular.svg";
import ReactLogo from "../../../assets/react.svg";
import VueLogo from "../../../assets/vue.svg";
import DownloadCard from "./DownloadCard";
const style = {
  container: {
    paddingLeft: "2em",
    paddingRight: "2em"
  }
};
export default class Download extends Component {
  render() {
    const { downloadHandler, advancedHandler } = this.props;
    return (
      <Card.Group style={style.container} itemsPerRow={3} stackable>
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
    );
  }
}
