const descripcion = {
        demand:true,
        alias: 'd'
};

const completado = {
        default:true,
        alias: 'c'  
};


const argv = require('yargs')
                .command('crear','Crea una tarea por hacer',{descripcion})
                .command('actualizar','Actualiza el estado completado de una tarea', {descripcion, completado})
                .command('borrar', 'Borra una tarea ', {descripcion})
                .command('listar', 'Lista las tareas por hacer', {completado})
                .help()
                .argv;

module.exports = {
    argv
}
  