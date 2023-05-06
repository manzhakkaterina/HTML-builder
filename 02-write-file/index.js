var fs = require("fs");
var path = require("path");
var { stdin, stdout, exit} = require("process");

var absPath = path.join(__dirname, 'text.txt');
var output = fs.createWriteStream(absPath);

stdout.write('Enter text here (for end - enter exit) - \n');
stdin.on('data', data => {
	if (data.toString().trim() === 'exit'){
		endProgramm();
	}
	output.write(data);
});

 process.on('SIGINT', endProgramm); 
 
 function endProgramm() {
	stdout.write('\nSee you later and good bye!');
	exit();
} 
