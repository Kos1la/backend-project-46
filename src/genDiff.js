import _ from 'lodash';

const genDiff = (filepath1, filepath2) => {
  const keys = _.union(_.keys(filepath1), _.keys(filepath2));
  const sortedKeys = _.sortBy(keys);

  const diff = sortedKeys.map((key) => {
    if (!_.has(filepath2, key)) {
      return `- ${key}: ${filepath1[key]}`;
    }
    if (!_.has(filepath1, key)) {
      return `+ ${key}: ${filepath2[key]}`;
    }
    if (!_.isEqual(filepath1[key], filepath2[key])) {
      return `- ${key}: ${filepath1[key]}\n+ ${key}: ${filepath2[key]}`;
    }
    return `  ${key}: ${filepath1[key]}`;
  });
  return diff.join('\n');
};

export default genDiff;
