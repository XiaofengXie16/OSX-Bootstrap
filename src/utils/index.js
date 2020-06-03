import fileDownload from "js-file-download";
import JSZip from "jszip";
import data from "../data";
import { template } from "../template";

/**
 * This function converts a nested package data object to an array of objects
 * @param {Object} data
 */
export const transform = (data) => {
  const reducer = (accumulator, cur) => [...accumulator, ...cur];
  return Object.keys(data)
    .map((item) => data[item])
    .reduce(reducer, []);
};

/**
 *  This function filters the package data based on the user selection on the UI
 * @param {array} data  - an array of package data object
 * @param {array} state - react state object that contains user's selection
 */
export const selectionFilter = (data, state) => {
  const reducer = (accumulator, cur) => {
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
export const categoryBuilder = (data, identifier, prefix = "") => {
  const reducer = (accumulator, cur) => {
    accumulator.push(cur);
    return accumulator;
  };
  return data
    .filter((item) => item.category === identifier)
    .map(({ value }) => prefix + value)
    .reduce(reducer, [])
    .join("\n");
};

const COMMON_CATEGORY = "common";
const CASK_CATEGORY = "cask";
const FRAMEWORK_CATEGORY = "framework";
const NPM_CATEGORY = "npm";
const EXTENSION_CATEGORY = "extension";
const transformed = transform(data);

/**
 * This functions creates the installation script and download the script to user's local system
 * @param {{angular: boolean, vue: boolean, react: boolean}} data
 */
export const downloadHelper = async (data) => {
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

export const getPackageState = (data) => {
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
