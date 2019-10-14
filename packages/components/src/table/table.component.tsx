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
  meta: object;
  columns: ITableColumn[];
  data: ITableData[];
}

const Table: React.FC<ITableProps> = ({ meta, columns, data }) => {
  return (
    <Box>
      <Box flexDirection="column">
        <Box>{' '}</Box>
        {data.map((row, index) => (
          <Box key={index}>
            [{index}]
          </Box>
        ))}
      </Box>
      {columns.map((c) => (
        <Box flexDirection="column" key={c.id} paddingLeft={1}>
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
    <Box marginY={1}>
      {isPending && <Loader>Loading</Loader>}
      {!isPending && tableProps && <Table {...tableProps} />}
    </Box>
  );
};

export default TableComponent;
