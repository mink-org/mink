# m**i**nk

Get an overview of your work life in a single terminal window.

m**i**nk is an interactive terminal application designed to give you an overview of whatever you want.

> THIS IS STILL A WORK IN PROGRESS

## Install

First you need to install the package, it uses Node.js so make sure you have that already installed.

```bash
npm i -g mink
```

Create a `.minkrc` file somewhere, you can have different mink projects in different folders, whenever you run `mink`
it will automatically go up the tree to find the closest one.

```bash
touch ~/.minkrc
```

## Setup (`.minkrc`)

You can arrange your project how you like, the config file will need a plugins property.
The order of this matters as it will be reflected in the terminal order.
A plugin will refer to a already installed npm package, it can either be a string. 

```json
{
    "plugins": [
        "@mink/plugin-welcome"
    ]
}
```

Or if the plugin needs some options (api keys for example) you can set a plugin as an object.

```json
{
    "plugins": [
        {
            "resolve": "@mink/plugin-welcome",
            "options": {
                "token": "abc",
                "something": true
            }
        }
    ]
}
```


### Run

If you have installed mink globally with npm/yarn you can call it from anywhere.

```bash
mink
```

---

## Features

- Build the views you want quickly.
- Access different views with arrow keys or shortcuts.
- Manage navigation and plugins in a single `.minkrc` config file.
- Unified components for navigation, selection, focus and IA.

