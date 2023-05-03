const {mdLinks} = require ('./index.js');
mdLinks('holi.md').then(() => {console.log('sí existe');})
.catch((error)=>{console.log(error)}); 
