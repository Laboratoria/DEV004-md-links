const fs = require('fs');

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) =>{ //creamos una nueva promesa
//verificamos si la ruta existe
if (fs.existsSync(path)) {

}else {
//si no existe la ruta, se rechaza la promesa
reject('La ruta no existe');
}

});
};

module.exports = {
  mdLinks
};
