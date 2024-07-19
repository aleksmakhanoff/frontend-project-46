const genDiff = (data1, data2) => {
    const allKeys = Object.keys({ ...data1, ...data2 }).sort();
  
    const result = allKeys.map((key) => {
      if (data1[key] && !data2[key]) {
        return `  - ${key}: ${data1[key]}`;
      }
      if (!data1[key] && data2[key]) {
        return `  + ${key}: ${data2[key]}`;
      }
      if (data1[key] !== data2[key]) {
        return `  - ${key}: ${data1[key]}\n  + ${key}: ${data2[key]}`;
      }
      return `    ${key}: ${data1[key]}`;
    });
  
    return `{\n${result.join('\n')}\n}`;
  };
  
  export default genDiff;
  