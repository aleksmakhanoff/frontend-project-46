#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';
import parse from '../src/parsers.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format', 'stylish') // Устанавливаем формат по умолчанию
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    const absolutePath1 = path.resolve(filepath1);
    const absolutePath2 = path.resolve(filepath2);

    const extname1 = path.extname(filepath1).slice(1);
    const extname2 = path.extname(filepath2).slice(1);

    const data1 = parse(fs.readFileSync(absolutePath1, 'utf-8'), extname1);
    const data2 = parse(fs.readFileSync(absolutePath2, 'utf-8'), extname2);

    const diff = genDiff(data1, data2, options.format);
    console.log(diff);
  });

program.parse(process.argv);
