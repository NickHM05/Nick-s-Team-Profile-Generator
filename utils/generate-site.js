const fs = require('fs');
const pageTemplate = require('../Src/pageTemplate')

const writeFile = (data) => {
    fs.writeFile('./dist/index.html', pageTemplate(data), err => {
      // if there is an error, the promise was rejected and send the error to the Promise's '.catch' method.
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve function here too.
        return;
      }
  
      // if everything went as planned, resolve the Promise and send the right data to the '.then()' method.
      else {
        console.log('File created! Inside the "dist" folder, the index.html file was created containing your Team Profile Website.')
      }
    })
  }
  
  
  
  module.exports = { writeFile };