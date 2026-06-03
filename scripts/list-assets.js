const fs = require("fs");
const path = require("path");

const root = process.cwd();

function listFiles(folder) {
  const absolute = path.join(root, folder);
  if (!fs.existsSync(absolute)) return [];
  return fs.readdirSync(absolute)
    .filter((file) => fs.statSync(path.join(absolute, file)).isFile())
    .map((file) => path.join(folder, file));
}

const assets = {
  collections: listFiles("collections"),
  environments: listFiles("environments"),
  data: listFiles("data")
};

console.log(JSON.stringify(assets, null, 2));

