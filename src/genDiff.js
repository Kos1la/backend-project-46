import _ from 'lodash';

// Функция для получения статуса ключа
const getKeyStatus = (key, obj1, obj2) => {
  if (!_.has(obj2, key)) return 'removed';
  if (!_.has(obj1, key)) return 'added';
  if (!_.isEqual(obj1[key], obj2[key])) return 'updated';
  return 'unchanged';
};

// Основная функция генDiff
const genDiff = (filepath1, filepath2) => {
  const keys = _.sortBy(_.union(_.keys(filepath1), _.keys(filepath2)));

  const diff = keys.map((key) => {
    const status = getKeyStatus(key, filepath1, filepath2);
    switch (status) {
      case 'removed':
        return `- ${key}: ${filepath1[key]}`;
      case 'added':
        return `+ ${key}: ${filepath2[key]}`;
      case 'updated':
        return `- ${key}: ${filepath1[key]}\n+ ${key}: ${filepath2[key]}`;
      case 'unchanged':
        return `  ${key}: ${filepath1[key]}`;
      default:
        return '';
    }
  });

  return diff.join('\n');
};

export default genDiff;
