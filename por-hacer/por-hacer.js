const fs = require('fs');
let listadoPorHacer = [];

const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
};

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile(`db/data.json`, data, (err) => {
        if(err) throw new Error ('No se pudo grabar');
        console.log('Tarea almacenada');
    });
}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
};

const getListado = (estado) => {
    cargarDB();
    let listadoPorEstado = listadoPorHacer.filter(tarea => tarea.completado === estado);
    return listadoPorEstado;
};

const actualizar = (descripcion, completado) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
};

const borrarTarea = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if(nuevoListado.length < listadoPorHacer.length) {
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;
    }else{
        return false;
    }
};


module.exports = {
    crear,
    getListado,
    actualizar,
    borrarTarea,
}
