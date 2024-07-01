const { resolve } = require('path');

function resolveRoot(p = '') {
  return resolve(process.cwd(), p);
}

module.exports.resolveRoot = resolveRoot;
