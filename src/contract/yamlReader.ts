import fs from 'fs';
import * as yaml from 'js-yaml';

export class YamlReader {
  static readYaml(filePath: string): any {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      return yaml.load(fileContents) as any;
    } catch (error) {
      throw new Error(`Failed to read YAML file: ${error}`);
    }
  }
}
