const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
//console.log(argv);

let comando = argv._[0];

switch ( comando ){

    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
        let listado = porHacer.getListado(argv.completado);
        for (let tarea of listado){
        console.log('========= Por Hacer =========='.green);
        console.log('Tarea: '.yellow, tarea.descripcion);
        console.log('Completada: '.yellow,tarea.completado);
        console.log('=============================='.green);
        };
    break;

    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        if (actualizado) {
            console.log(`Tarea ${argv.descripcion} actualizada`);
        }else{
            console.log(`La tarea ingresada no existe`);
        }
    break;

    case 'borrar' :
        let borrado = porHacer.borrarTarea(argv.descripcion);
        if(borrado){
            console.log(`La tarea ${argv.descripcion} ha sido borrada`);
        }else{
            console.log(`La tarea ${argv.descripcion} no existe`);
        }
    break;

    default :
        console.log('Comando no reconocido');
    break;
}