import React, { useState } from "react";
import AngularLogo from "../../assets/angular.svg";
import ReactLogo from "../../assets/react.svg";
import VueLogo from "../../assets/vue.svg";
import data from "../../data";
import { downloadHelper, getPackageState } from "../../utils";
import Display from "./Display";
import Download from "./Download";
import DownloadTable from "./Download/DownloadTable";

const Home = () => {
  const [frameworkLogo, setFrameworkLogo] = useState(ReactLogo);
  const [frameworkName, setFrameworkName] = useState("react");
  const [downloadOptions, setDownloadOptions] = useState(getPackageState(data));

  const onClickBasicDownloadHandler = async (event) => {
    const name = event.target.name;
    await downloadHelper({ ...downloadOptions, ...selectFramework(name) });
  };
  const onClickAdvancedDownloadHandler = async () => {
    await downloadHelper(downloadOptions);
  };

  const onClickAdvancedHandler = (event) => {
    const name = event.target.name;
    setFrameworkLogo(selectLogo(name));
    setFrameworkName(name);
    setDownloadOptions({ ...downloadOptions, ...selectFramework(name) });
    window.location.href = "#selection";
  };

  const onChangeCheckboxHandler = (name) => (event) => {
    setDownloadOptions({
      ...downloadOptions,
      [name]: !downloadOptions[`${name}`],
    });
  };

  const selectFramework = (name) => {
    const option = { angular: false, react: false, vue: false };
    option[name] = true;
    return option;
  };

  const selectLogo = (name) => {
    return {
      angular: AngularLogo,
      vue: VueLogo,
      react: ReactLogo,
    }[name];
  };

  return (
    <React.Fragment>
      <Display />
      <Download
        downloadHandler={onClickBasicDownloadHandler}
        advancedHandler={onClickAdvancedHandler}
      />
      <DownloadTable
        data={data}
        frameworkLogo={frameworkLogo}
        frameworkName={frameworkName}
        changeHandler={onChangeCheckboxHandler}
        downloadHandler={onClickAdvancedDownloadHandler}
      />
    </React.Fragment>
  );
};

export default Home;
