import _ from 'lodash';

const formatRemoved = (key, value) => `  - ${key}: ${value}`;
const formatAdded = (key, value) => `  + ${key}: ${value}`;
const formatUnchanged = (key, value) => `    ${key}: ${value}`;
const formatChanged = (key, value1, value2) =>
  `${formatRemoved(key, value1)}\n${formatAdded(key, value2)}`;

const genDiff = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const result = sortedKeys.map((key) => {
    if (!_.has(data2, key)) {
      return formatRemoved(key, data1[key]);
    }
    if (!_.has(data1, key)) {
      return formatAdded(key, data2[key]);
    }
    if (!_.isEqual(data1[key], data2[key])) {
      return formatChanged(key, data1[key], data2[key]);
    }
    return formatUnchanged(key, data1[key]);
  });

  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
