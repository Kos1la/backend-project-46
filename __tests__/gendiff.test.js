import path from "path";
import genDiff from "../src/gendiff.js";
import { test, expect } from "jest";

const getFixturePath = (filename) =>
  path.join(__dirname, "__fixtures__", filename);

test("compare flat json files", () => {
  const file1 = getFixturePath("file1.json");
  const file2 = getFixturePath("file2.json");
  const expectedOutput = `{
    - follow: false
      host: hexlet.io
    - proxy: 123.234.53.22
    - timeout: 50
    + timeout: 20
    + verbose: true
  }`;

  expect(genDiff(file1, file2)).toBe(expectedOutput);
});
