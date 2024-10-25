import fs from "fs";
import _ from "lodash";
import path from "path";
import parseYaml from "js-yaml"; // Не забудьте установить js-yaml для работы с YAML

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

const formatDiff = (key, value1, value2) => {
  if (value1 === value2) {
    return `    ${key}: ${value1}`;
  }
  return [`  - ${key}: ${value1}`, `  + ${key}: ${value2}`];
};

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  if (_.isEqual(data1, data2)) {
    return "{}"; // или любое другое представление для идентичных объектов
  }

  const keys = _.union(Object.keys(data1), Object.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const result = sortedKeys.map((key) => {
    if (!Object.hasOwn(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (!Object.hasOwn(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return formatDiff(key, data1[key], data2[key]);
    }
    return `    ${key}: ${data1[key]}`;
  });

  return `{\n${result.flat().join("\n")}\n}`; // используйте flat() для разворачивания вложенных массивов
};

export default genDiff;
