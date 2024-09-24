import { extname } from 'path';
import yaml from 'js-yaml';
import { readFileSync } from 'fs';

const parseFile = (filepath) => {
  const fileExtension = extname(filepath);
  const data = readFileSync(filepath, 'utf-8');

  if (fileExtension === '.json') {
    return JSON.parse(data);
  }

  if (fileExtension === '.yaml' || fileExtension === '.yml') {
    return yaml.load(data);
  }

  throw new Error(`Unsupported file format: ${fileExtension}`);
};

export default parseFile;
