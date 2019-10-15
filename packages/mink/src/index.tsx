import { ReactNode } from 'react';

import getConfig from '@mink/config';
import { renderer } from '@mink/core';

export interface IPluginNavigation {
  name: string;
  children?: IPluginNavigation[];
  component?: ReactNode;
}

export interface IPlugin {
  pluginName: string;
  navigation: IPluginNavigation[];
}

const config = getConfig();

// Load Plugins
const plugins: IPlugin[] = config.plugins.map((pluginName) => {
  let plugin;

  try {
    if (typeof pluginName === 'string') {
      plugin = require(pluginName);
    }

    if ((pluginName as any).resolve) {
      plugin = require((pluginName as any).resolve);
    }
  } catch (e) {
    handlePluginNotFound(e.message, config.config);
  }

  return plugin;
});

// Setup Navigation
const navigation = plugins.map((p) => ({ name: p.pluginName, children: p.navigation }));

// Clean Console
console.clear();

// Render mink
renderer({ config, navigation });

function handlePluginNotFound(message: string, rcFile: string): void {
  console.error(`Error loading ${rcFile}`);
  console.error(message);
  process.exit(1);
}
