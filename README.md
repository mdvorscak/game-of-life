[![Build Status][travis-image]][travis-url] [![license][license-image]][license-url] [![hosted][hosted-image]][hosted-url]

# game-of-life

This project is an implementation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) using rust, web assembly and javascript. The code here is [based on this tutorial](https://rustwasm.github.io/docs/book/game-of-life/introduction.html)

## game-of-life is built with

Rust, WebAssembly, Svelte, and Rollup

## Play

[Play it live here][hosted-url]

## Features

- Variable board sizes
- Pausing
- Stepping
- Randomizing a board
- Manual board editting (just click a cell to toggle it's state)

## Running locally

To run a production version of this game locally, first run the command(s):

`git clone git@github.com:mdvorscak/game-of-life.git && cd game-of-life/www && npm i && npm run serve:prod`

Then navigate to `localhost:8080`

## Build Setup

From the `www` directory:

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build and serve production at localhost:8080
npm run serve:prod

```

[travis-url]: https://app.travis-ci.com/github/mdvorscak/game-of-life
[travis-image]: https://img.shields.io/travis/com/mdvorscak/game-of-life?style=flat-square
[license-url]: MIT-LICENSE.txt
[license-image]: https://img.shields.io/github/license/mdvorscak/game-of-life?style=flat-square
[hosted-url]: https://mdvorscak-game-of-life.surge.sh/
[hosted-image]: https://img.shields.io/badge/Hosted%20On-Surge-green.svg?style=flat-square
