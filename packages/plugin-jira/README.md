# Jira Plugin for mink

Create a API token for Jira at https://id.atlassian.com/manage/api-tokens

## Sections

### Board

View active sprint tickets as a table (key, type, summary and status)

#### Install

```bash
yarn global add @mink/plugin-jira
```

#### Options

```json
{
    "resolve": "@mink/plugin-jira",
    "options": {
        "host": "yourcomanpy.atlassian.net",
        "projectKey": "MNK",
        "boardId": 123,
        "email": "edward.knowles@example.com",
        "token": "qwertyugfgdhuygbhqj3nhfgjb"
    }
}
```
