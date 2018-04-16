import chai from "chai";
import { transform, selectionFilter, categoryBuilder } from "./index";
const { expect } = chai;

describe("Utility Test", () => {
  it("should transform the data", () => {
    const input = {
      common: [
        { name: "git", value: "git", identifier: "git", category: "common" }
      ],
      npm: [
        {
          name: "eslint",
          value: "eslint",
          identifier: "eslint",
          category: "npm"
        }
      ]
    };

    const expected = [
      { name: "git", value: "git", identifier: "git", category: "common" },
      {
        name: "eslint",
        value: "eslint",
        identifier: "eslint",
        category: "npm"
      }
    ];
    expect(transform(input)).to.eql(expected);
  });

  it("should filter the result based on user select", () => {
    const inputData = [
      { name: "git", value: "git", identifier: "git", category: "common" },
      {
        name: "eslint",
        value: "eslint",
        identifier: "eslint",
        category: "npm"
      }
    ];
    const inputState = { git: true };
    const expected = [
      { name: "git", value: "git", identifier: "git", category: "common" }
    ];
    expect(selectionFilter(inputData, inputState)).to.eql(expected);
  });

  it("should build the linux commands based on category", () => {
    const input = [
      { name: "git", value: "git", identifier: "git", category: "common" },
      { name: "watch", value: "watch", identifier: "watch", category: "common" }
    ];
    const expected = "git\nwatch";
    expect(categoryBuilder(input, "common")).to.eql(expected);
  });
});
