import React, { Component } from 'react';
import AngularLogo from '../../assets/angular.svg';
import ReactLogo from '../../assets/react.svg';
import VueLogo from '../../assets/vue.svg';
import data from '../../data';
import { downloadHelper } from '../../utils';
import Display from './Display';
import Download from './Download';
import DownloadTable from './Download/DownloadTable';

class Home extends Component {
  state = {
    frameworkLogo: ReactLogo,
    frameworkName: 'react',
  };
  getPackageState = data => {
    let packageState = {};
    for (let key in data) {
      for (let option in data[key]) {
        packageState = {
          ...packageState,
          [data[key][option].identifier]: true,
        };
      }
    }
    return packageState;
  };
  componentDidMount = () => {
    this.setState({
      downloadOptions: this.getPackageState(data),
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
          ...framework,
        },
      },
      () => {
        downloadHelper(this.state.downloadOptions);
      }
    );
  };
  onClickAdvancedHandler = event => {
    const name = event.target.name;
    this.setState({
      frameworkLogo: this.selectLogo(name),
      frameworkName: name,
      downloadOptions: {
        ...this.state.downloadOptions,
        ...this.selectFramework(name),
      },
    });
    window.location.href = '#selection';
  };

  onChangeCheckboxHandler = name => event => {
    this.setState({
      downloadOptions: {
        ...this.state.downloadOptions,
        [name]: !this.state.downloadOptions[`${name}`],
      },
    });
  };

  selectFramework = name => {
    const option = { angular: false, react: false, vue: false };
    option[name] = true;
    return option;
  };

  selectLogo = name => {
    return {
      angular: AngularLogo,
      vue: VueLogo,
      react: ReactLogo,
    }[name];
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
          changeHandler={this.onChangeCheckboxHandler}
          downloadHandler={this.onClickAdvancedDownloadHandler}
        />
      </React.Fragment>
    );
  }
}

export default Home;
