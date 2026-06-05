import { cpSync, mkdirSync, copyFileSync } from 'fs'
import { resolve } from 'path'

// Create dist folder
mkdirSync('dist', { recursive: true })

// Copy standalone HTML as index.html
copyFileSync('index-standalone.html', 'dist/index.html')

// Copy public assets (images, _redirects, etc.)
cpSync('public', 'dist', { recursive: true })

// Update _redirects to point to index.html (already named correctly)
console.log('Build complete: dist/index.html ready for deployment')
