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

const expectedOutput = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

test('gendiff with JSON files', () => {
  const result = genDiff(jsonData1, jsonData2);
  expect(result).toEqual(expectedOutput);
});

test('gendiff with YAML files', () => {
  const result = genDiff(yamlData1, yamlData2);
  expect(result).toEqual(expectedOutput);
});
