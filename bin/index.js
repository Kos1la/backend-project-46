#!/usr/bin/env node

import { program } from "commander";
import genDiff from "../src/gendiff.js";
import path from "path";

program
  .name("gendiff")
  .description("Compares two configuration files and shows a difference.")
  .version("1.0.0")
  .arguments("<filepath1> <filepath2>")
  .action((filepath1, filepath2) => {
    const fullPath1 = path.resolve(process.cwd(), filepath1);
    const fullPath2 = path.resolve(process.cwd(), filepath2);

    console.log(genDiff(fullPath1, fullPath2));
  });

program.parse();
