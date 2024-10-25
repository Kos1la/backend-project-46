import _ from "lodash";
import parseFile from "./parser.js";

const genDiff = (filepath1, filepath2) => {
  const data1 = parseFile(filepath1);
  const data2 = parseFile(filepath2);

  if (_.isEqual(data1, data2)) {
    return "{}";
  }

  const keys = _.sortBy(_.union(Object.keys(data1), Object.keys(data2)));

  const result = keys.map((key) => {
    if (!Object.hasOwn(data2, key)) {
      return `  - ${key}: ${data1[key]}`;
    }
    if (!Object.hasOwn(data1, key)) {
      return `  + ${key}: ${data2[key]}`;
    }
    if (data1[key] !== data2[key]) {
      return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
    }
    return `    ${key}: ${data1[key]}`;
  });

  return `{\n${result.join("\n")}\n}`;
};

export default genDiff;
