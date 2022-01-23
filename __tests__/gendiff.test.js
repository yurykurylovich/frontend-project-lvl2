import fs from 'fs';
import getFixturePath from "../src/getFixturePath.js";
import comparator from '../src/comparator.js';

let expectedData;

beforeAll(() => {
  expectedData = fs.readFileSync(getFixturePath('output.txt'), 'utf-8');
})

test('🥝 compare json files:', () => {
  const actualData = comparator('file1.json', 'file2.json');
  expect(actualData).toBe(expectedData);
});
test('🍋 compare flat yaml files:', () => {
  const actualData = comparator('file1.yaml', 'file2.yaml');
  expect(actualData).toBe(expectedData);
});
