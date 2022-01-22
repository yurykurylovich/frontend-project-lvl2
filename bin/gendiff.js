#!/usr/bin/env node
import {program} from "commander";
import fs from 'fs';
import path from 'path';
import _ from 'lodash';


program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')

program.action((filepath1, filepath2) => {
  const file1 = fs.readFileSync(path.resolve(process.cwd(), filepath1), 'utf-8')
  const file2 = fs.readFileSync(path.resolve(process.cwd(), filepath2), 'utf-8')

  console.log('file1', file1)
  console.log('file2', file2)

})



program
  .parse(process.argv)
