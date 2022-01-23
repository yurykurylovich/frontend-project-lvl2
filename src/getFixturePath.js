import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => {
  const fixturePath = path.join(__dirname, '..', '__fixtures__', filename);
  return fixturePath;
};

export default getFixturePath;
