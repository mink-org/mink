import { Box, Color } from 'ink';
import React from 'react';

const Item: React.FC<any> = ({ children, position, size }) => {
  const isLast: boolean = position === size;
  const isEnd: boolean = position >= size - 1;

  if (isLast) {
    return (
      <Box>
        <Color green bgGreen>
          {' '}
        </Color>
        <Color black bgGreen>
          {children}
        </Color>
        <Color green bgGreen>
          {' '}
        </Color>
        <Color green></Color>
      </Box>
    );
  }

  if (isEnd) {
    return (
      <Box>
        <Color blue bgBlue>
          {' '}
        </Color>
        <Color black bgBlue>
          {children}
        </Color>
        <Color blue bgBlue>
          {' '}
        </Color>
        <Color blue bgGreen>
          
        </Color>
      </Box>
    );
  }

  return (
    <Box>
      <Color blue bgBlue>
        █
      </Color>
      <Color black bgBlue>
        {children}
      </Color>
      <Color blue bgBlue>
        █
      </Color>
      <Color black bgBlue>
        
      </Color>
    </Box>
  );
};

const Breadcrumbs: React.FC<{ breadcrumbs: string[] }> = ({ breadcrumbs }) => {
  return (
    <Box>
      {breadcrumbs.map((breadcrumb, i, arr) => (
        <Item key={breadcrumb} position={i} size={arr.length - 1}>
          {breadcrumb}
        </Item>
      ))}
    </Box>
  );
};

export default Breadcrumbs;
