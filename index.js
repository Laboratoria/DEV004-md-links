
const fs = require('fs');
const mdLinks = (path, options) => {
return new Promise((resolve,reject) => {
// identifica si la ruta existe
if (fs.existsSync(path)) {
console.log('si existe');
}
else {
// si no existe la ruta, rechaza la promesa
reject('La ruta no existe');
} 
// ¿la ruta es relativa o absoluta?

// Si la ruta es relativa, convertirla a absoluta

// ¿la ruta, es un archivo o un directorio?

// si es un directorio: ¿tiene archivos?

// abrirlo y leer los archivos 

// ¿existen links?

// false: error

// true:

// ¿existen rutas .md?

// ejecutar validate

// if validate false retornar {href,text,file}

// if validate true hacer petición http a cada href. (usar axios o fetch)

// if respuesta valida retornar {href, text, file, status} y mensaje todo ok

// if respuesta invalida retornar alerta: algo fue mal.
});
}
module.exports = {
mdLinks
};
 