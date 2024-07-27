import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';
import parse from '../src/parsers.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);

const jsonFile1 = getFixturePath('file1.json');
const jsonFile2 = getFixturePath('file2.json');
const yamlFile1 = getFixturePath('file1.yml');
const yamlFile2 = getFixturePath('file2.yml');

const jsonData1 = parse(fs.readFileSync(jsonFile1, 'utf-8'), 'json');
const jsonData2 = parse(fs.readFileSync(jsonFile2, 'utf-8'), 'json');
const yamlData1 = parse(fs.readFileSync(yamlFile1, 'utf-8'), 'yaml');
const yamlData2 = parse(fs.readFileSync(yamlFile2, 'utf-8'), 'yaml');

const expectedOutputJson = `{
  - follow: false
  + follow: undefined
    host: hexlet.io
  - proxy: 123.234.53.22
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

test('gendiff with JSON files', () => {
  const result = genDiff(jsonData1, jsonData2);
  expect(result).toEqual(expectedOutputJson);
});

test('gendiff with YAML files', () => {
  const result = genDiff(yamlData1, yamlData2);
  expect(result).toEqual(expectedOutputJson);
});
