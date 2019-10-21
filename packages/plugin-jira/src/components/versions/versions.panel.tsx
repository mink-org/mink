import React from 'react';
import { Table } from '@mink/components';

import Jira from '../../services/jira.service';

import useVersions from './versions.hooks';

import { IPluginOptions } from '../../types';

const VersionsPanel: React.FC<{ options: IPluginOptions; }> = ({ options }) => {
  const jira = new Jira(options);
  const { versions, isPending } = useVersions(jira);
  const columns = [
    { id: 'name', label: 'Name' },
    { id: 'description', label: 'Description' },
    { id: 'userReleaseDate', label: 'Release Date' },
    { id: 'released', label: 'Released' },
  ];

  return (
    <Table tableProps={{columns, data: versions, meta: {}}} isPending={isPending} />
  );
};

export default VersionsPanel;
