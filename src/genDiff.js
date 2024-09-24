import _ from 'lodash';

const formatHandlers = {
  removed: (key, value) => `  - ${key}: ${value}`,
  added: (key, value) => `  + ${key}: ${value}`,
  unchanged: (key, value) => `    ${key}: ${value}`,
  changed: (key, value1, value2) => `  - ${key}: ${value1}\n  + ${key}: ${value2}`,
};

const getChangeType = (data1, data2, key) => {
  if (!_.has(data2, key)) return 'removed';
  if (!_.has(data1, key)) return 'added';
  if (!_.isEqual(data1[key], data2[key])) return 'changed';
  return 'unchanged';
};

const genDiff = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const result = sortedKeys.map((key) => {
    const changeType = getChangeType(data1, data2, key);
    const format = formatHandlers[changeType];
    return changeType === 'changed'
      ? format(key, data1[key], data2[key])
      : format(key, changeType === 'removed' ? data1[key] : data2[key]);
  });

  return `{\n${result.join('\n')}\n}`;
};

export default genDiff;
