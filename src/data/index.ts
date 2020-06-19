export interface Type {
  name: string;
  value: string;
  identifier: string;
  category: string;
}
export type Key =
  | "common"
  | "cask"
  | "npm"
  | "vs_extension"
  | "angular"
  | "react"
  | "vue";

export interface DataType {
  common: Type[];
  cask: Type[];
  npm: Type[];
  vs_extension: Type[];
  angular: Type[];
  react: Type[];
  vue: Type[];
}
const options: DataType = {
  common: [
    { name: "git", value: "git", identifier: "git", category: "common" },
    { name: "watch", value: "watch", identifier: "watch", category: "common" },
    {
      name: "markdown",
      value: "markdown",
      identifier: "markdown",
      category: "common",
    },
    { name: "yarn", value: "yarn", identifier: "yarn", category: "common" },
    { name: "node", value: "node", identifier: "node", category: "common" },
  ],
  cask: [
    {
      name: "Visual Studio Code",
      value: "visual-studio-code",
      identifier: "vscode",
      category: "cask",
    },
    {
      name: "Google Chrome",
      value: "google-chrome",
      identifier: "chrome",
      category: "cask",
    },
    {
      name: "iterm2",
      value: "iterm2",
      identifier: "iterm2",
      category: "cask",
    },
    {
      name: "sublime-text",
      value: "sublime-text",
      identifier: "sublime-text",
      category: "cask",
    },
  ],
  angular: [
    {
      name: "angular cli",
      value: "@angular/cli",
      identifier: "angular",
      category: "framework",
    },
  ],
  vue: [
    {
      name: "vue cli",
      value: "@vue/cli",
      identifier: "vue",
      category: "framework",
    },
  ],
  react: [
    {
      name: "create-react-app",
      value: "create-react-app",
      identifier: "react",
      category: "framework",
    },
  ],
  npm: [
    { name: "eslint", value: "eslint", identifier: "eslint", category: "npm" },
  ],
  vs_extension: [
    {
      name: "Bracket Pair Colorizer",
      value: "CoenraadS.bracket-pair-colorizer",
      identifier: "colorizer",
      category: "extension",
    },
    {
      name: "Docs-markdown",
      value: "docsmsft.docs-markdown",
      identifier: "docs-markdown",
      category: "extension",
    },
    {
      name: "Find-Jump",
      value: "mksafi.find-jump",
      identifier: "findjump",
      category: "extension",
    },
    {
      name: "GitLens",
      value: "eamodio.gitlens",
      identifier: "gitlens",
      category: "extension",
    },
    {
      name: "NPM Intellisense",
      value: "christian-kohler.npm-intellisense",
      identifier: "intellisense",
      category: "extension",
    },
    {
      name: "Path Intellisense",
      value: "christian-kohler.path-intellisense",
      identifier: "pathIntellisense",
      category: "extension",
    },
    {
      name: "Prettier",
      value: "esbenp.prettier-vscode",
      identifier: "prettier",
      category: "extension",
    },
    {
      name: "One Dark Pro",
      value: "zhuangtongfa.Material-theme",
      identifier: "onedark",
      category: "extension",
    },
    {
      name: "Live Share Extension Pack",
      value: "MS-vsliveshare.vsliveshare-pac",
      identifier: "liveshare",
      category: "extension",
    },
  ],
};
export default options;
