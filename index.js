const fs = require("fs");
const { isPathAbsolute } = require("./data");

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(path)) {
      if (!isPathAbsolute(path)){
        resolve (!isPathAbsolute)
      }
    } else {
      // si no existe la ruta, rechaza la promesa
      reject("La ruta no existe");
    }
  });
};

module.exports = mdLinks;
// *************¿la ruta es relativa o absoluta?*************
// siempre verificar que las rutas guardadas sean absolutas
