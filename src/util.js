import { template } from "./template";
import data from "./data";
import fileDownload from "js-file-download";
export const categoryBuilder = (array, identifier, prefix = "") => {
  let result = [];
  for (let key in array) {
    if (array[key].category === identifier) {
      result.push(prefix + array[key].value);
    }
  }
  return result.join("\n");
};

export const transform = data => {
  let transform = [];
  for (let key in data) {
    transform = [...transform, ...data[key]];
  }
  return transform;
};

export const selectionFilter = (data, state) => {
  const result = [];
  for (let o in data) {
    const key = data[o].identifier;
    if (state[key]) {
      result.push(data[o]);
    }
  }
  return result;
};

const COMMON_CATEGORY = "common";
const CASK_CATEGORY = "cask";
const FRAMEWORK_CATEGORY = "framework";
const EXTENSION_CATEGORY = "extension";
const transformed = transform(data);

export const downloadHelper = data => {
  const result = selectionFilter(transformed, data);
  const common = categoryBuilder(result, COMMON_CATEGORY);

  const cask = categoryBuilder(result, CASK_CATEGORY);
  const framework = categoryBuilder(result, FRAMEWORK_CATEGORY);
  const extension = categoryBuilder(
    result,
    EXTENSION_CATEGORY,
    "code --install-extension "
  );
  const code = template(common, cask, framework, extension);
  fileDownload(code, "osx_bootstrap.sh");
};
