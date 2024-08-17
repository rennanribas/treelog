const { logDirectoryStructure } = require('./index')
const path = require('path')
const process = require('process')

const [, , rootDir] = process.argv

if (!rootDir) {
  console.error('Usage: node src/cli.js <rootDir>')
  process.exit(1)
}

logDirectoryStructure(path.resolve(rootDir))
