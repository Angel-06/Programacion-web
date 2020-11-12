let btn1= document.getElementById('boton1');
let btn2 = document.getElementById('boton2');
var tx1= document.getElementById('txt1');
var tx2= document.getElementById('txt2');

function limpiar(){
	console.log('hola');
	tx1.value='';
	tx2.value='';
}

function enviar(){
alert("Datos guardados!"); 
}

btn2.addEventListener('click', limpiar);

btn1.addEventListener('click', enviar);