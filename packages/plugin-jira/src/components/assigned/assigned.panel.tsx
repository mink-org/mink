import React from 'react';
import { Table } from '@mink/components';

import Jira from '../../services/jira.service';

import useIssues from './assigned.hooks';

import { IPluginOptions } from '../../types';

const AssignedPanel: React.FC<{ options: IPluginOptions; }> = ({ options }) => {
  const jira = new Jira(options);
  const { issues: data, isPending } = useIssues(jira);
  const columns = [
    { id: 'key', label: 'Key' },
    { id: 'issuetype', label: 'Type' },
    { id: 'summary', label: 'Summary' },
    { id: 'status', label: 'Status' },
  ];

  return (
    <Table tableProps={{columns, data: data, meta: {}}} isPending={isPending} />
  );
};

export default AssignedPanel;
