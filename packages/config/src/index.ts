import rc from 'rc';

export interface IConfig {
  config: string;
  plugins?: Array<string | { resolve: string; options: object }>;
}

const APP_NAME = 'mink';
const config = () => rc(APP_NAME);

export default config;
