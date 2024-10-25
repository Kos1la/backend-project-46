import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import genDiff from "../src/gendiff.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) =>
  path.join(__dirname, "..", "__fixtures__", filename);

describe("genDiff", () => {
  test("should correctly compare two JSON files", () => {
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

  test("should correctly compare two YAML files", () => {
    const file1 = getFixturePath("file1.yml");
    const file2 = getFixturePath("file2.yml");
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

  test("should return an empty diff for identical files", () => {
    const file1 = getFixturePath("file1.json");
    const file2 = getFixturePath("file1.json");
    const expectedOutput = "{}";
    expect(genDiff(file1, file2)).toBe(expectedOutput);
  });
});
