// @link https://id.atlassian.com/manage/api-tokens
export interface IPluginOptions {
  host: string;
  email: string;
  token: string;
  boardId: number;
  projectKey: string;
}
