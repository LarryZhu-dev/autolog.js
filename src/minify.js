const fs = require('fs');
const CleanCSS = require('clean-css');

const css = fs.readFileSync('./src/autolog.css', 'utf8');
const minified = new CleanCSS().minify(css).styles;
// 读取ts文件，获取开头为`const cssStr =`的行，将其替换为压缩后的css
const ts = fs.readFileSync('./src/index.ts', 'utf8');
const cssStr = ts.match(/const cssStr = `([\s\S]*?)`;/)[1];
const newTs = ts.replace(cssStr, minified);
fs.writeFileSync('./src/index.ts', newTs);

