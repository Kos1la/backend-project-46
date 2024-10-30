import stylish from './stylish.js';
import plain from './plain.js';

const formatFile = (tree, format) => {
  switch (format) {
    case 'json':
      return JSON.stringify(tree);
    case 'plain':
      return plain(tree);
    case 'stylish':
      return stylish(tree);
    default:
      throw new Error(
        `There is no type called: '.${format}'! Try plain, json or stylish`,
      );
  }
};
export default formatFile;
