# bootstrap-npm-starter

Use this repo as a template for new Bootstrap-powered npm projects, or as your own Bootstrap prototyping sandbox.

## What's included

- Single HTML page (`index.html`)
- npm scripts for compiling and autoprefixing Sass, watching for changes, and starting a basic local server
- Bootstrap source code via npm
- Examples for importing all of Bootstrap's Sass, or only the parts you need
- Examples for overriding default Sass variables and adding custom styles
- Examples for importing Bootstrap's JS and dependencies wholesale, or only the modules you need

## Usage

Requires Node.js before proceeding.

```shell
git clone https://github.com/twbs/bootstrap-npm-starter
cd bootstrap-npm-starter

# Install dependencies
npm i

# Compile Sass
npm run css-compile

# Watch Sass for changes (uses nodemon)
npm run watch

# Start local server (uses http-server)
npm run server
```

For the most straightforward development, open two Terminal tabs to execute `npm run server` and `npm run watch` at the same time.

Open <http://localhost:3000> to see the page in action.

## Copyright

&copy; @mdo and licensed MIT.
