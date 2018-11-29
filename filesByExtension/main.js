const filterFilesFn = require (./filterFiles.js);

const folder = process.argv[2]
const ext = '.' + process.argv[3]

modular(folderName, extension, callback);

callback(errObj, listArray) {
  if (errObj !== null) {
    console.log('there was an error', err);
  } else {
    console.log(listArray("<br />"));
  }
}
