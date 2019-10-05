import { Box, Color } from 'ink';
import React from 'react';

const Status: React.FC = ({ children }) => (
  <Box>
    <Color white></Color>
    <Color bgWhite white>█</Color>
    <Color bgWhite black>{children}</Color>
    <Color bgWhite white>█</Color>
    <Color bgWhite black></Color>
    <Color bgBlack black>█</Color>
    <Box>
        <Color bgBlack white>m</Color>
        <Color bgBlack white bold>i</Color>
        <Color bgBlack white>nk</Color>
    </Box>
    <Color bgBlack black>█</Color>
  </Box>
);

export default Status;
