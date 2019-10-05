import { Box, Color } from 'ink';
import React from 'react';

const Loader: React.FC = ({ children }) => (
  <Box>
    <Color>
      {' '}
      {children}
      {' '}
    </Color>
  </Box>
);

export default Loader;
