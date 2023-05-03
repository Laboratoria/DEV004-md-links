const {mdLinks,} = require ('./index.js');
const {mdExt} = require ('./index.js');
const {dirList} = require ('./index.js');
const {absPath, pathAbs} = require ('./index.js');
const pathUser = process.argv[2];
mdLinks(pathUser).then(() => {console.log('sí existe');})
.catch((error)=>{console.log(error)}); 

absPath(pathUser).then(() => {console.log('esto es abs path');})
.catch((error)=>{console.log(error)}); 

// absPath('notebook.md');

// dirList();

mdExt(pathUser).then(()=> {console.log('es archivo md');})
.catch((error)=>{console.log(error)});

console.log(pathAbs(pathUser), 'ss')