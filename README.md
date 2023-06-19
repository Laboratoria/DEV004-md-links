# Markdown Links

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Consideraciones técnicas](#5-consideraciones-técnicas)
* [6. Hitos](#6-hitos)
* [7. Hacker edition](#7-hacker-edition)
* [8.Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Para pedir project feedback](#9-para-pedir-project-feedback)

***

## 1. Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre desarrolladores. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, etc.) y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una
herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos
en formato `Markdown`, para verificar los links que contengan y reportar
algunas estadísticas.

![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## 2. Resumen del proyecto

En este proyecto crearás una biblioteca de código que servirá como herramienta para analizar enlaces dentro de archivos Markdown. Esta biblioteca será accesible desde la línea de comandos (CLI) que permitirá al usuario ejecutar la biblioteca directamente desde el terminal. Esta librería, escrita en Node.js, se encargará de analizar los archivos en formato Markdown. La biblioteca será accesible al importarla desde el módulo publicado.

En esta oportunidad nos alejamos un poco del navegador para construir un
script que se ejecute usando Node.js. Aprenderemos sobre procesos
(`process.env`, `process.argv`, ...), cómo interactuar con el sistema archivos,
cómo hacer consultas de red, etc.

[Node.js](https://nodejs.org/es/) es un entorno de ejecución para JavaScript
construido con el [motor de JavaScript V8 de Chrome](https://developers.google.com/v8/).
Esto nos va a permitir ejecutar JavaScript en el entorno del sistema operativo,
ya sea tu máquina o un servidor, lo cual nos abre las puertas para poder
interactuar con el sistema en sí, archivos, redes, etc.

Diseñar tu propia librería es una experiencia fundamental para cualquier
desarrolladora porque que te obliga a pensar en la interfaz (API) de tus
_módulos_ y cómo será usado por otras developers. Debes tener especial
consideración en peculiaridades del lenguaje, convenciones y buenas prácticas.

## 3. Objetivos de aprendizaje

> ℹ️ Esta sección será auomáticamente generada en el idioma pertinente, a partir
> de los objetivos de aprendizaje declarados en [`project.yml`](./project.yml),
> al crear el repo del proyecto para un cohort en particular usando
> [`./scripts/create-cohort-project.js`](../../scripts#create-cohort-project-coaches).
>
> Acá puedes ver una [lista de todos los objetivos de aprendizaje](../../learning-objectives/data.yml)
> que contempla nuestra currícula.

## 4. Consideraciones generales

* Este proyecto se debe "resolver" de manera individual.

* El rango de tiempo estimado para completar el proyecto es de 3 a 5 sprints.

* Consideramos los hitos 1 y 2 como los criterios de aceptación mínimos del proyecto.

* Enfócate en aprender y no solamente en "completar" todos los hitos del proyecto.

* Te sugerimos que no intentes saber todo de Node.js antes de empezar a codear. No es necesario tomar un curso de Node.js completo. Aprenderás a medida que avances en el proceso.

## 5. Consideraciones técnicas

Para comenzar este proyecto tendrás que hacer un fork y clonar este repositorio.

* En este proyecto hay que adoptar las convenciones que los proyectos open source de software usan para hacer seguimiento. Vas a usar Github projects con Issues y milestones para priorizar y organizar el trabajo y hacer seguimiento de tu proceso. Dentro de cada milestone se crearán y asignarán los issues que cada quien considere necesarios.

* La **librería** y el **script ejecutable** (herramienta de línea de comando -
  CLI) deben estar implementados en JavaScript para ser ejecutados con
  Node.js. **Está permitido usar librerías externas**.

* Tu módulo **debe ser instalable** via `npm install <github-user>/md-links`. Este
  módulo debe incluir tanto un _ejecutable_ que podamos invocar en la línea de
  comando como una interfaz que podamos importar con `require` para usarlo
  programáticamente.

* Los **tests unitarios** deben cubrir un mínimo del 70% de _statements_,
  _functions_, _lines_ y _branches_. Te recomendamos explorar [Jest](https://jestjs.io/) para tus pruebas unitarias.

* Para este proyecto **no está permitido** utilizar `async/await`.

* Para este proyecto, te recomendamos utilizar los módulos CommonJS con `require`,  que es el formato de módulos original de Node.js. Si prefieres utilizar ES Modules
`(import/export)`, puedes hacerlo, pero ten en cuenta que deberás configurar adecuadamente tu proyecto para que Node.js pueda utilizar este formato. Puedes encontrar más información al respecto [aquí](https://nodejs.org/api/esm.html#enabling)

* Para este proyecto, te recomendamos evitar el uso de la función síncrona
  `readFileSync` para leer archivos. En su lugar, te sugerimos abordar este desafío de manera asíncrona utilizando `readFile`. Además, si utilizas el módulo [require("fs/promises")](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html), podrás aprovechar las promesas con `readFile`.

* Para disminuir la complejidad de tu algoritmo recursivo, te recomendamos
  utilizar la versión síncrona de la función para leer directorios, `readdirSync`.

### Descripción de los archivos del proyecto

* `README.md` con descripción del módulo, instrucciones de instalación/uso,
  documentación del API y ejemplos. Todo lo relevante para que cualquier
  developer que quiera usar tu librería pueda hacerlo sin inconvenientes.
* `index.js`: Desde este archivo debes exportar **una** función (`mdLinks`).
* `package.json` con nombre, versión, descripción, autores, licencia,
  dependencias, scripts (pretest, test, ...), main, bin
* `.editorconfig` con configuración para editores de texto. Este archivo no se
  debe cambiar.
* `.eslintrc` con configuración para linter. Este archivo contiene una
  configuración básica para ESLint, si deseas agregar reglas adicionales
  como Airbnb deberás modificar este archivo.
* `.gitignore` para ignorar `node_modules` u otras carpetas que no deban
  incluirse en control de versiones (`git`).
* `test/md-links.spec.js` debe contener los tests unitarios para la función
  `mdLinks()`. Tu implementación debe pasar estos tests.

Este proyecto lo puedes ir construyendo por hitos. A continuación te sugerimos algunos:

## 6. Hitos

### **HITO 1:** Javascript API

Comienza haciendo la versión más sencilla de mdlinks. Crea una función que devuelva una promesa con los links encontrados dentro de un archivo markdown específico.

Esta función debe ser un módulo que puede **importarse** en otros scripts de Node.js y debe ofrecer la siguiente interfaz:

`mdLinks(path)`

Argumento:

* `path`: Ruta **absoluta** o **relativa** al **archivo** o **directorio**.
Si la ruta pasada es relativa, debe resolverse como relativa al directorio desde donde se invoca node (transformar a absoluta).

Valor de retorno:

La función `mdLinks(path)` debe **retornar una promesa** que **resuelva a un arreglo** de objetos, donde cada objeto representa un link y contiene las siguientes propiedades:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link.
* `file`: Ruta del archivo donde se encontró el link.

#### Ejemplo (resultados como comentarios)

```js
const mdLinks = require("md-links");

mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);
```

Test unitarios:

Los tests unitarios son una excelente forma de verificar si tus funciones están funcionando correctamente mientras escribes el código. En este proyecto, recuerda que no hay una interfaz gráfica de navegador, por lo tanto para poderlo probar es necesario recurrir a los test unitarios.

Por ejemplo, es recomendable escribir tests que invoquen la función `mdLinks` y comprueben que esta función resuelva con un arreglo con la información esperada. También es importante probar las otras funciones que hayas escrito en tu código.

#### Ejemplo

```js
describe('mdLinks', () => {
  it('debería retornar un arreglo con 3 links para un archivo .md con 3 links', ()=>{
    return mdLinks('miArchivo.md').then((result) => {
      expect...
    });
  });
});

```

⚠️ Antes de pasar al siguiente hito, asegúrate de escribir los tests correspondientes al código del hito actual.

## Tareas de este hito

### ✅ Crea una promesa

El valor de retorno de nuestra librería es una Promesa, no un array (la promesa resuelve un array). Prueba leyendo sobre las promesas y creando una por tu cuenta utilizando new Promise()

Es importante que sepas qué es un callback pues las promesas los utilizarán.

### ✅ Lee un archivo

Empieza leyendo un solo archivo con una ruta fija y retorna su contenido. Para ver este contenido puedes utilizar un console.log al momento de ejecutar la función.

El módulo fs (FileSystem) te será de utilidad. Como mencionamos en las consideraciones técnicas, preferimos que uses readFile (en vez de readFileSync) Y recomendamos el módulo fs/promises para utilizar estas funciones con promesas.

### ✅ Asegúrate que el archivo es markdown

Ya sabiendo leer un archivo, aventúrate a conocer cuál es su extensión.

Recuerda, las extensiones son esas letras al final del nombre de un archivo, por ejemplo: .js, .txt, .doc, etc

Aquí podrá ser útil el módulo `path`.

En caso de que la extensión del archivo no sea md, la promesa de la función mdLinks debería rechazarse con un error.

### **HITO 2:** Javascript API con segundo parámetro opcional "validate"

Agrega un argumento más a la función `mdLinks`. El segundo parámetro recibirá un booleano **validate**. Este segundo parámetro será opcional.

Ahora la función deberá ofrecer la siguiente interfaz:

`mdLinks(path, validate)`
  
Argumentos:

* path: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es relativa, debe resolverse como relativa al directorio desde donde se invoca node (transformar a absoluta).

* validate: Booleano que determina si se desea validar los links encontrados.

**Valor que resuelve la promesa con validate = false ó undefined:**
Un arreglo con objetos que representan links. Cada objeto tiene las propiedades:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link (`<a>`).
* `file`: Ruta del archivo donde se encontró el link.

_(OJO: el valor anterior es el mismo que el del hito 1)_

**Valor que resuelve la promesa con validate = true:**
Un arreglo con objetos que representan links. Cada objeto tiene las propiedades:

* `href`: URL encontrada.
* `text`: Texto que aparecía dentro del link.
* `file`: Ruta del archivo donde se encontró el link.
* `status`: Código de respuesta HTTP.
* `ok`: Mensaje `fail` en caso de fallo u `ok` en caso de éxito.

#### Ejemplo (resultados como comentarios)

```js
const mdLinks = require("md-links");


mdLinks("./some/example.md")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);


mdLinks("./some/example.md", true )
  .then(links => {
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error);


mdLinks("./some/example.md", false)
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

```

⚠️ **Test unitarios.** Antes de pasar al siguiente hito, asegúrate de hacer los tests del hito actual. Los tests aquí van a mockear http, fecth o axios.

### **HITO 3:** Buscando dentro de una carpeta

Para este hito vas a trabajar con la misma función `mdLinks` pero esta vez la usuaria será capaz de pasar una carpeta como ruta.

El La función `mdLinks(path, validate)`  debe recorrer todos los archivos existentes en la carpeta y por cada archivo .md que encuentre deberá extraer los links para mostrarlos en pantalla.

Debes tener en cuenta que la carpeta puede contener archivos con extensiones que no sean md. En este caso debes la función debe ignorarlos. (Crea una carpeta con archivos de diferentes extensiones para probar tu función)

#### Ejemplo (resultados como comentarios)

```js
const mdLinks = require("md-links");


mdLinks("./some/dir")
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);


mdLinks("./some/dir", true )
  .then(links => {
    // => [{ href, text, file, status, ok }, ...]
  })
  .catch(console.error);


mdLinks("./some/dir", false)
  .then(links => {
    // => [{ href, text, file }, ...]
  })
  .catch(console.error);

```

⚠️ **Test unitarios.** Te recomendamos antes de pasar al siguiente hito hacer los tests del hito actual

## Tareas de este hito

### ✅ Obtén el contenido de un directorio

Este hito consiste en buscar archivos en un directorio (o carpeta). Para eso, hay que leer el directorio, osea ver que está dentro.

El módulo de `fs` también te será útil aquí. Recomendamos `readdirSync`.

Intenta imprimir en consola la lista de archivos en una carpeta para probar como funciona.

### ✅ Une dos rutas

Para poder acceder a carpetas y archivos será necesario que indiques en qué lugar de tu computadora se encuentran, a esto le llamamos rutas.

Usa el módulo path para unir dos segmentos de ruta a una ruta completa, por ejemplo, si queremos unir:

/home/Laboratoria/

./test

El resultado sería: /home/Laboratoria/test

### **HITO 4:** - Interfaz de Línea de comando

En este hito, crearás un paquete ejecutable de tu código, el mismo que internamente ejecutará la función mdLinks que acabas de crear.

Tu módulo debe ser instalable via npm install `<github-user>/md-links`.

Este módulo debe incluir tanto un ejecutable que podamos invocar en la línea de comando como una interfaz que podamos importar con require para usarlo programáticamente.

Este paquete deberá estar documentado y alojado en npm para poderlo descargar.

El ejecutable de tu aplicación debe poder correr de la siguiente manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

![mdlinks-example](https://github.com/Laboratoria/bootcamp/assets/123121338/7dcc83c4-873e-4ef8-b7d0-a15adb102680)

El comportamiento por defecto no debe validar si las URLs responden ok o no, solo debe identificar el archivo markdown (a partir de la ruta que recibe como argumento), analizar el archivo Markdown e imprimir los links que vaya
encontrando, junto con la ruta del archivo donde aparece y el texto que hay dentro del link (truncado a 50 caracteres).

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

![mdlinks-example-validate](https://github.com/Laboratoria/bootcamp/assets/123121338/502cbafc-b4ac-4734-85b3-1734f67af1d3)

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

![mdlinks-example-stats](https://github.com/Laboratoria/bootcamp/assets/123121338/910720c6-aa3f-4d08-b076-c1add13c95f1)

También podemos combinar `--validate` y `--stats` para obtener estadísticas que
necesiten de los resultados de la validación.

![mdlinks-example-stats-validate](https://github.com/Laboratoria/bootcamp/assets/123121338/9d9971a0-866a-4c64-a890-4c62c3df3700)

Para ejecutar tu script utilizando el comando `mdlinks`, debes vincular este comando al sistema. Sin embargo, antes de vincular el comando, puedes desarrollar tu interfaz de línea de comandos (CLI) invocándola con node. Por ejemplo, puedes usar el siguiente comando:

`node <RUTA_DE_TU_CLI.js> ruta options`

### **HITO 5:** - Buscando dentro de subcarpetas

Misma funcionalidad que el HITO 3 pero ahora la usuaria será capaz de pasar una carpeta como ruta con más carpetas dentro además de posibles archivos.

La función `mdLinks(path, validate)` tendrá que recorrer todas las carpetas existentes en la ruta y buscar los links en todos los archivos md que encuentre.

Para resolver este hito te recomendacón leer acerca del concepto de recursividad y ver algunos ejemplos (ojo con concepto de casos base)

¿Por qué utilizaremos la recursividad aquí?

La recursividad se utiliza en este caso porque no conocemos de antemano la cantidad de carpetas y archivos que tendremos que recorrer antes de finalizar. Cuando recibimos una ruta de carpeta, no sabemos si dentro de ella hay más carpetas que también debemos abrir y leer, y estas a su vez pueden contener más carpetas. Este tipo de problema se resuelve de manera eficiente utilizando un proceso recursivo.

Entre los recursos de este proyecto hay un video que te ayudará.

⚠️ **Test unitarios.** Te recomendamos antes de pasar al siguiente hito hacer los tests del hito actual

## 7. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Puedes agregar la propiedad `line` a cada objeto `link` indicando en qué línea
  del archivo se encontró el link.
* Puedes agregar más estadísticas.
* Integración continua con Travis o Circle CI.

***

## 8. Pistas, tips y lecturas complementarias

### **Inicia con un diagrama de flujo y/o pseudocódigo**

Este proyecto difiere de los anteriores en los que has trabajado, ya que no implica una interfaz web. Todo el desarrollo se llevará a cabo en tu editor y en la consola/terminal.

El proyecto se basa en un proceso lógico compuesto por diferentes pasos. Para comprender mejor lo que debes hacer y planificar tus tareas y objetivos, se recomienda desglosar el proceso en pasos y visualizarlo mediante un diagrama de flujo o escribiendo frases de pseudocódigo

### **Sugerencias de implementación**

La implementación de este proyecto tiene varias partes: leer del sistema de archivos, recibir argumentos a través de la línea de comando, analizar texto, hacer consultas HTTP, ... y todas estas cosas pueden enfocarse de muchas formas, tanto usando librerías como implementando en VanillaJS.

Por poner un ejemplo, el parseado (análisis) del markdown para extraer los links podría plantearse de las siguientes maneras (todas válidas):

* Usando un módulo como markdown-it, que nos devuelve un arreglo de tokens que podemos recorrer para identificar los links.

* También podríamos usar una combinación de varios módulos (podría ser válido transformar el markdown a HTML usando algo como marked y de ahí extraer los link con una librería de DOM como JSDOM o Cheerio entre otras).

* Usando un custom renderer de la librería marked (new marked.Renderer()).

* Siguiendo otro camino completamente diferente, podríamos usar expresiones regulares (RegExp).

No dudes en consultar a tus compañeras, coaches y/o el foro de la comunidad si tienes dudas existenciales con respecto a estas decisiones. No existe una "única" manera correcta 😉 Lo importante es que entiendas el código que escribes para lograr la tarea.

### **¿CommonJS Modules o ES Modules, cual debería usar?**

Deberás decidir desde el principio si utilizarás ES Modules, es decir, import/export, o CommonJS Modules, es decir, require/module.exports.
Ambos cumplen el mismo objetivo de modularizar y compartir código. Node.js ha utilizado históricamente los CommonJS Modules (require) y funciona así sin necesidad de configuraciones adicionales. Sin embargo, en las nuevas versiones de Node.js, puedes utilizar ES Modules, pero requiere algunos pasos de configuración. Si decides utilizar ES Modules, asegúrate de revisar cómo configurar tu proyecto con la versión de Node que estás utilizando.
Asegúrate de tener en cuenta esta decisión desde el inicio del proyecto, ya que afectará la forma de importar y exportar módulos en tu código.

### **¿Cuáles son partes de node son relevantes para este proyecto?**

Node ofrece una amplia gama de módulos y funciones, pero no es necesario conocerlos todos antes de comenzar a programar. Los hitos se refieren a partes específicas de Node que puedes explorar, como los módulos fs (readFile, readdirSync) y path.
Estos módulos son útiles para realizar operaciones de lectura y escritura de archivos, así como para manipular y trabajar con rutas de archivos en tu código. A medida que avanzas en tu proyecto, puedes investigar más sobre estos módulos y cómo utilizar sus funciones para lograr tareas específicas. ¡No dudes en sumergirte en la programación y explorar los partes relevantes de Node mientras avanzas en tu proyecto!

### **¿Cómo hago para que mi módulo sea instalable con npm?**

Para que el módulo sea instalable desde GitHub solo tiene que:

* Estar en un repo público de GitHub
* Contener un `package.json` válido

Con el comando `npm install githubname/reponame` podemos instalar directamente
desde GitHub. Ver [docs oficiales de `npm install` acá](https://docs.npmjs.com/cli/install).

Por ejemplo, el [`course-parser`](https://github.com/Laboratoria/course-parser)
que usamos para la currícula no está publicado en el registro público de NPM,
así que lo instalamos directamente desde GitHub con el comando `npm install
Laboratoria/course-parser`.

### Tutoriales

* [learnyounode](https://github.com/workshopper/learnyounode)
* [how-to-npm](https://github.com/workshopper/how-to-npm)
* [promise-it-wont-hurt](https://github.com/stevekane/promise-it-wont-hurt)

### Otros recursos

* [Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)
* [Node.js file system - Documentación oficial](https://nodejs.org/api/fs.html)
* [Node.js path - Documentación oficial](https://nodejs.org/api/path.html)
* [Node.js http.get - Documentación oficial](https://nodejs.org/api/http.html#http_http_get_options_callback)
* [What exactly is Node.js? - freeCodeCamp](https://medium.freecodecamp.org/what-exactly-is-node-js-ae36e97449f5)
* [¿Qué es Node.js y para qué sirve? - drauta.com](https://www.drauta.com/que-es-nodejs-y-para-que-sirve)
* [¿Qué es Nodejs? Javascript en el Servidor - Fazt en YouTube](https://www.youtube.com/watch?v=WgSc1nv_4Gw)
* [Asíncronía en js](https://carlosazaustre.es/manejando-la-asincronia-en-javascript)
* [NPM](https://docs.npmjs.com/getting-started/what-is-npm)
* [Publicar packpage](https://docs.npmjs.com/getting-started/publishing-npm-packages)
* [Una guía para crear un paquete de línea de comandos NodeJS](https://medium.com/netscape/a-guide-to-create-a-nodejs-command-line-package-c2166ad0452e)
* [Tú, yo y package.json](https://medium.com/noders/t%C3%BA-yo-y-package-json-9553929fb2e3)

## 9. Para pedir project feedback

* [ ] Un board en github projects con el backlog para la implementación de la librería.

* [ ] un `README.md` con documentación técnica de la librería y una guía de uso e instalación de la librería.

* [ ] un API `mdLinks(path, validate)` con los siguientes requisitos mínimos:

  * El módulo debe exportar una función que cumpla con la interfaz (API) requerida.
  * Deberá implementar el soporte para archivos individuales.
  * Deberá implementar la funcionalidad de validación.
  * Deberá ofrecer soporte para directorios.
  * Deberá ofrecer soporte para directorios que pueden contener otros directorios.

* [ ] un CLI que se ejecuta sin errores y tiene el output esperado. Que se  Implementa --validate Implementa --stats. Expone ejecutable md-links en el path (configurado en package.json)
* [ ] Pasa tests y linters (`npm test`).
