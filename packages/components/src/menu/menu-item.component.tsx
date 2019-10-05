import React from 'react';
import { Box, Color } from 'ink';

export interface IMenuItemProps {
  isFocused?: boolean;
  hasChildren?: boolean;
}

const MenuItem: React.FC<IMenuItemProps> = ({ isFocused, hasChildren, children }) => {
  return (
    <Box justifyContent='space-between'>
      <Box>
        <Color yellow={isFocused} bold={isFocused}>{children}</Color>
      </Box>
      <Box marginLeft={1}>
        <Color yellow={isFocused}>{isFocused ? '' : ' '}</Color>
      </Box>
    </Box>
  );
};

export default MenuItem;
