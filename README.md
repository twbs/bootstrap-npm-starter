<p align="center">
  <img src="https://user-images.githubusercontent.com/98681/84929378-99291700-b084-11ea-89db-8b5ad75d9258.png" width="300" height="175" alt="Bootstrap npm logo">
</p>

<h3 align="center">Bootstrap npm starter template</h3>

<p align="center">Create new Bootstrap-powered npm projects in no time.</p>

## About

`bootstrap-npm-starter` is a GitHub template repository for creating new Bootstrap-powered npm projects, maintained by Bootstrap co-author @mdo. You can also use it as your own Bootstrap prototyping sandbox. It's built with Bootstrap v4.5.0 with plans to update for v5.

[![Build Status](https://github.com/twbs/bootstrap-npm-starter/workflows/CI/badge.svg)](https://github.com/twbs/bootstrap-npm-starter/actions)

## Repo template

Setup as a starter template, you can easily generate a new GitHub repository. From the repository homepage, click the `Use this template` button.

## What's included

- Single HTML page (`index.html`) to demonstrate how to include Bootstrap.
- Includes Bootstrap (currently using v4.5.0) source files via npm.
- npm scripts (see `package.json`) for compiling and autoprefixing Sass, watching for changes, and starting a basic local server.
- Example stylesheet (`scss/starter.scss`) highlighting two ways to include and customize Bootstrap.
- Example JavaScript file (`assets/js/starter.js`) showing how to import all of Bootstrap, or just the parts you need.

## Usage

Be sure to have [Node.js](https://nodejs.org/) installed before proceeding.

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

## Scripts

The following npm scripts are available to you in this starter repo. With the exception of `npm start`, the remaining scripts can be run from your command line with `npm run scriptName`.

| Script | Description |
| --- | --- |
| `server` | Starts a local server (<http://localhost:3000>) for development |
| `watch` | Automatically recompiles CSS as it watches the `scss` directory for changes |
| `css` | Runs `css-compile` and `css-prefix` |
| `css-compile` | Compiles source Sass into CSS |
| `css-prefix` | Runs Autoprefixer on the compiled CSS |
| `css-purge` | Runs PurgeCSS to remove CSS that is unused by `index.html` |

## Advanced usage

Take this starter repository to another level with some built-in addons that you can enable and customize.

### Optimizing CSS

Before you start to use tools that remove Bootstrap styling like [PurgeCSS](#purgecss), you can make some broad optimizations by only including the stylesheets you think you'll need.

Look to the `scss/starter.scss` file for your two options of including all of Bootstrap, or a subset of our styles and components. By default we've only imported the stylesheets that Bootstrap requires plus those of the components we're planning to use.

Uncomment specific lines as needed, then recompile to use them.

### Optimizing JS

Similar to optimizing CSS, we publish individual scripts for each of our plugins. This allows you to import only what you need, versus the entire bundle and dependencies. For example, if you don't plan on using dropdowns, tooltips, or popovers, you can safely omit the Popper.js depdendency. Bootstrap 4 requires jQuery though, so you won't be able to safely remove that until v5 launches.

See the `js/starter.js` file for an example of how to import all of Bootstrap's JS or just the individual pieces. By default we've only imported our modal JavaScript since we have no need for anything else.

You can add more options here, or import the entire `bootstrap-bundle.min.js` file, to get all JavaScript plugins and Popper.js.

### PurgeCSS

[PurgeCSS](https://purgecss.com/) is a [PostCSS](https://postcss.org) plugin that removes unused CSS based on your site's HTML. It finds rulesets that are unused by your HTML and removes them, ensuring only what's needed is sent to your site's visitors while improving file size and performance.

We've included a single npm script that runs PurgeCSS against our single `index.html` file to remove unused styles from `assets/css/starter.css`.

To purge your CSS, run `npm run css-purge` from the command line. This executes the following:

```shell
npm purgecss --css assets/css/starter.css --content index.html --output assets/css/
```

PurgeCSS is a PostCSS plugin and [can be configured](https://purgecss.com/configuration.html) to your exact needs with a little extra effort, including additional [command line options](https://purgecss.com/CLI.html).

## Actions CI

We've included some simple GitHub Actions in this template repo. When you generate your new project from here, you'll have the same tests that run whenever a pull request is created. We've included Actions for the following:

- Stylelint for your CSS

When your repository is generated, you won't see anything in the Actions tab until you create a new pull request. You can customize these Actions, add new ones, or remove them outright if you wish.

[Learn more about GitHub Actions](https://github.com/features/actions), [read the Actions docs](https://help.github.com/en/actions), or [browse the Actions Marketplace](https://github.com/marketplace/actions).

## Copyright

&copy; @mdo 2020 and licensed MIT.
