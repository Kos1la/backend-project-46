import fs from "fs";
import _ from "lodash";
import path from "path";
import parseYaml from "js-yaml"; // Убедитесь, что вы установили js-yaml

const parseFile = (filepath) => {
  const data = fs.readFileSync(filepath, "utf-8");
  const ext = path.extname(filepath);

  if (ext === ".json") {
    return JSON.parse(data);
  } else if (ext === ".yaml" || ext === ".yml") {
    return parseYaml.load(data);
  }
  throw new Error(`Unsupported file type: ${ext}`);
};

const checkEquality = (data1, data2) => {
  return _.isEqual(data1, data2);
};

const formatDiffLine = (key, value1, value2) => {
  if (value1 === value2) {
    return `    ${key}: ${value1}`;
  }
  return [`  - ${key}: ${value1}`, `  + ${key}: ${value2}`];
};

const processKey = (key, data1, data2) => {
  if (!Object.hasOwn(data2, key)) {
    return `  - ${key}: ${data1[key]}`;
  }
  if (!Object.hasOwn(data1, key)) {
    return `  + ${key}: ${data2[key]}`;
  }
  return formatDiffLine(key, data1[key], data2[key]);
};

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  if (checkEquality(data1, data2)) {
    return "{}";
  }

  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const result = sortedKeys.flatMap((key) => {
    const diffLine = processKey(key, data1, data2);
    return diffLine instanceof Array ? diffLine : [diffLine];
  });

  return `{\n${result.join("\n")}\n}`;
};

export default genDiff;
