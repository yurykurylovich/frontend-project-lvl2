#!/usr/bin/env node

import { program } from 'commander';
import comparator from "../src/comparator.js";

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')

program
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>');

program.action((filepath1, filepath2) => {
  console.log(comparator(filepath1, filepath2));
});

program
  .parse(process.argv);
