# Screeps21_kAI3

![ ](https://screeps.com/images/logotype-animated.svg)

# What me added

Screeps-Inscribe from ([resir014](https://github.com/resir014/screeps-inscribe))

Logger from ([resir014](https://github.com/resir014/Stonehenge))

JS2FlowChart from ([Bogdan-Lyashenko](https://github.com/Bogdan-Lyashenko/js-code-to-svg-flowchart))

Rollup-plugin Visualizer from ([btd](https://github.com/btd/rollup-plugin-visualizer))

Auto-changelog from ([CookPete](https://github.com/CookPete/auto-changelog))

## Info 4 JS2Flow

JS2Flow throws some errors in the way i use it. i couldn't find out how to use it "correct". I start it via npm which executes a Powershell-Script. But basically it works. There is some error with "optional chaining" in flow2js. i tryed to install those plugins manualy but it won't work. Well, this is thought to use with js not ts...

## Info 4 Auto-Changelog

This will create a Auotmatic Changelog for your Repo.

## Console Commands

Commands are defined in Consolecommands.ts
Test if they work by typing in

```bash
cc.test()
```

in the Console.

## Helper

| RCL |  ROAD   | Container | Spawn | Extension | Rampart | Walls | Tower | Storage | Link | Extrakt | Lab | Terminal | Observe | P-Spawn |
| :-: | :-----: | :-------: | :---: | :-------: | :-----: | :---: | :---: | :-----: | :--: | :-----: | :-: | :------: | :-----: | :-----: |
|  1  |   200   |     5     |   1   |     0     |    0    |   0   |   0   |    0    |  0   |    0    |  0  |    0     |    0    |    0    |
|  2  |   45k   |     5     |   1   |     5     |  300k   |   1   |   0   |    0    |  0   |    0    |  0  |    0     |    0    |    0    |
|  3  |  135k   |     5     |   1   |    10     |   1m    |   1   |   1   |    0    |  0   |    0    |  0  |    0     |    0    |    0    |
|  4  |  405k   |     5     |   1   |    20     |   3m    |   1   |   1   |    1    |  0   |    0    |  0  |    0     |    0    |    0    |
|  5  | 1.215m  |     5     |   1   |    30     |   1b    |   1   |   2   |    1    |  2   |    0    |  0  |    0     |    0    |    0    |
|  6  | 3.645m  |     5     |   1   |    40     |   3b    |   1   |   2   |    1    |  3   |    1    |  3  |    1     |    0    |    0    |
|  7  | 1.0935b |     5     |   1   |    50     |   1t    |   1   |   3   |    1    |  4   |    1    |  6  |    1     |    0    |    0    |
|  8  | 9.999b  |     5     |   1   |    60     |   3t    |   1   |   6   |    1    |  6   |    1    | 10  |    1     |    1    |    1    |

# Origin from here

# Screeps Typescript Starter

Screeps Typescript Starter is a starting point for a Screeps AI written in Typescript. It provides everything you need to start writing your AI whilst leaving `main.ts` as empty as possible.

## Basic Usage

You will need:

- [Node.JS](https://nodejs.org/en/download) (10.x || 12.x)
- A Package Manager ([Yarn](https://yarnpkg.com/en/docs/getting-started) or [npm](https://docs.npmjs.com/getting-started/installing-node))
- Rollup CLI (Optional, install via `npm install -g rollup`)

Download the latest source [here](https://github.com/screepers/screeps-typescript-starter/archive/master.zip) and extract it to a folder.

Open the folder in your terminal and run your package manager to install the required packages and TypeScript declaration files:

```bash
# npm
npm install

# yarn
yarn
```

Fire up your preferred editor with typescript installed and you are good to go!

### Rollup and code upload

Screeps Typescript Starter uses rollup to compile your typescript and upload it to a screeps server.

Move or copy `screeps.sample.json` to `screeps.json` and edit it, changing the credentials and optionally adding or removing some of the destinations.

Running `rollup -c` will compile your code and do a "dry run", preparing the code for upload but not actually pushing it. Running `rollup -c --environment DEST:main` will compile your code, and then upload it to a screeps server using the `main` config from `screeps.json`.

You can use `-cw` instead of `-c` to automatically re-run when your source code changes - for example, `rollup -cw --environment DEST:main` will automatically upload your code to the `main` configuration every time your code is changed.

Finally, there are also NPM scripts that serve as aliases for these commands in `package.json` for IDE integration. Running `npm run push-main` is equivalent to `rollup -c --environment DEST:main`, and `npm run watch-sim` is equivalent to `rollup -cw --dest sim`.

#### Important! To upload code to a private server, you must have [screepsmod-auth](https://github.com/ScreepsMods/screepsmod-auth) installed and configured!

## Typings

The type definitions for Screeps come from [typed-screeps](https://github.com/screepers/typed-screeps). If you find a problem or have a suggestion, please open an issue there.

## Documentation

We've also spent some time reworking the documentation from the ground-up, which is now generated through [Gitbooks](https://www.gitbook.com/). Includes all the essentials to get you up and running with Screeps AI development in TypeScript, as well as various other tips and tricks to further improve your development workflow.

Maintaining the docs will also become a more community-focused effort, which means you too, can take part in improving the docs for this starter kit.

To visit the docs, [click here](https://screepers.gitbook.io/screeps-typescript-starter/).

## Contributing

Issues, Pull Requests, and contribution to the docs are welcome! See our [Contributing Guidelines](CONTRIBUTING.md) for more details.
