import { Box, render, Instance } from 'ink';
import React, { useState } from 'react';

import { Menu } from '@mink/components';

export interface IRenderParams {
  navigation: any[];
  config: object;
}

type IRendererProps = IRenderParams;

const findComponent = (navigation, path) => {
  return path.reduce((acc, curr) => acc[curr] && acc[curr].children || acc[curr].component, navigation);
};

const App: React.FC<IRendererProps> = ({ navigation, config }) => {
  const [indexPath, setIndexPath] = useState<number[]>([]);
  let Component;
  let componentOptions = {};

  try {
    Component = findComponent(navigation, indexPath);
    componentOptions = config.plugins[indexPath[0]] && config.plugins[indexPath[0]].options;
  } catch (e) {

  }

  return (
    <Box flexDirection={'column'} >
      <Menu items={navigation} indexPath={indexPath} setIndexPath={setIndexPath} />
      <Box>{!Array.isArray(Component) && React.createElement(Component, { options: componentOptions })}</Box>
    </Box>
  );
};

function renderer({ navigation, config }: IRenderParams): Instance {
  return render(<App navigation={navigation} config={config} />);
}

export default renderer;
