import stylish from './stylish.js';
import plain from './plain.js';
import makeJson from './json.js';

const formatFile = (tree, format) => {
  switch (format) {
    case 'plain':
      return plain(tree);
    case 'json':
      return makeJson(tree);
    case 'stylish':
      return stylish(tree);
    default:
      throw new Error(
        `There is no type called: '.${format}'! Try plain, json or stylish`,
      );
  }
};
export default formatFile;
