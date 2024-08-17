#!/usr/bin/env node

const { logDirectoryStructure } = require('./index')
const path = require('path')
const process = require('process')

const [, , rootDir] = process.argv

if (!rootDir) {
  console.error('Usage: treescan <rootDir>')
  process.exit(1)
}

logDirectoryStructure(path.resolve(rootDir))
