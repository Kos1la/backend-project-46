import fs from 'fs';
import path from 'path';
import parseFile from './parsers.js';
import makeTree from './treeBuilder.js';
import formatFile from './formatters/index.js';

const getAbsolutePath = (file) => path.resolve(process.cwd(), file);

const getExtensions = (file) => path.extname(file).slice(1);

const getContentFromFile = (file) => {
  const absolutePath = getAbsolutePath(file);
  const fileContent = fs.readFileSync(absolutePath, 'utf-8');
  const extension = getExtensions(file);

  return parseFile(fileContent, extension);
};

const gendiff = (path1, path2, format = 'stylish') => {
  const parsedFileData1 = getContentFromFile(path1);
  const parsedFileData2 = getContentFromFile(path2);
  const tree = makeTree(parsedFileData1, parsedFileData2);
  return formatFile(tree, format);
};

export default gendiff;
