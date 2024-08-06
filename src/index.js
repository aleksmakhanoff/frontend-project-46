import stylish from './formatters/stylish.js';
import buildDiffTree from './buildDiffTree.js';
import path from 'path';
import fs from 'fs';
import parse from '../src/parsers.js';

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const absolutePath1 = path.resolve(filepath1);
  const absolutePath2 = path.resolve(filepath2);

  const extname1 = path.extname(filepath1).slice(1);
  const extname2 = path.extname(filepath2).slice(1);

  const data1 = parse(fs.readFileSync(absolutePath1, 'utf-8'), extname1);
  const data2 = parse(fs.readFileSync(absolutePath2, 'utf-8'), extname2);

  const diffTree = buildDiffTree(data1, data2);
  console.log(JSON.stringify(diffTree, null, 2));
  return stylish(diffTree);
};

export default genDiff;
