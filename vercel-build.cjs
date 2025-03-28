const { execSync } = require('child_process');

try {
  // Run Vite build using the node_modules/.bin path directly
  execSync('node ./node_modules/vite/bin/vite.js build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}