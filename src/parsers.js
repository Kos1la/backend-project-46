import yaml from 'js-yaml';

const parseFile = (fileContent, format) => {
  switch (format) {
    case 'json':
      return JSON.parse(fileContent);
    case 'yml':
    case 'yaml':
      return yaml.load(fileContent);
    default:
      throw new Error(
        `Invalid extension: '${format}'! Try 'json', 'yml', or 'yaml'.`,
      );
  }
};
export default parseFile;
