import path from 'path'
// aqui se escribe la funcion mdlinks para exportar
//module.exports = () => {
  // ...
//};
// import { mdLinks } from "./mdlinks";

// se importan estas funciones desde index.js
import { mdExists, mdValid, mdRead } from './index.js'

const ruta = "README.md";  // existe
//const ruta = "REDME.md";  // NO existe
//const ruta = "test";  // archivo
// se esta comprobando que mdExist devuelva true, si devuelve true: se ejecuta el primer if.
// Sino, ejecuta else
if(mdExists(ruta) == true){
    //path.resolve convierte la ruta relativa en absoluta
  const rutaAbsoluta = path.resolve(ruta) // ruta resuelta
  mdValid(rutaAbsoluta)
  //console.log('Ok', mdValid(rutaAbsoluta));
  //convertir a sincrona par asi dejar menos then
  mdValid(rutaAbsoluta)
  //si la promeda se resuelve se ejecuta then
  //aqui debo ingresar mi mdread
  .then((response)=>{
    console.log(response);
  })
  .catch((err)=>{
    console.log(err);
  })
}else{
    //si el archivo no existe, se imprime fail en la consola
  console.log('falladisimo');
}
// importar fn mdread
// en la linea 19 llmar a la fn mdRead y enviar rutaAbsoluta
// ir a index