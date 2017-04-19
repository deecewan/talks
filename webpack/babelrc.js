/**
 * This file modifies a .babelrc to make it compatible with Webpack2
 * At the moment, all it does is disable `modules` so that webpack can
 * handle them on its own.  You could add in certain plugins here if you
 * wanted them only to run inside of webpack.
 */

import { readFileSync } from 'fs';
import { join } from 'path';

const config = JSON.parse(readFileSync(join(__dirname, '.babelrc')));

config.presets = [["env", { modules: false }]];

export default config;
