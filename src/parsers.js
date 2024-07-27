import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

const parse = (data, format) => {
  const parser = parsers[format];
  if (!parser) {
    throw new Error(`Unsupported format: ${format}`);
  }
  return parser(data);
};

export default parse;
