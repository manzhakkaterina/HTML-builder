var fs = require("fs");
var path = require("path");
var folder = 'secret-folder';
var addFolderPath = path.join(__dirname, folder);

fs.readdir(addFolderPath, {encoding: 'utf-8', withFileTypes: true}, (err, files) => {
  if (err) console.error(err);
  for (let file of files) {
    if (file.isFile()) {
      let fileData = path.parse(file.name);
      fs.stat(path.join(addFolderPath, file.name), (err, stats) => {
        console.log(`${fileData.name} - ${fileData.ext} - ${stats.size / 1024}kb`);
      });
    }
  }
});
