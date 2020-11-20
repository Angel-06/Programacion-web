//this
function test(){
	console.log(this);
}

test();

//Agregando propiedades
function test2(){
	this.miclase = 'Programacion';
}

test2();
console.log(global.miclase);

//Funciones constructoras
function circulo(radio){
	this.radio = radio;

	this.getArea = function(){
		return Math.PI * Math.pow(this.radio,2);
	}
}

let miCirculo = new circulo(10);
console.log(miCirculo);
let otroCirculo = new circulo(5);
console.log(otroCirculo);