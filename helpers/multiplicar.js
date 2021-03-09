const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (base = 5, l, h = 10) => {
  try {
    let salida = "";
    let consola = "";
    for (let i = 1; i <= h; i++) {
      const element = base * i;
      salida += `${base} x ${i} = ${element}\n`;
      consola += `${base} ${"x".green} ${i} ${"=".green} ${element}\n`;
    }

    if (l) {
      console.log(`----- Tabla del ${colors.blue(base)} -----`.green);
      console.log(consola);
    } else {
      console.log("Hola, no se pudo imprimir tabla");
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  crearArchivo,
};
