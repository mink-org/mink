import JiraClient from 'jira-connector';

import { IPluginOptions } from '../types';

class Jira {
  private readonly boardId: number;
  private readonly projectKey: string;
  private client: JiraClient;

  constructor({ projectKey, boardId, host, email, token }: IPluginOptions) {
    this.projectKey = projectKey;
    this.client = new JiraClient({ host, basic_auth: { email, api_token: token } });
    this.boardId = boardId;
  }

  async getBoardIssues() {
    const results = await this.client.board.getIssuesForBoard({
      boardId: this.boardId,
      jql: `project = "${this.projectKey}" AND Sprint in openSprints() ORDER BY status DESC, issuetype DESC`,
      fields: ['summary', 'issuetype', 'status', 'assignee'],
      maxResults: 50
    });

    return results.issues.map((issue) => ({
      key: issue.key,
      issuetype: issue.fields.issuetype.name,
      summary: issue.fields.summary,
      status: issue.fields.status.name,
    }));
  }

  async getVersions() {
    return await this.client.project.getVersions({
      projectIdOrKey: this.projectKey,
    });
  }

  async getAssignedIssues() {
    const results = await this.client.search.search({
      jql: `project = "${this.projectKey}" AND resolution = Unresolved AND assignee in (currentUser()) ORDER BY status DESC, issuetype DESC`,
      fields: ['summary', 'issuetype', 'status'],
      maxResults: 15
    } as any);

    return results.issues.map((issue) => ({
      key: issue.key,
      issuetype: issue.fields.issuetype.name,
      summary: issue.fields.summary,
      status: issue.fields.status.name,
    }));
  }
}

export default Jira;
