const fs = require('fs')
const path = require('path')


// const folder = process.argv[2]
// const ext = '.' + process.argv[3]
function modular(folderName, extension, callback) {

  fs.readDir(folder, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    files.filter((file) => {
      // if (path.extname(file) === ext) {
      let filteredFileArray =  file.map(theFile => {
        return theFile === extensions ? theFile : callback(err) ;
      })
      return filteredFileArray;
      // }
    })
  })

  callback(null, filteredFileArray)

}

module.exports = {
  modular,
}
