import _ from "lodash";

const makeTree = (data1, data2) => {
  const allKeys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  const createNode = (key) => {
    if (!_.has(data1, key))
      return { name: key, value: data2[key], type: "added" };
    if (!_.has(data2, key))
      return { name: key, value: data1[key], type: "deleted" };
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        name: key,
        type: "nested",
        children: makeTree(data1[key], data2[key]),
      };
    }
    if (data1[key] !== data2[key]) {
      return {
        name: key,
        type: "changed",
        beforeValue: data1[key],
        afterValue: data2[key],
      };
    }
    return { name: key, value: data1[key], type: "unchanged" };
  };

  return allKeys.map(createNode);
};

export default makeTree;
