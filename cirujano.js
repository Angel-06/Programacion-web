class Cirujano {
	constructor(nombre,departamento){
		this._nombre = nombre;
		this._departamento = departamento;
		this._diasVacacionesDisp = 20;
	}
	get nombre() {
		return this._nombre;
	}
	get departamento() {
		return this._departamento;
	}
	get diasVacacionesDisp (){
		return this._diasVacacionesDisp;
	}
	set nombre(nombre) {
		this._nombre = nombre;
	}
	set departamento(departamento) {
		this._departamento = departamento;
	}
	ladra() {
		console.log('Guau! Guau!');
	}
	tomarVacaciones(dias) {
		this._diasVacacionesDisp = this._diasVacacionesDisp - dias;
	}
}

const cirujanoDaniel = new Cirujano('Daniel','Cardiovascular');
const cirujanoAilyn = new Cirujano('Ailyn','Neurologia');

console.log(`${cirujanoDaniel.nombre} tenia ${cirujanoDaniel.diasVacacionesDisp} dias de vacaciones.`);
cirujanoDaniel.tomarVacaciones(7);

console.log(`${cirujanoDaniel.nombre} ahora tiene ${cirujanoDaniel.diasVacacionesDisp} dias de vacaciones, despues de tomar ${cirujanoDaniel.tomarVacaciones.dias} dias de vacaciones.`);