import { Box, Color } from 'ink';
import React from 'react';
import Spinner from 'ink-spinner';

const Loader: React.FC = ({ children }) => (
  <Box>
    <Color green>
      <Spinner type="dots12"/>
    </Color>
    <Box>
      {children}
    </Box>
  </Box>
);

export default Loader;
