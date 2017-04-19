import { execSync } from 'child_process';

const demo = process.argv.pop(); // the last arg is the config name

const res = execSync(`yarn webpack -- --config configs/webpack.${demo}.config.babel.js`);
console.log(res.toString());

console.log(`Demo '${demo}' built. Result in build/`);
