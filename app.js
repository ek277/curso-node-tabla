// Aquí se va a pedir un paquete de Node para que solo se cargue lo que vamos a ocupar
// const fs = require("fs"); // fs es de FileSystem, pero pudo haber sido otro nombre
const { options } = require("yargs");
const { crearArchivo } = require("./helpers/multiplicar"); //Desestructuramos para obtener el objeto el cual es crearArchivo
require("colors");
const argv = require("./config/yargs");

console.clear();

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// console.log(process.argv); // con esto vemos el extra que le estamos mandando a la consola

// vamos a extraer ese extra que le estamos mandando a la consola:

// const [, , arg3 = "base=5"] = process.argv; // desestructuración de arreglos. Nos interesa el 3er argumento, ya que ahí viene el extra que añadimos en la consola
// const [, base = 5] = arg3.split("=");

// console.log(base);

// const base = 5;

crearArchivo(argv.b, argv.l, argv.h)
  .then((nombreArchivo) => console.log(nombreArchivo.rainbow, "creado"))
  .catch((err) => console.log(err));

// Comenzando con la implementación y acciones de yarg

// console.log(process.argv);
// console.log(argv);
console.log("base: yargs", argv.b);
