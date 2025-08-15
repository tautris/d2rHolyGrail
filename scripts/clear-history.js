const path = require('path');
const fs = require('fs');
const os = require('os');

console.log('Clearing ever found items...');

// Common electron-json-storage paths for Windows
const possiblePaths = [
  path.join(os.homedir(), 'AppData', 'Roaming', 'd2rholygrail', 'everFound.json'),
  path.join(os.homedir(), 'AppData', 'Roaming', 'Diablo 2 Holy Grail', 'everFound.json'),
  path.join(os.homedir(), 'AppData', 'Roaming', 'HolyGrail', 'everFound.json'),
  path.join(os.homedir(), '.config', 'd2rholygrail', 'everFound.json'),
];

let cleared = false;

for (const everFoundPath of possiblePaths) {
  try {
    if (fs.existsSync(everFoundPath)) {
      fs.unlinkSync(everFoundPath);
      console.log(`✅ Ever found items cleared: ${everFoundPath}`);
      cleared = true;
    }
  } catch (error) {
    console.log(`⚠️ Error clearing ${everFoundPath}:`, error.message);
  }
}

if (!cleared) {
  console.log('ℹ️ No ever found items file found to clear');
}