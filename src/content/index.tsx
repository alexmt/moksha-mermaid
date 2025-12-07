import yaml from 'yaml';

import aboutContentYaml from './about.yaml';
import servicesContentYaml from './services.yaml';

export const aboutContent = yaml.parse(aboutContentYaml) as {
  title: string;
  items: string[];
};

export const servicesContent = yaml.parse(servicesContentYaml) as {
  name: string;
  subtitle: string;
}[];