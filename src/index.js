const fs = require('fs')
const path = require('path')

function logDirectoryStructure(rootDir, prefix = '') {
  // Print the directory name
  console.log(`${prefix}${path.basename(rootDir)}/`)

  // Read items in the directory
  const items = fs.readdirSync(rootDir)

  items.forEach((item) => {
    const itemPath = path.join(rootDir, item)
    const stats = fs.statSync(itemPath)

    if (stats.isDirectory()) {
      // Recursive call for directories
      logDirectoryStructure(itemPath, `${prefix}  `)
    } else {
      // Print files
      console.log(`${prefix}  - ${item}`)
    }
  })
}

module.exports = { logDirectoryStructure }
