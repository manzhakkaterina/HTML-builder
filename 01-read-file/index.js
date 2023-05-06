var fs = require("fs");
var path = require("path");

path = path.join(__dirname, 'text.txt');
console.log(path);

//fs.ReadStream наследует от stream.Readable
var stream = new fs.ReadStream(path, {encoding: 'utf-8'});
 
stream.on('readable', function(){
    var data = stream.read();
    console.log(data);
});
