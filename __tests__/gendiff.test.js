import fs from 'fs';
import getFixturePath from '../src/getFixturePath.js';
import comparator from '../src/comparator.js';

let expectedDataStylish;
let expectedDataPlain;

beforeAll(() => {
  expectedDataStylish = fs.readFileSync(getFixturePath('output.txt'), 'utf-8');
  expectedDataPlain = fs.readFileSync(getFixturePath('outputPlain.txt'), 'utf-8');
});

test('🥝 compare json files (default output): ', () => {
  const actualData = comparator('file1.json', 'file2.json');
  expect(actualData).toBe(expectedDataStylish);
});
test('🍋 compare flat yaml files (plain output): ', () => {
  const actualData = comparator('file1.yaml', 'file2.yaml', 'plain');
  expect(actualData).toBe(expectedDataPlain);
});
