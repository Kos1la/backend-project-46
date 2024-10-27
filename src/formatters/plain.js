import _ from "lodash";

const getValue = (value) => {
  if (value === null) {
    return null;
  }
  if (_.isObject(value)) {
    return "[complex value]";
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return String(value);
};

const plain = (tree) => {
  const iter = (data, keyName) =>
    data
      .filter(({ type }) => type !== "unchanged")
      .map(({ name, type, children, value, beforeValue, afterValue }) => {
        const path = `${keyName}${name}`;

        switch (type) {
          case "added": {
            return `Property '${path}' was added with value: ${getValue(
              value
            )}`;
          }
          case "deleted": {
            return `Property '${path}' was removed`;
          }
          case "changed": {
            return `Property '${path}' was updated. From ${getValue(
              beforeValue
            )} to ${getValue(afterValue)}`;
          }
          case "nested": {
            return iter(children, `${path}.`);
          }
          default:
            throw new Error("Unknown data type");
        }
      })
      .join("\n");

  return iter(tree, "");
};

export default plain;
