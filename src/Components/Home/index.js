import React, { Component } from "react";
import AngularLogo from "../../assets/angular.svg";
import ReactLogo from "../../assets/react.svg";
import VueLogo from "../../assets/vue.svg";
import { downloadHelper } from "../../util";
import Display from "./Display";
import data from "../../data";
import Download from "./Download";
import DownloadTable from "./Download/DownloadTable";

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
      eslint: true,
      prettier: true,
      autoclose: true,
      autoimport: true,
      intellisense: true,
      onedark: true,
      findjump: true,
      colorizer: true,
      pathIntellisense: true
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
        logo = ReactLogo;
    }

    this.setState({
      frameworkLogo: logo,
      frameworkName: name,
      downloadOptions: {
        ...this.state.downloadOptions,
        ...framework
      }
    });
    window.location.href = "#selection";
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

    return (
      <React.Fragment>
        <Display />
        <Download
          downloadHandler={this.onClickBasicDownloadHandler}
          advancedHandler={this.onClickAdvancedHandler}
        />
        <DownloadTable
          data={data}
          frameworkLogo={frameworkLogo}
          frameworkName={frameworkName}
          changeHandler={this.onChangeHandler}
          downloadHandler={this.onClickAdvancedDownloadHandler}
        />
      </React.Fragment>
    );
  }
}
