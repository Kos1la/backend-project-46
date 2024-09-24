import { extname } from 'path';
import { readFileSync } from 'fs';

const parseFile = (filepath) => {
  const fileExtension = extname(filepath);
  const data = readFileSync(filepath, 'utf-8');

  if (fileExtension === '.json') {
    return JSON.parse(data);
  }
  throw new Error(`unknown file format ${fileExtension}`);
};
