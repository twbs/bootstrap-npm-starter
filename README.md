<p align="center">
  <img src=".github/logo.png" width="300" height="175" alt="Bootstrap npm logo">
</p>

<h3 align="center">Bootstrap npm starter template</h3>

<p align="center">Create new Bootstrap-powered npm projects in no time.</p>

## About

The **Bootstrap npm starter** is a GitHub template repository for quickly creating new [Bootstrap](https://getbootstrap.com)-powered projects with npm and [Parcel 2](https://v2.parceljs.org). Click `Use this template` above, or clone/download it as your own Bootstrap prototyping sandbox.

**Why Parcel?** Parcel compiles all our code—HTML, CSS, and JavaScript—quickly and easily for local development and production. Setup is straightforward, build tool depdencies are automatically handled, and there's flexibility for additional enhancements.

[![Build Status](https://github.com/twbs/bootstrap-npm-starter/workflows/CI/badge.svg)](https://github.com/twbs/bootstrap-npm-starter/actions)

## What's included

- [Bootstrap](https://getbootstrap.com) v5.1.0
- [Bootstrap Icons](https://icons.getbootstrap.com) v1.5.0
- [Parcel](https://v2.parceljs.org) v2.x for local development

Parcel provides a `serve`/`watch` task for local development and a `build` task for compiling a production-ready static site. Also included is Sass compiling, PostCSS/Autoprefix support, PurgeCSS support (via plugin), and JavaScript importing and compiling.

## Usage

Be sure to have [Node.js](https://nodejs.org/) installed before proceeding.

```shell
# Clone the repo
git clone https://github.com/twbs/bootstrap-npm-starter
cd bootstrap-npm-starter

# Install dependencies
npm i

# Start local server
npm start

# Build site for deployment
npm run build
```

Run `npm start` and open <http://localhost:1234> in your browser for local development.

## Scripts

The following npm scripts are available to you in this starter repo. With the exception of `npm start` and `npm test`, the remaining scripts can be run from your command line with `npm run scriptName`.

| Script | Description |
| --- | --- |
| `start` | Runs `parcel serve` to start a local server (<http://localhost:1234>) out of `./dist/` directory |
| `build` | Runs `parcel build` to compile all site assets into `./build/` directory |
| `css-lint` | Runs [Stylelint](https://stylelint.io) against source Sass for code quality |
| `test` | Alias to run `css-lint` script |

## Advanced usage

Take this starter repository to another level with some built-in addons that you can enable and customize.

### Config files

| Name | Description |
| --- | --- |
|  `.browserslistrc` | Used by PostCSS and Autoprefixer to support intended browsers (matches latest Bootstrap) |
| `.editorconfig` | Automatically sets code style conventions across the project in your editor |
| `.postcssrc.json` |  |
| `.sassrc` |  |
| `.stylelintignore` |  |
| `.stylelintrc` |  |
| `purgecss.config.js` |  |

### Optimizing CSS

Before you start to use tools that remove Bootstrap styling like [PurgeCSS](#purgecss), you can make some broad optimizations by only including the stylesheets you think you'll need.

Look to the `src/starter.scss` file for your two options of including all of Bootstrap, or a subset of our styles and components. By default we've only imported the stylesheets that Bootstrap requires plus those of the components we're planning to use.

Uncomment specific lines as needed, then recompile to use them.

### Optimizing JS

Similar to optimizing CSS, we publish individual scripts for each of our plugins. This allows you to import only what you need, versus the entire bundle and dependencies. For example, if you don't plan on using dropdowns, tooltips, or popovers, you can safely omit the Popper.js depdendency. Bootstrap 4 requires jQuery though, so you won't be able to safely remove that until v5 launches.

See the `src/index.js` file for an example of how to import all of Bootstrap's JS or just the individual pieces. By default we've only imported our modal JavaScript since we have no need for anything else.

You can add more options here, or import the entire `bootstrap-bundle.min.js` file, to get all JavaScript plugins and Popper.js.

### PurgeCSS

**PurgeCSS is automatically run on with `npm run build`.**

[PurgeCSS](https://purgecss.com/) is a [PostCSS](https://postcss.org) plugin that removes unused CSS based on your site's HTML. It finds rulesets that are unused by your HTML and removes them, ensuring only what's needed is sent to your site's visitors while improving file size and performance. It [can be configured](https://purgecss.com/configuration.html) to your exact needs with a little extra effort, including additional [command line options](https://purgecss.com/CLI.html).

## Actions CI

We've included some simple GitHub Actions in this template repo. When you generate your new project from here, you'll have the same tests that run whenever a pull request is created. We've included Actions for the following:

- Stylelint for your CSS

When your repository is generated, you won't see anything in the Actions tab until you create a new pull request. You can customize these Actions, add new ones, or remove them outright if you wish.

[Learn more about GitHub Actions](https://github.com/features/actions), [read the Actions docs](https://help.github.com/en/actions), or [browse the Actions Marketplace](https://github.com/marketplace/actions).

### Stylelint

Stylelint is included, as is Bootstrap's default Stylelint config, [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap). This is the same linter configuration we use in the main Bootstrap project. It's run via the `npm test` command, which is invoked in our `ci.yml` Actions workflow file.

At the root of the repo, `.stylelintignore` is used to list files that we ignore when linting and `.stylelintrc` is where we tell Stylelint to use the Bootstrap config. The former is recommended based on your specific needs, while the latter is required.

## Copyright

&copy; @mdo 2020-2021 and licensed MIT.
