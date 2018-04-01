import React, { Component } from "react";
import Display from "./Display";
import Download from "./Download";
import DownloadTable from "./Download/DownloadTable";
import VueLogo from "../../assets/vue.svg";
import AngularLogo from "../../assets/angular.svg";
import ReactLogo from "../../assets/react.svg";
import { Fullpage, Slide } from "fullpage-react";
import { downloadHelper } from "../../util";
const { changeFullpageSlide } = Fullpage;

export default class Home extends Component {
  state = {
    frameworkLogo: ReactLogo,
    frameworkName: "react",
    downloadOptions: {
      git: true,
      watch: true,
      markdown: true,
      yarn: true,
      node: true,
      iterm2: true,
      vscode: true,
      chrome: true,
      angular: false,
      vue: false,
      react: true,
      prettier: true,
      autoclose: true,
      autoimport: true,
      intellisense: true,
      onedark: true,
      findjump: true
    }
  };
  onClickAdvancedDownloadHandler = () => {
    downloadHelper(this.state.downloadOptions);
  };
  onClickBasicDownloadHandler = event => {
    const name = event.target.name;
    const framework = { angular: false, react: false, vue: false };
    framework[name] = true;
    this.setState(
      {
        downloadOptions: {
          ...this.state.downloadOptions,
          ...framework
        }
      },
      () => {
        downloadHelper(this.state.downloadOptions);
      }
    );
  };
  onClickAdvancedHandler = event => {
    const name = event.target.name;
    const framework = { angular: false, react: false, vue: false };
    framework[name] = true;

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
      downloadOptions: {
        ...this.state.downloadOptions,
        ...framework
      }
    });
  };
  onChangeHandler = name => event => {
    this.setState({
      downloadOptions: {
        ...this.state.downloadOptions,
        [name]: !this.state.downloadOptions[`${name}`]
      }
    });
  };

  render() {
    const { frameworkLogo, frameworkName } = this.state;
    const verticalSlides = [
      <Slide>
        <Display />

        <Download
          downloadHandler={this.onClickBasicDownloadHandler}
          advancedHandler={this.onClickAdvancedHandler}
        />
      </Slide>,
      <Slide>
        <DownloadTable
          frameworkLogo={frameworkLogo}
          frameworkName={frameworkName}
          changeHandler={this.onChangeHandler}
          downloadHandler={this.onClickAdvancedDownloadHandler}
        />
      </Slide>
    ];
    return <Fullpage slides={verticalSlides} />;
  }
}
