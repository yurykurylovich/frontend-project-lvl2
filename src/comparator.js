import _ from 'lodash';

// const object1 = {
//   host: 'hexlet.io',
//   timeout: 50,
//   proxy: '123.234.53.22',
//   follow: false,
// };
//
// const object2 = {
//   timeout: 20,
//   verbose: true,
//   host: 'hexlet.io',
// };

const comparator = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const keys = [...keys1, ...keys2];

  const cb = (acc, key) => {
    if (_.isEqual(obj1[key], obj2[key])) {
      acc[`  ${key}`] = obj1[key];
    } else {
      if (_.has(obj1, key)) {
        acc[`- ${key}`] = obj1[key];
      }
      if (_.has(obj2, key)) {
        acc[`+ ${key}`] = obj2[key];
      }
    }

    return acc;
  };

  const resultObj = keys.reduce(cb, {});

  const result = JSON.stringify(resultObj, null, '  ')
    .split('"')
    .join('')
    .split(',')
    .join('');

  console.log(result);
};

export default comparator;
