#!/usr/bin/env node
import { program } from 'commander';
import fs from 'fs';
import path from 'path';
import comparator from '../src/comparator.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>');

program.action((filepath1, filepath2) => {
  const file1 = fs.readFileSync(path.resolve(process.cwd(), filepath1), 'utf-8');
  const file2 = fs.readFileSync(path.resolve(process.cwd(), filepath2), 'utf-8');

  const obj1 = JSON.parse(file1);
  const obj2 = JSON.parse(file2);

  comparator(obj1, obj2);
});

program
  .parse(process.argv);
