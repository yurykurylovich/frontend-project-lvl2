import comparator from '../src/comparator.js';

const result = `{
    host: hexlet.io
  - timeout: 50
  + timeout: 20
  - proxy: 123.234.53.22
  - follow: false
  + verbose: true
}`;

test('🥝 compare flat json files:', () => {
  expect(comparator('file1.json', 'file2.json')).toBe(result);
});
test('🍋 compare flat yaml files:', () => {
  expect(comparator('file1.yaml', 'file2.yaml')).toBe(result);
});
