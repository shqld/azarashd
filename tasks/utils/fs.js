const fs = require('fs')
const { promisify } = require('util')

module.exports = fs.promises
  ? fs.promises
  : {
      ...fs,
      readFile: promisify(fs.readFile),
      readdir: promisify(fs.readdir),
      writeFile: promisify(fs.writeFile),
    }
