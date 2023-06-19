const fs = require('fs')

// const readFile = fs.readFileSync('/usr/local/lib//node_modules/learnyounode/docs-nodejs/fs.html');
// readFile.toString();

// var fs = require('fs');
var file = process.argv[2];
console.log(fs.readFileSync(file).toString().split('\n').length-1);

//solucion younode
// const fs = require('fs')
    
//     const contents = fs.readFileSync(process.argv[2])
//     const lines = contents.toString().split('\n').length - 1
//     console.log(lines)
 
    // note you can avoid the .toString() by passing 'utf8' as the
    // second argument to readFileSync, then you'll get a String!
    //
    // fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1