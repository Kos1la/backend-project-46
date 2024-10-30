import { fileURLToPath } from 'url';
import * as path from 'path';
import { readFileSync } from 'fs';
import gendiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getPath = (filename) =>
  path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getPath(filename), 'utf-8');

const expectedJson = readFile('expected.txt');
const expectedStylish = readFile('expectedStylish.txt');
const expectedPlain = readFile('expectedPlain.txt');

const jsonFile1 = getPath('file1.json');
const jsonFile2 = getPath('file2.json');
const yamlFile1 = getPath('file1.yaml');
const yamlFile2 = getPath('file2.yaml');

const testCases = [
  { file1: jsonFile1, file2: jsonFile2, expected: expectedStylish },
  { file1: yamlFile1, file2: yamlFile2, expected: expectedStylish },
  {
    file1: jsonFile1,
    file2: jsonFile2,
    format: 'stylish',
    expected: expectedStylish,
  },
  {
    file1: yamlFile1,
    file2: yamlFile2,
    format: 'stylish',
    expected: expectedStylish,
  },
  {
    file1: jsonFile1,
    file2: jsonFile2,
    format: 'plain',
    expected: expectedPlain,
  },
  {
    file1: yamlFile1,
    file2: yamlFile2,
    format: 'plain',
    expected: expectedPlain,
  },
  {
    file1: jsonFile1,
    file2: jsonFile2,
    format: 'json',
    expected: expectedJson,
  },
  {
    file1: yamlFile1,
    file2: yamlFile2,
    format: 'json',
    expected: expectedJson,
  },
];

test.each(testCases)(
  '.add($file1, $file2, $style)',
  ({ file1, file2, format, expected }) => {
    expect(gendiff(file1, file2, format)).toEqual(expected);
  },
);
