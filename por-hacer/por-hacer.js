const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {

	try {
		listadoPorHacer = require('../db/data.json');
	} catch(e) {

		listadoPorHacer = [];
	}

}

const guardarDB = () => {
	const data = JSON.stringify(listadoPorHacer);
	fs.writeFile('db/data.json', data, (err) => {
		if (err)
			throw new Error('No se pudo grabar',err);
	});
}

const crear = (descripcion) => {

	cargarDB();

	let porHacer = {
		descripcion,
		completado: false
	}

	listadoPorHacer.push(porHacer);
	guardarDB();
	return porHacer;
}

const getListado = () => {
	cargarDB();
	return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {

	cargarDB();

	let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === descripcion);

	if (index != -1) {
		listadoPorHacer[index].completado = completado;
		guardarDB();
		return true;
	} else {
		return false;
	}
	
}

const borrar = (descripcion) => {

	cargarDB();

	nuevoListado = listadoPorHacer.filter( tarea => tarea.descripcion != descripcion);

	if (nuevoListado.length != listadoPorHacer.length ) {
		listadoPorHacer = nuevoListado;
		guardarDB();
		return true ;
	} else {
		return false;
	}
}

module.exports = {
	crear,
	getListado,
	actualizar,
	borrar
}