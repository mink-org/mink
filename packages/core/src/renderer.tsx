import { Box, render } from 'ink';
import React, { useState } from 'react';

import { Menu } from '@mink/components';

const App = ({ navigation }) => {
  const [activeComponent, setActiveComponent] = useState();

  return (
    <Box>
      <Menu items={navigation} onChange={setActiveComponent} />
      <Box>{activeComponent}</Box>
    </Box>
  );
};

function renderer(navigation: any[]) {
  return render(<App navigation={navigation} />);
}

export default renderer;
