#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/genDiff.js';
import { readFileSync } from 'fs';
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

    const data1 = readFileSync(absolutePath1);
    const data2 = readFileSync(absolutePath2);

    const parsedData1 = JSON.parse(data1);
    const parsedData2 = JSON.parse(data2);

    const diff = genDiff(parsedData1, parsedData2);
    console.log(diff);
  });

program.parse(process.argv);
