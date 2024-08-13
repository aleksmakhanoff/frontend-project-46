import { test, expect } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.join('__fixtures__', filename);

const jsonFile1 = getFixturePath('file1.json');
const jsonFile2 = getFixturePath('file2.json');
const yamlFile1 = getFixturePath('file1.yml');
const yamlFile2 = getFixturePath('file2.yml');

const expectedStylishOutput = fs.readFileSync(getFixturePath('expectedStylish.txt'), 'utf-8');
const expectedPlainOutput = fs.readFileSync(getFixturePath('expectedPlain.txt'), 'utf-8');
const expectedJsonOutput = fs.readFileSync(getFixturePath('expectedJson.txt'), 'utf-8');

test('gendiff with stylish format (JSON)', () => {
  const result = genDiff(jsonFile1, jsonFile2, 'stylish');
  console.log('Result:', result);
  console.log('Expect:', expectedStylishOutput);
  expect(result).toEqual(expectedStylishOutput);
});

test('gendiff with plain format (JSON)', () => {
  const result = genDiff(jsonFile1, jsonFile2, 'plain');
  console.log('Result:', result);
  console.log('Expect:', expectedPlainOutput);
  expect(result).toEqual(expectedPlainOutput);
});

test('gendiff with json format (JSON)', () => {
  const result = genDiff(jsonFile1, jsonFile2, 'json');
  console.log('Result:', result);
  console.log('Expect:', expectedJsonOutput);
  expect(result).toEqual(expectedJsonOutput);
});
