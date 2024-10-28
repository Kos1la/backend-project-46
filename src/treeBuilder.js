import _ from "lodash";

const makeAddedNode = (key, data2) => ({
  name: key,
  value: data2[key],
  type: "added",
});
const makeDeletedNode = (key, data1) => ({
  name: key,
  value: data1[key],
  type: "deleted",
});
const makeNestedNode = (key, data1, data2, makeTree) => ({
  name: key,
  type: "nested",
  children: makeTree(data1[key], data2[key]),
});
const makeChangedNode = (key, data1, data2) => ({
  name: key,
  type: "changed",
  beforeValue: data1[key],
  afterValue: data2[key],
});
const makeUnchangedNode = (key, data1) => ({
  name: key,
  value: data1[key],
  type: "unchanged",
});

const makeTree = (data1, data2) => {
  const allKeys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));

  return allKeys.map((key) => {
    if (!_.has(data1, key)) return makeAddedNode(key, data2);
    if (!_.has(data2, key)) return makeDeletedNode(key, data1);
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return makeNestedNode(key, data1, data2, makeTree);
    }
    if (data1[key] !== data2[key]) return makeChangedNode(key, data1, data2);
    return makeUnchangedNode(key, data1);
  });
};
export default makeTree;
