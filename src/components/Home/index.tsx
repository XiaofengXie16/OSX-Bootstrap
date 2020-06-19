import React, { useState } from "react";
import AngularLogo from "../../assets/angular.svg";
import ReactLogo from "../../assets/react.svg";
import VueLogo from "../../assets/vue.svg";
import data from "../../data";
import { downloadHelper, getPackageState } from "../../utils";
import Display from "./Display";
import Download from "./Download";
import DownloadTable from "./Download/DownloadTable";

interface Option {
  angular: boolean;
  vue: boolean;
  react: boolean;
}

type FrameworkName = "react" | "angular" | "vue";

const Home = () => {
  const [frameworkLogo, setFrameworkLogo] = useState(ReactLogo);
  const [frameworkName, setFrameworkName] = useState<FrameworkName>("react");
  const [downloadOptions, setDownloadOptions] = useState<{
    [key: string]: boolean;
  }>(getPackageState(data));

  const onClickBasicDownloadHandler = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const name = (event.target as HTMLButtonElement).name;
    await downloadHelper({
      ...downloadOptions,
      ...selectFramework(name as FrameworkName),
    });
  };
  const onClickAdvancedDownloadHandler = async () => {
    await downloadHelper(downloadOptions);
  };

  const onClickAdvancedHandler = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const name = (event.target as HTMLButtonElement).name;
    setFrameworkLogo(selectLogo(name as FrameworkName));
    setFrameworkName(name as FrameworkName);
    setDownloadOptions({
      ...downloadOptions,
      ...selectFramework(name as FrameworkName),
    });
    window.location.href = "#selection";
  };

  const onChangeCheckboxHandler = (name: string) => (
    event: React.FormEvent<HTMLInputElement>
  ): void =>
    setDownloadOptions({
      ...downloadOptions,
      [name]: !downloadOptions[name],
    });

  const selectFramework = (name: FrameworkName): Option => {
    const option = {
      angular: false,
      react: false,
      vue: false,
    };
    option[name] = true;
    return option;
  };

  const selectLogo = (name: FrameworkName) =>
    ({
      angular: AngularLogo,
      vue: VueLogo,
      react: ReactLogo,
    }[name]);

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
