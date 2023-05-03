const {mdLinks} = require ('./index.js');
mdLinks('notebook.md').then(() => {console.log('sí existe');})
.catch((error)=>{console.log(error)}); 
