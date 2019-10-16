import React, { Fragment } from 'react';
import { Box, Color } from 'ink';

import Loader from '../loader';

interface ITableColumn {
  id: string;
  label: string;
}

interface ITableData {
  [key: string]: string | number | undefined | null;
}

interface ITableProps {
  meta?: object;
  columns: ITableColumn[];
  data: ITableData[];
}

const isLast = (i, a) => a.length - 1 === i;

const Table: React.FC<ITableProps> = ({ meta, columns, data }) => {
  return (
    <Box>
      {columns.map((c, i, a) => (
        <Box flexDirection="column" justifyContent={'space-between'} key={c.id} paddingRight={isLast(i, a) ? 0 : 4}>
          <Box>
            <Color bold underline blue>{c.label}</Color>
          </Box>
          {data.map((row, index) => (
            <Box key={index}>
              {row[c.id]}
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
};

const TableComponent: React.FC<{ isPending?: boolean; tableProps: ITableProps }> = ({ tableProps, isPending }) => {
  return (
    <Box>
      {isPending && <Loader>Loading</Loader>}
      {!isPending && tableProps && <Table {...tableProps} />}
    </Box>
  );
};

export default TableComponent;
