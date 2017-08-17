import zlip from ‘zlib’;
var fs = require('fs');
class lab4{

    syncFileRead(fileName){


       return   fs.readFileSync(fileName).toString();

}
     asyncFileRead(fileName,callback){

   fs.readFile(fileName, function (err, data) {
      if (err) return console.error(err);
      callback(data.toString());
   });
}

  compressFileStream(inputFile,outputFile){
   fs.createReadStream(inputFile)
      .pipe(zlib.createGzip())
      .pipe(fs.createWriteStream('input.txt.gz'));
}
}
export {lab4}
