# Bootstrap npm starter template

[![Build Status](https://github.com/twbs/bootstrap-npm-starter/workflows/CI/badge.svg)](https://github.com/twbs/bootstrap-npm-starter/actions)

This repo is a template for creating new Bootstrap-powered npm projects, maintained by Bootstrap co-author @mdo. You can also use it as your own Bootstrap prototyping sandbox.

Built with Bootstrap v4.4.1 with plans to update for v5.

## Repo template

Setup as a starter template, you can easily generate a new GitHub repository. From the repository homepage, click the `Use this template` button.

## What's included

- Single HTML page (`index.html`) to demonstrate how to include Bootstrap.
- Includes Bootstrap (currently using v4.4.1) source files via npm.
- npm scripts (see `package.json`) for compiling and autoprefixing Sass, watching for changes, and starting a basic local server.
- Example stylesheet (`scss/starter.scss`) highlighting two ways to include and customize Bootstrap.
- Example JavaScript file (`assets/js/starter.js`) showing how to import all of Bootstrap, or just the parts you need.

## Usage

Be sure to have Node.js installed before proceeding.

```shell
# Clone the repo
git clone https://github.com/twbs/bootstrap-npm-starter
cd bootstrap-npm-starter

# Install dependencies
npm i

# Compile Sass
npm run css-compile

# Watch Sass for changes (uses nodemon)
npm run watch

# Start local server (uses serve)
npm run server
```

For the most straightforward development, open two Terminal tabs to execute `npm run server` and `npm run watch` at the same time.

Open <http://localhost:3000> to see the page in action.

## Actions CI

We've included some simple GitHub Actions in this template repo. When you generate your new project from here, you'll have the same tests that run whenever a pull request is created. We've included Actions for the following:

- Stylelint for your CSS

When your repository is generated, you won't see anything in the Actions tab until you create a new pull request. You can customize these Actions, add new ones, or remove them outright if you wish.

[Learn more about GitHub Actions](https://github.com/features/actions), [read the Actions docs](https://help.github.com/en/actions), or [browse the Actions Marketplace](https://github.com/marketplace/actions).

## Copyright

&copy; @mdo 2020 and licensed MIT.
