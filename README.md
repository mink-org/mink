# m**i**nk

Get an overview of your work life in a single terminal window.

m**i**nk is an interactive terminal application designed to give you an overview of whatever you want.

## WORK IN PROGRESS

## Features

- Build the views you want quickly.
- Access different views with arrow keys or shortcuts.
- Manage navigation and plugins in a single `.minkrc` config file.
- Unified components for navigation, selection, focus and IA.

## Plan

1. `yarn global add mink` or `npm i mink -g`
2. customise `~/.minkrc` how you want, add plugins, sort order etc
2. run `mink`.

## How

On install `mink` will install it's dependencies such as components, default plugins and cli.
On load it will search for a `.minkrc` once found it will load each plugin and fail if a plugin is not installed.

```json
{
  "plugins": [
    "my-mink-plugin",
    {
      "resolve": "my-other-plugin-that-has-options",
      "options": {}
    }
  ]
}
```

Plugin will export a menu structure with each leaf as a component.
