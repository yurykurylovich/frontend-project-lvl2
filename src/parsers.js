import path from 'path';
import yaml from 'js-yaml';
import readFile from './readFile.js';

const getFormat = (file) => path.extname(file);

const parseFile = (file) => {
  const format = getFormat(file);

  if (format === '.json') {
    return JSON.parse(readFile(file));
  }

  if (format === '.yaml' || format === '.yml') {
    return yaml.load(readFile(file));
  }

  return null;
};

export default parseFile;
