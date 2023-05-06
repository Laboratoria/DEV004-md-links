const fs = require("fs");
const { isPathAbsolute } = require("./data");
const {pathAbs} = require("./data");
const {pathExist} = require ("./data");

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    if (!pathExist(path)) {
      throw ('la ruta no existe')
    }else{
      if (!isPathAbsolute(path)){
       let routeAbs = pathAbs(path) 
       resolve(routeAbs);
      }else{
          let routeAbs = path
         resolve(routeAbs);
         }
      }
      });
    };
    
  



module.exports = mdLinks;
// *************¿la ruta es relativa o absoluta?*************
// siempre verificar que las rutas guardadas sean absolutas
