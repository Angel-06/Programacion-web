let memoriaInicial= process.memoryUsage().heapUsed;
let palabra = process.argv[2];

console.log(`La palabra es ${palabra}`);

let arregloPalabras = [];

for (let i=0; i< 1000; i++){
	arregloPalabras.push(`${palabra} cuenta: ${i}`);
}

console.log(`Al inicio el uso de memoria era: ${memoriaInicial}. \n Memoria actual utilizada: ${process.memoryUsage().heapUsed}
\nDepues de utilizar el ciclo para agregar elemntos \nal arreglo el porceso esta usando ${process.memoryUsage().heapUsed - memoriaInicial}`);
