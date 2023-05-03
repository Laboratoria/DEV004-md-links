const {mdLinks,} = require ('./index.js');
const {mdExt} = require ('./index.js');
const {dirList} = require ('./index.js');
const {absPath} = require ('./index.js');

mdLinks('notebook.md').then(() => {console.log('sí existe');})
.catch((error)=>{console.log(error)}); 

absPath('notebook.md').then(() => {console.log('esto es abs path');})
.catch((error)=>{console.log(error)}); 

// absPath('notebook.md');

dirList();

mdExt('notebook.md').then(()=> {console.log('es archivo md');})
.catch((error)=>{console.log(error)});


