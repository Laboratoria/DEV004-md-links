import path from 'path'
// aqui se escribe la funcion mdlinks para exportar
//module.exports = () => {
  // ...
//};
// import { mdLinks } from "./mdlinks";
// mdLinks();
import { mdExists, mdValid } from './index.js'
const ruta = "README.md";  // existe
//const ruta = "REDME.md";  // NO existe
//const ruta = "test";  // archivo

if(mdExists(ruta) == true){
  const rutaAbsoluta = path.resolve(ruta) // ruta resuelta
  mdValid(rutaAbsoluta)
  //console.log('Ok', mdValid(rutaAbsoluta));
  mdValid(rutaAbsoluta)
  .then((response)=>{
    console.log(response);
  })
  .catch((err)=>{
    console.log(err);
  })
}else{
  console.log('Fail');
}
// importar fn mdread
// en la linea 19 llmar a la fn mdRead y enviar rutaAbsoluta
// ir a index