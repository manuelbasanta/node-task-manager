const descripcion =  {
			alias: 'd',
			demand: true,
			desc: 'Descripcion de la tarea por hacer'
		};
const completado = {
			default: true,
			alias: 'c',
			dexc: 'Marca como completado o pendiente la tarea'
		}


const argv = require('yargs')
	.command('crear', 'Crear una nueva tarea', {
		descripcion
	})
	.command('actualizar', 'Actualizar una tarea', {
		descripcion,
		completado
	})
	.command('borrar', 'Borrar una tarea', {
		descripcion
	})
	.help()
	.argv;

module.exports = {
	argv
}