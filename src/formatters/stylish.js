import _ from 'lodash';

const spaceForBigIndent = 6;
const spaceForSmallIndent = 4;
const spaceForVerySmallIndent = 2;
const stringify = (value, spaces) => {
  const indent = ' '.repeat(spaces + spaceForBigIndent);

  const indentClose = ' '.repeat(spaces + spaceForVerySmallIndent);
  if (!_.isObject(value)) {
    return value;
  }
  const entries = _.keys(value);
  const nestedValue = entries.map((key) => {
    if (_.isObject(value[key])) {
      return `${indent}${key}: ${stringify(
        value[key],
        spaces + spaceForSmallIndent
      )}\n`;
    }
    return `${indent}${key}: ${value[key]}\n`;
  });
  return `{\n${nestedValue.join('')}${indentClose}}`;
};

const render = (tree) => {
  const iter = (data, spaces = spaceForVerySmallIndent) =>
    data.map((key) => {
      const { name, type, children, value, beforeValue, afterValue } = key;
      const indent = ' '.repeat(spaces);
      const indentClose = ' '.repeat(spaces + spaceForVerySmallIndent);

      switch (type) {
        case 'added': {
          return `\n${indent}+ ${name}: ${stringify(value, spaces)}`;
        }
        case 'deleted': {
          return `\n${indent}- ${name}: ${stringify(value, spaces)}`;
        }
        case 'nested': {
          return `\n${indent}  ${name}: {${iter(
            children,
            spaces + spaceForSmallIndent
          ).join('')}\n${indentClose}}`;
        }
        case 'changed': {
          return `\n${indent}- ${name}: ${stringify(
            beforeValue,
            spaces
          )}\n${indent}+ ${name}: ${stringify(afterValue, spaces)}`;
        }
        case 'unchanged': {
          return `\n${indent}  ${name}: ${stringify(value, spaces)}`;
        }
        default: {
          throw new Error('Invalid style indentation');
        }
      }
    });

  return `{${iter(tree).join('')}\n}`;
};
const stylish = (data) => {
  const result = render(data);
  return result;
};
export default stylish;
