
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

export const mdValid = (ruta) =>{
  return new Promise((resolve, reject)=>{
    fs.stat(ruta, (err, stats) => {
      if (err) throw err;
      // console.log(stats.isFile());
      if (stats.isFile()== true) {
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