import React from 'react';
import { Box } from 'ink';

const Author: React.FC = (props) => (
  <Box>Author - options: {JSON.stringify(props)}</Box>
);

export default Author;
