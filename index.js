
// Aqui se importan fs, path, etc ---funcion
// export const mdLinks = (path, options) => {
// const fs = require('fs'); --no vamos a usar el require.
import fs from 'fs'
import path from 'path';
// funcion que dice si la ruta existe o no
export const mdExists = (ruta) => {
    if (fs.existsSync(ruta)){
        return true
        }else{
        return false
        }
/*const ruta = fs.stat(path, (err, stats) => {
    if (err) {
        if (err.code === 'ENOENT') {
            console.error('Path does not exist');
        } else {
            console.error('An error occurred while checking the path:', err);
        }
    } else {
        console.log('Path exists');
    }
});*/
};

// esta funcion verifica si el archivo en la ruta dada es valido
// y devuelve una promesa
export const mdValid = (ruta) =>{
  //se crea una promesa con los parametros de callback resolve y reject
  return new Promise((resolve, reject)=>{
//la funcion asincronica fs.stat toma la ruta del archivo y una funcion callback
    fs.stat(ruta, (err, stats) => {
      //throw error dentiene la ejecucion y se podria manejar en otro lugar de mi codigo
      if (err) throw err;
      // console.log(stats.isFile());
      // stats.isFile verifica si el archivo es un archivo valido, si da true: continua con la verificacion
      if (stats.isFile()== true) {
        //con path.extname se obtiene la extencion del archivo, si es md, se resuelve true, sino reject
          if(path.extname(ruta) == '.md'){
              resolve(true)
          }else{
            reject(false)
          }

      }else{
          console.log('No soportamos');
      }
  });
  })
    
      
}

// revisar promesa y callback

//recibir ruta como parametro
// googlear 'leer el contenido d eun archivo node js
// intentar implementar dentro de mdRead

export const mdRead = ()=>{

}