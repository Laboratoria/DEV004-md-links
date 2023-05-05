// funciones pequeñas 
const path = require('path');
const fs = require('fs');

// la ruta es absoluta?
const isPathAbsolute = (route) => path.isAbsolute(route) 
// si no es absoluta, conviertela a absoluta:
const pathAbs = (route) => {
    if(path.isAbsolute(route)){
        return route
    }else{
        return path.resolve(route)
    }
}
// *************¿la ruta, es un archivo o un directorio?*************
// refactorizar, solo devuelve un booleano, no hay errores. no es necesario darle tantas vueltas. 
// cuando algo devuelva una promesa, entonces si hay que usar then y catch 
const isFileOrDir = (route) => {
    fs.stat(route, (error, stats) => {
        if (error) {
            console.log(error);
        }
        else {
            const routeIsFile = ("Path is file:", stats.isFile());
            if (routeIsFile === true) {
                console.log('la ruta es un archivo')
            }
            else {
                const routeIsDoc = ("Path is directory:", stats.isDirectory());
                if (routeIsDoc === true) {
                    console.log('la ruta es un directorio')
                }
            }
            }
        });
}
// ************* si es un archivo: lee el archivo *************
const readFile = (path = './notebook.md') => {
return new Promise((resolve, reject) => {
    fs.readFile(path,'utf-8', (err,data)=> {
        if (err){
            reject(err)
        } else{
            resolve(data)
            console.log(data)
        }
    });
});
}
// ************* si es un directorio: ¿tiene archivos? *************
const dirFiles = (route) => {
    return new Promise ((resolve, reject) => {
        let filenames = fs.readdirSync(route, { withFileTypes: true })
        // con { withFileTypes: true } es obj y no solo string. 
         console.log("\nCurrent directory filenames:");
         filenames.forEach(file => {
         console.log(file);
         console.log(typeof(file.name));
         });
    }
    )
}
// ************* abrir directorio y leer los archivos *************
// creo que se puede reutilizar la funcion de leer archivos. 
// no creo que sea necesario hgacer una nueva. 

// ************* ¿existen links? *************
const findUrls = (text) => {
    // método match js. argumneto (regex, expresion regular)
   
    const result = text.match(/^\[([\w\s\d]+)\]\((https?:\/\/[\w\d./?=#]+)\)$/)
    return result; 
    }


// false: error

// true:

//************* ¿existen rutas .md? *************

const mdExt = (route) => {
    return new Promise((resolve,reject) => {
    const pathNameDef = path.extname(route);
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

// if then respuesta valida retornar {href, text, file, status} y mensaje todo ok

// if catch respuesta invalida retornar alerta: algo fue mal.

module.exports = {
mdExt,
isPathAbsolute,
isFileOrDir,
readFile,
dirFiles,
findUrls,
};
