import _ from 'lodash';

const getIndent = (depth) => ' '.repeat(depth * 4);

const stringify = (value, depth) => {
  if (!_.isPlainObject(value)) {
    return String(value);
  }

  const indent = getIndent(depth + 1);
  const closingIndent = getIndent(depth);
  const entries = Object.entries(value).map(
    ([key, val]) => `${indent}${key}: ${stringify(val, depth + 1)}`,
  );

  return `{\n${entries.join('\n')}\n${closingIndent}}`;
};

const stylish = (diffTree, depth = 0) => {
  const indent = getIndent(depth);
  const lines = diffTree.map((node) => {
    switch (node.type) {
      case 'added':
        return `${indent}  + ${node.key}: ${stringify(node.value, depth + 1)}`;
      case 'removed':
        return `${indent}  - ${node.key}: ${stringify(node.value, depth + 1)}`;
      case 'changed':
        return [
          `${indent}  - ${node.key}: ${stringify(node.oldValue, depth + 1)}`,
          `${indent}  + ${node.key}: ${stringify(node.newValue, depth + 1)}`,
        ].join('\n');
      case 'nested':
        return `${indent}    ${node.key}: ${stylish(node.children, depth + 1)}`;
      case 'unchanged':
        return `${indent}    ${node.key}: ${stringify(node.value, depth + 1)}`;
      default:
        throw new Error('Output format is not correct');
    }
  });

  return `{\n${lines.join('\n')}\n${indent}}`;
};

export default stylish;
