const filterFilesFn = require ("./filterFiles.js");

const folder = process.argv[2]
const ext = '.' + process.argv[3]

modular(folderName.modular, extension, callback.modular);

callback(errObj, listArray) {
  if (errObj !== null) {
    console.log('there was an error', err);
  } else {
    console.log(listArray("<br />"));
  }
}
