const stringifyValue = (value) => {
    if (typeof value === 'object' && value !== null) {
      return '[complex value]';
    }
    if (typeof value === 'string') {
      return `'${value}'`;
    }
    return String(value);
  };
  
  const plain = (diffTree, path = '') => {
    const lines = diffTree.flatMap((node) => {
      const fullPath = path ? `${path}.${node.key}` : node.key;
  
      switch (node.type) {
        case 'added':
          return `Property '${fullPath}' was added with value: ${stringifyValue(node.value)}`;
        case 'removed':
          return `Property '${fullPath}' was removed`;
        case 'changed':
          return `Property '${fullPath}' was updated. From ${stringifyValue(node.oldValue)} to ${stringifyValue(node.newValue)}`;
        case 'nested':
          return plain(node.children, fullPath);
        case 'unchanged':
          return [];
        default:
          throw new Error('Output format is not correct');
      }
    });
  
    return lines.join('\n');
  };
  
  export default plain;
  