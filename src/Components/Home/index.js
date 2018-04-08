import React, { Component } from "react";
import AngularLogo from "../../assets/angular.svg";
import ReactLogo from "../../assets/react.svg";
import VueLogo from "../../assets/vue.svg";
import data from "../../data";
import { downloadHelper } from "../../util";
import Display from "./Display";
import Download from "./Download";
import DownloadTable from "./Download/DownloadTable";

class Home extends Component {
  state = {
    frameworkLogo: ReactLogo,
    frameworkName: "react"
  };
  getPackageState = data => {
    let pacakageState = {};
    for (let key in data) {
      for (let option in data[key]) {
        pacakageState = {
          ...pacakageState,
          [data[key][option].identifier]: true
        };
      }
    }
    return pacakageState;
  };
  componentDidMount = () => {
    this.setState({
      downloadOptions: this.getPackageState(data)
    });
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

  selectFramework = name => {
    return ({ angular: false, react: false, vue: false }[name] = true);
  };

  selectLogo = name => {
    return {
      angular: AngularLogo,
      vue: VueLogo,
      react: ReactLogo
    }[name];
  };

  onClickAdvancedHandler = event => {
    const name = event.target.name;
    const logo = this.selectLogo(name);
    const framework = this.selectFramework(name);

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

export default Home;
