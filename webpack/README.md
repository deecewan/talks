# Webpack

> A brilliant module bundler

## What we're aiming for

Webpack aims to combine all your code into a single (*) file that can be used in a browser.
Browsers have no concept of 'modules' as we do in the node world, so webpack *bundles* all of
the modules required.

The end result should be a file that you can embed into a webpage to execute the code you want.

## Running these demos

First, run `yarn` or `npm install`.

To check the output, you can use 1 of 3 options.

- Fully qualified webpack path, with a config
  - `./node_modules/.bin/webpack --config configs/webpack.<type>.config.babel.js`
- Slightly shorter-hand using `yarn`:
  - `yarn webpack -- --config configs/webpack.<type>.config.babel.js`
- Use the build script I made for you
  - `yarn build -- <type>` e.g `yarn build -- shake`

Output will go to `build/bundle.js`.

## Why webpack?

### Tree Shaking

[Config](./configs/webpack.shake.config.babel.js) [Demo](./src/shake)

While webpack aims to provide you with a simple module-bundling experience, it actually provides
you with so much more. For a start, with webpack 2, 'tree-shaking' reduces the amount of code that
you have to ship, by reducing it to it's smallest working parts.

With tree-shaking, any unused exports are dropped during the minification process, as the code is
no longer reachable.

### Loads *everything*

[Config](./configs/webpack.loaders.config.babel.js) [Demo](./src/loaders)

We can use webpack to loader almost anything.  If it doesn't know how to do it by itself (which it's
getting much better at with webpack 2), you can 'teach' it, using **loaders**.

Here, we're going to import CSS directly into our JS, so it can be semantically imported into the place
it is being used.

The loader also enables 'css-modules', which is an amazing advancement in modular CSS, by the same guy
who started webpack (I think. I don't have internet to verify this right now.)

### Plugins

The plugin-based architecture means that many, many things are possible.
In the `shake` example, we used the built-in minifier plugin.  We'll see more plugins
in the final example

### Super easy code splitting - Wasn't covered

Webpack implements the new `import()` function to load new modules.  It also uses
these calls to know where it can break up your code,

We can create `vendor` bundles, which are going to remain mostly the same, allowing
our customers to download a lot less code when we make application updates.  Playing
with this also allows you to get your bundle size down low which, using the magic of
CDNs/HTTP2, means you can serve a bunch of small bundles instead of one large one.

### What else?

I didn't have long here, so I've just tried to outline what I think is cool.  Hopefully,
this will encourage you to:

- experiment with writing your own configs, and finding cool plugins that enhance your workflow
- not be scared to change things in a config
- maybe even eject from CRA so you can take advantage of some of these things
- think carefully about the bundle you're serving to your customers, and how you can make their
  experience substantially faster.

### Further

If you have some more simple webpack tips and tricks you want to demo, feel free to PR to this
repo.  Throw your example code in `src/` and your config in `configs/`.

Maybe if we have a collection of pieces that people can compose/learn from, more people will
be willing to give it a go.