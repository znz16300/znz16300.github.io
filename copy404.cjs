const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'dist', 'index.html');
const destPath = path.join(__dirname, 'dist', '404.html');

fs.copyFile(filePath, destPath, err => {
  if (err) throw err;
});
