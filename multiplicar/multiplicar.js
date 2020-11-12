// Requireds
// Existen tres tipos de Required:
const fs = require('fs'); // Required Propio de Node
//const fs = require('express'); // Paquetes no Nativos de Node
//const fs = require('./fs'); // Archivos creados por nosotros
const colors = require('colors');

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un Número`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor introducido ${ limite } no es un Número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i }\n`;
        }

        // File System Write File
        // const data = new Uint8Array(Buffer.from('Hola DanKenSoft'));
        fs.writeFile(`archivos/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${ base }-al-${ limite }.txt`.green);
        });
    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un Número`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor introducido ${ limite } no es un Número`);
            return;
        }

        console.log('===================='.green);
        console.log(`Tabla de ${ base }`.green);
        console.log('===================='.green);

        for (let i = 1; i <= limite; i++) {
            console.log(`${ base } * ${ i } = ${ base * i }`);
        }
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}