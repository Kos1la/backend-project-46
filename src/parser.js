import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const parseFile = (filepath) => {
  const extname = path.extname(filepath);
  const data = fs.readFileSync(filepath, "utf-8");

  if (extname === ".json") {
    return JSON.parse(data);
  }
  if (extname === ".yaml" || extname === ".yml") {
    return yaml.load(data);
  }
  throw new Error(`Unsupported file format: ${extname}`);
};

export default parseFile;
