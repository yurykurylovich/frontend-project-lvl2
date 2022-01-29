import _ from 'lodash';

const outputValue = (value) => {
  if (_.isPlainObject(value)) return '[complex value]';
  return typeof value === 'string' ? `'${value}'` : value;
};

const makePlain = (tree) => {
  const iter = (currentValue, path) => {
    const lines = currentValue
      .filter(({ status }) => status !== 'unchanged')
      .map((line) => {
        const keys = [...path, line.key];
        const property = keys.join('.');

        switch (line.status) {
          case 'added':
            return `Property '${property}' was added with value: ${outputValue(
              line.value,
            )}`;
          case 'deleted':
            return `Property '${property}' was removed`;
          case 'changed':
            return `Property '${property}' was updated. From ${outputValue(
              line.oldValue,
            )} to ${outputValue(line.newValue)}`;
          case 'nested':
            return iter(line.children, keys);
          default:
            throw new Error(`Wrong status: ${line.status}`);
        }
      });
    return lines.join('\n');
  };

  return iter(tree, []);
};

export default makePlain;
