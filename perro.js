class Perro {
	constructor(nombre,edad){
		this._nombre = nombre;
		this._edad = edad;
	}
	get nombre() {
		return this._nombre;
	}
	get edad() {
		return this._edad;
	}
	set nombre(nombre) {
		this._nombre = nombre;
	}
	set edad(edad) {
		this._edad = edad;
	}
	ladra() {
		console.log('Guau! Guau!');
	}
}

const snoopy = new Perro('snoopy', 5);
console.log(`Mi nombre ${snoopy.nombre} tenia ${snoopy.edad} anos`);
snoopy.edad = snoopy.edad+11;
console.log(`pero cumplio un ano mas, asi que ahora tiene ${snoopy.edad} anos`);
