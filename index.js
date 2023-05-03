
const fs = require('fs');
const mdLinks = (path, options) => {
return new Promise((resolve,reject) => {
// *************identifica si la ruta existe*************
if (fs.existsSync(path)) {
console.log('si existe');
}
else {
// si no existe la ruta, rechaza la promesa
reject('La ruta no existe');
} 
});
}
// *************¿la ruta es relativa o absoluta?*************
const path = require('path');
const absPath = (pathname, options) => {
    return new Promise((resolve,reject) => {
    if (pathname) {
    console.log(path.dirname(__dirname))
    }
    else {
    // si no existe la ruta, rechaza la promesa
    reject('La ruta no existe');
    } 
    });
    }


// Si la ruta es relativa, convertirla a absoluta

// ¿la ruta, es un archivo o un directorio?

// si es un directorio: ¿tiene archivos?

// ************* abrirlo y leer los archivos *************
const dirList = (pathname, options) => {
    const filenames = fs.readdirSync(__dirname);
    console.log("\nCurrent directory filenames:");
    filenames.forEach(pathname => {
    console.log(pathname);
    });
    const fileObjs = fs.readdirSync(__dirname, { withFileTypes: true });
    console.log("\nCurrent directory files:");
    fileObjs.forEach(pathname => {
    console.log('soy file',pathname);
    });
    };

// ¿existen links?

// false: error

// true:

//************* ¿existen rutas .md? *************

const mdExt = (pathname, options) => {
    return new Promise((resolve,reject) => {
    const pathNameDef = path.extname(pathname);
        if (pathNameDef == path.extname('hello.md')) {
    console.log('es archivo md');
        }
        else{
            reject('no existe archivo md');
    } 
    });
    }


// ejecutar validate

// if validate false retornar {href,text,file}

// if validate true hacer petición http a cada href. (usar axios o fetch)

// if respuesta valida retornar {href, text, file, status} y mensaje todo ok

// if respuesta invalida retornar alerta: algo fue mal.

module.exports = {
mdLinks,
mdExt,
dirList,
absPath,
};
