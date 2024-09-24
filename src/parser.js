import { extname } from 'path';
import { readFileSync } from 'fs';
import yaml from 'js-yaml';

const parseFile = (filepath) => {
  const fileExtension = extname(filepath);
  const data = readFileSync(filepath, 'utf-8');

  switch (fileExtension) {
    case '.json':
      return JSON.parse(data);
    // case '.yaml':
    case '.yml':
      return yaml.load(data);
    default:
      throw new Error(`unknown file format ${fileExtension}`);
  }
};

export default parseFile;
