import React, { Component } from "react";
import VueLogo from "../../../assets/vue.svg";
import ReactLogo from "../../../assets/react.svg";
import AngularLogo from "../../../assets/angular.svg";
import { Card } from "semantic-ui-react";
import DownloadCard from "./DownloadCard";
const style = {
  container: {
    paddingLeft: "2vw",
    paddingRight: "2vw"
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
