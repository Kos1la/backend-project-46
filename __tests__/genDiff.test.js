import genDiff from '../src/genDiff.js';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path from 'path';
import parseFile from '../src/parser.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('genDiff json and yaml files', () => {
  const file1 = parseFile(getFixturePath('file1.yml'));
  const file2 = parseFile(getFixturePath('file2.yml'));
  const expected = readFile('expected.txt').trim();

  expect(genDiff(file1, file2)).toBe(expected);
});
