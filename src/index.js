const fs = require('fs')
const path = require('path')

function logDirectoryStructure(rootDir, { ignore = [] } = {}, prefix = '') {
  // Print the directory name
  console.log(`${prefix}${path.basename(rootDir)}/`)

  // Read items in the directory
  const items = fs.readdirSync(rootDir)

  items.forEach((item) => {
    const itemPath = path.join(rootDir, item)
    const stats = fs.statSync(itemPath)

    if (stats.isDirectory()) {
      // Skip ignored directories
      if (!ignore.includes(item)) {
        // Recursive call for directories
        logDirectoryStructure(itemPath, { ignore }, `${prefix}  `)
      }
    } else {
      // Print files that are not in the ignore list
      console.log(`${prefix}  - ${item}`)
    }
  })
}

module.exports = { logDirectoryStructure }
