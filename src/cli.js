#!/usr/bin/env node

const { logDirectoryStructure } = require('./index')
const path = require('path')
const process = require('process')

const [, , rootDir, ...args] = process.argv

// Parse command-line arguments
const options = {
  ignore: [
    'node_modules',
    '.git',
    'build',
    'dist',
    'public',
    'coverage',
    '.next',
  ],
}
args.forEach((arg) => {
  if (arg.startsWith('--ignore=')) {
    const additionalIgnore = arg.substring(9).split(',')
    options.ignore = [...options.ignore, ...additionalIgnore] // Add user-specified ignores
  }
})

if (!rootDir) {
  console.error('Usage: treescan <rootDir> [--ignore=<directories>]')
  process.exit(1)
}

logDirectoryStructure(path.resolve(rootDir), options)
