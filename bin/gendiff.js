#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/genDiff.js';
import parseFile from '../src/parser.js';
import path from 'path';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-V, --version', 'output the version number')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    const absolutePath1 = path.resolve(process.cwd(), '__fixtures__', filepath1);
    const absolutePath2 = path.resolve(process.cwd(), '__fixtures__', filepath2);

    const data1 = parseFile(absolutePath1);
    const data2 = parseFile(absolutePath2);

    const diff = genDiff(data1, data2);
    console.log(diff);
  });

program.parse(process.argv);
