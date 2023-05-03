const {mdLinks,} = require ('./index.js');
const {mdExt} = require ('./index.js');
mdLinks('notebook.md').then(() => {console.log('sí existe');})
.catch((error)=>{console.log(error)}); 

mdExt('notebook.md').then(()=> {console.log('es archivo md');})
.catch((error)=>{console.log(error)});