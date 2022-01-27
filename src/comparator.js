import parseFile from './parsers.js';
import buildDiffTree from './buildDiffTree.js';
import makeFormattedOutput from './formatters/index.js';

const comparator = (file1, file2, format = 'stylish') => {
  if (!parseFile(file1) || !parseFile(file2)) {
    return null;
  }

  const obj1 = parseFile(file1);
  const obj2 = parseFile(file2);

  const tree = buildDiffTree(obj1, obj2);
  const result = makeFormattedOutput(tree, format);

  return result;
};
comparator('file1.json', 'file2.json');
export default comparator;
