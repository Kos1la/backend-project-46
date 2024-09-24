import genDiff from '../src/genDiff';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('genDiff json files', () => {
  const file1 = readFile('file1.json');
  const file2 = readFile('file2.json');
  const expected = readFile('expected.txt').trim();

  expect(genDiff(JSON.parse(file1), JSON.parse(file2))).toBe(expected);
});
