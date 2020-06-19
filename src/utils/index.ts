import fileDownload from "js-file-download";
import JSZip from "jszip";
import data, { DataType, Key, Type } from "../data";
import { template } from "../template";

const COMMON_CATEGORY = "common";
const CASK_CATEGORY = "cask";
const FRAMEWORK_CATEGORY = "framework";
const NPM_CATEGORY = "npm";
const EXTENSION_CATEGORY = "extension";

type CATEGORY = "common" | "cask" | "framework" | "npm" | "extension";
/**
 * This function converts a nested package data object to an array of objects
 * @param {Object} data
 */
export const transform = (data: DataType): Type[] => {
  const reducer = (accumulator: Type[], cur: Type[]) => [
    ...accumulator,
    ...cur,
  ];
  return Object.keys(data)
    .map((item) => data[item as Key])
    .reduce(reducer, []);
};

/**
 *  This function filters the package data based on the user selection on the UI
 * @param {array} data  - an array of package data object
 * @param {array} state - react state object that contains user's selection
 */
export const selectionFilter = (
  data: Type[],
  state: { [key: string]: boolean }
): Type[] => {
  const reducer = (accumulator: Type[], cur: Type) => {
    accumulator.push(cur);
    return accumulator;
  };
  return data.filter(({ identifier }) => state[identifier]).reduce(reducer, []);
};

/**
 * This function builds the linux template string based on the package category
 * @param {array} data        - an array of package object
 * @param {string} identifier - category
 * @param {string} prefix     - linux command prefix
 */
export const categoryBuilder = (
  data: Type[],
  identifier: CATEGORY,
  prefix = ""
) => {
  const reducer = (accumulator: string[], cur: string) => {
    accumulator.push(cur);
    return accumulator;
  };
  return data
    .filter((item) => item.category === identifier)
    .map(({ value }) => prefix + value)
    .reduce(reducer, [])
    .join("\n");
};

const transformed = transform(data);

/**
 * This functions creates the installation script and download the script to user's local system
 * @param {{angular: boolean, vue: boolean, react: boolean}} data
 */
export const downloadHelper = async (data: { [key: string]: boolean }) => {
  const zip = new JSZip();
  const result = selectionFilter(transformed, data);

  const common = categoryBuilder(result, COMMON_CATEGORY);
  const cask = categoryBuilder(result, CASK_CATEGORY);
  const framework = categoryBuilder(
    result,
    FRAMEWORK_CATEGORY,
    "npm install -g "
  );
  const npm = categoryBuilder(result, NPM_CATEGORY, "npm install -g ");
  const extension = categoryBuilder(
    result,
    EXTENSION_CATEGORY,
    "code --install-extension "
  );

  const code = template(common, cask, framework, npm, extension);
  zip.file("osx_bootstrap.sh", code);
  const file = await zip.generateAsync({ type: "blob" });
  fileDownload(file, "osx_bootstrap.zip");
};

export const getPackageState = (data: DataType): { [key: string]: boolean } => {
  let packageState = {};
  for (let key in data) {
    for (let option in data[key as Key]) {
      packageState = {
        ...packageState,
        [data[key as Key][option].identifier]: true,
      };
    }
  }
  return packageState;
};
