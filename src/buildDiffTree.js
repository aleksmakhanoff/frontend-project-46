import _ from 'lodash';

const buildDiffTree = (data1, data2) => {
  const allKeys = _.sortBy(Object.keys({ ...data1, ...data2 }));

  return allKeys.map((key) => {
    switch (true) {
      case !Object.hasOwn(data2, key):
        return { key, type: 'removed', value: data1[key] };
      case !Object.hasOwn(data1, key):
        return { key, type: 'added', value: data2[key] };
      case typeof data1[key] === 'object' && typeof data2[key] === 'object':
        return { key, type: 'nested', children: buildDiffTree(data1[key], data2[key]) };
      case data1[key] !== data2[key]:
        return {
          key, type: 'changed', oldValue: data1[key], newValue: data2[key],
        };
      default:
        return { key, type: 'unchanged', value: data1[key] };
    }
  });
};

export default buildDiffTree;
