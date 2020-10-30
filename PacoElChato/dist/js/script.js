let parr = document.getElementById('parrafos');
let tit = document.getElementById('titulos');
let sigi = document.getElementById('sig');
let desp = document.getElementById('des');
let imagen = document.getElementById('imagen');

var imgMostrada = "1";
var imgMostrada2 = "10"

function cambiarSig(){
	tit.innerHTML = '';
	if (imgMostrada == "1") {
		console.log(imgMostrada);
		parr.innerHTML = 
		'Paco el Chato vivía <br/>'
	+' en un rancho.<br/>'
	+' Al cumplir seis años<br/>'
	+' Paco debía entrar<br/>'
	+' a la escuela.';
		imagen.src = "dist/js/2.jpg";
		imgMostrada = "2";
	} else if (imgMostrada == "2") {
		console.log(imgMostrada);
		parr.innerHTML = 
		'Para ello su papá <br/>'
	+' lo llevó a la ciudad,<br/>'
	+' donde vivía su abuelita.';
		imagen.src = "dist/js/3.jpg"
		imgMostrada = "3";
	} else if (imgMostrada == "3") {
		console.log(imgMostrada);
		parr.innerHTML = 
		'Al llegar a la escuela, el primer día de clases,<br/>'
	+' la abuelita le dijo:,<br/>'
	+' -A la salida me esperas en la puerta.';
		imagen.src = "dist/js/4.jpg";
		imgMostrada = "4";
	} else if (imgMostrada == "4") {
		console.log(imgMostrada);
		parr.innerHTML = 
		'Paco esperó un rato,<br/>'
	+' después empezó a caminar<br/>'
	+' y se perdió.';
		imagen.src = "dist/js/5.jpg";
		imgMostrada = "5";
	} else if (imgMostrada == "5") {
		console.log(imgMostrada);
		parr.innerHTML = 
		'Paco se asustó y empezó a llorar.<br/>'
	+' Un policía le preguntó su nombre,<br/>'
	+' su apellido y su dirección.';
		imagen.src = "dist/js/6.jpg";
		imgMostrada = "6";
	} else if (imgMostrada == "6") {
		console.log(imgMostrada);
		parr.innerHTML = 
		'Paco no sabía ni su apellido ni su dirección.<br/>'
	+' El policía llevó a Paco a la estación de radio<br/>'
	+' para que avisaran que ahí estaba.';
		imagen.src = "dist/js/7.jpg";
		imgMostrada = "7";
	} else if (imgMostrada == "7") {
		console.log(imgMostrada);
		parr.innerHTML = 
		'La abuelita de Paco oyó el aviso<br/>'
	+' y fue a buscarlo.';
		imagen.src = "dist/js/8.jpg";
		imgMostrada = "8";
	} else if (imgMostrada == "8") {
		console.log(imgMostrada);
		parr.innerHTML = 
		'Paco se alegró y pormetió<br/>'
	+' aprender su nmbre completo<br/>'
	+' y su dirección.';
		imagen.src = "dist/js/9.jpg";
		imgMostrada = "9";
	} else if (imgMostrada == "9") {
		console.log(imgMostrada);
		parr.innerHTML = '';
		imagen.src = "dist/js/10.gif";
		imgMostrada = "10";
	} else {
		console.log("Fin del cuento.")
	}{}{}{}{}{}{}{}{

	}
}

sigi.addEventListener('mousedown', cambiarSig);
desp.addEventListener('mousedown', cambiarAntes);

function cambiarAntes(){
	if (imgMostrada == "10") {
		console.log(imgMostrada);
		parr.innerHTML = 
		'Paco se alegró y pormetió<br/>'
	+' aprender su nmbre completo<br/>'
	+' y su dirección.';
		imagen.src = "dist/js/9.jpg";
		imgMostrada = "9";
	} else if (imgMostrada == "9") {
		console.log(imgMostrada);
		parr.innerHTML = 
		'La abuelita de Paco oyó el aviso<br/>'
	+' y fue a buscarlo.';
		imagen.src = "dist/js/8.jpg"
		imgMostrada = "8";
	} else if (imgMostrada == "8") {
		console.log(imgMostrada);
			parr.innerHTML = 
		'Paco no sabía ni su apellido ni su dirección.<br/>'
	+' El policía llevó a Paco a la estación de radio<br/>'
	+' para que avisaran que ahí estaba.';
		imagen.src = "dist/js/7.jpg";
		imgMostrada = "7";
	} else if (imgMostrada == "7") {
		console.log(imgMostrada);
		parr.innerHTML = 
		'Paco se asustó y empezó a llorar.<br/>'
	+' Un policía le preguntó su nombre,<br/>'
	+' su apellido y su dirección.';
		imagen.src = "dist/js/6.jpg";
		imgMostrada = "6";
	} else if (imgMostrada == "6") {
		console.log(imgMostrada);
		parr.innerHTML = 
		'Paco esperó un rato,<br/>'
	+' después empezó a caminar<br/>'
	+' y se perdió.';
		imagen.src = "dist/js/5.jpg";
		imgMostrada = "5";
	} else if (imgMostrada == "5") {
		console.log(imgMostrada);
		parr.innerHTML = 
		'Al llegar a la escuela, el primer día de clases,<br/>'
	+' la abuelita le dijo:,<br/>'
	+' -A la salida me esperas en la puerta.';
		imagen.src = "dist/js/4.jpg";
		imgMostrada = "4";
	} else if (imgMostrada == "4") {
		console.log(imgMostrada);
		parr.innerHTML = 
		'Para ello su papá <br/>'
	+' lo llevó a la ciudad,<br/>'
	+' donde vivía su abuelita.';
		imagen.src = "dist/js/3.jpg";
		imgMostrada = "3";
	} else if (imgMostrada == "3") {
		console.log(imgMostrada);
		parr.innerHTML = 
		'Paco el Chato vivía <br/>'
	+' en un rancho.<br/>'
	+' Al cumplir seis años<br/>'
	+' Paco debía entrar<br/>'
	+' a la escuela.';
		imagen.src = "dist/js/2.jpg";
		imgMostrada = "2";
	} else if (imgMostrada == "2") {
		console.log(imgMostrada);
		parr.innerHTML = '';
		tit.innerHTML = "Paco El Chato";
		imagen.src = "dist/js/1.jpg";
		imgMostrada = "1"
	} else {
		console.log("Inicio del cuento.")
	}{}{}{}{}{}{}{}{

	}
}