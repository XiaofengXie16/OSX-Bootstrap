const options = {
  common: [
    { name: "git", value: "git", identifier: "git", category: "common" },
    { name: "watch", value: "watch", identifier: "watch", category: "common" },
    {
      name: "markdown",
      value: "markdown",
      identifier: "markdown",
      category: "common"
    },
    { name: "yarn", value: "yarn", identifier: "yarn", category: "common" },
    { name: "node", value: "node", identifier: "node", category: "common" }
  ],
  cask: [
    {
      name: "Visual Studio Code",
      value: "visual-studio-code",
      identifier: "vscode",
      category: "cask"
    },
    {
      name: "Google Chrome",
      value: "google-chrome",
      identifier: "chrome",
      category: "cask"
    },
    {
      name: "iterm2",
      value: "iterm2",
      identifier: "iterm2",
      category: "cask"
    }
  ],
  angular: [
    {
      name: "angular cli",
      value: "@angular/cli",
      identifier: "angular",
      category: "framework"
    }
  ],
  vue: [
    {
      name: "vue cli",
      value: "@vue/cli",
      identifier: "vue",
      category: "framework"
    }
  ],
  react: [
    {
      name: "create-react-app",
      value: "create-react-app",
      identifier: "react",
      category: "framework"
    }
  ],
  npm: [
    { name: "eslint", value: "eslint", identifier: "eslint", category: "npm" }
  ],
  vs_extension: [
    {
      name: "prettier",
      value: "esbenp.prettier-vscode",
      identifier: "prettier",
      category: "extension"
    },
    {
      name: "auto close tag",
      value: "formulahendry.auto-close-tag",
      identifier: "autoclose",
      category: "extension"
    },
    {
      name: "auto import",
      value: "steoates.autoimport",
      identifier: "autoimport",
      category: "extension"
    },
    {
      name: "npm intellisense",
      value: "christian-kohler.npm-intellisense",
      identifier: "intellisense",
      category: "extension"
    },
    {
      name: "One Dark Pro",
      value: "zhuangtongfa.Material-theme",
      identifier: "onedark",
      category: "extension"
    },
    {
      name: "find and jump",
      value: "mksafi.find-jump",
      identifier: "findjump",
      category: "extension"
    }
  ]
};
export default options;
