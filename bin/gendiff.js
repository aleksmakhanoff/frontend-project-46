#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(filepath1);
    const absolutePath2 = path.resolve(filepath2);

    const data1 = JSON.parse(fs.readFileSync(absolutePath1, 'utf-8'));
    const data2 = JSON.parse(fs.readFileSync(absolutePath2, 'utf-8'));

    const diff = genDiff(data1, data2);
    console.log(diff);
  });

program.parse(process.argv);
