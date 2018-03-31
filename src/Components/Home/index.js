import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Display from "./Display";
import Download from "./Download";
import DownloadTable from "./Download/DownloadTable";
import VueLogo from "../../assets/vue.svg";
import AngularLogo from "../../assets/angular.svg";
import ReactLogo from "../../assets/react.svg";
import { Fullpage, Slide } from "fullpage-react";
const { changeFullpageSlide } = Fullpage;
export default class Home extends Component {
  state = {
    frameworkLogo: ReactLogo,
    frameworkName: "angular"
  };
  onClickDownloadHandler = event => {
    console.log("name");
  };

  onClickAdvancedHandler = event => {
    const name = event.target.name;
    let logo;
    switch (name) {
      case "angular":
        logo = AngularLogo;
        break;
      case "vue":
        logo = VueLogo;
        break;
      case "react":
        logo = ReactLogo;
        break;
      default:
        logo = AngularLogo;
    }
    changeFullpageSlide(1);
    this.setState({
      frameworkLogo: logo,
      frameworkName: name,
     
    });
  };

  render() {
    const { frameworkLogo, frameworkName } = this.state;
    const verticalSlides = [
      <Slide>
        <Display />
        <Download
          downloadHandler={this.onClickDownloadHandler}
          advancedHandler={this.onClickAdvancedHandler}
        />
      </Slide>,
      <Slide>
        <DownloadTable
        
          frameworkLogo={frameworkLogo}
          frameworkName={frameworkName}
        />
      </Slide>
    ];
    return (
      <Container fluid>
        <Fullpage slides={verticalSlides} />
      </Container>
    );
  }
}
