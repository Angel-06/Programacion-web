function mutiplicacion(x,y){
	return x*y;
}

console.log(mutiplicacion(4,5));
//Las funciones son un tipo de dato de primera clase 
//funciones tiene porpiedades
mutiplicacion.version = "v.1.0.0";
console.log(mutiplicacion.version);
console.log(mutiplicacion.toString());