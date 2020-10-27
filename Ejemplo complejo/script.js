// variables para hacer referencia a los elementos de la lista y boton
let eleUno = document.getElementById('elemento-uno');
let eleDos = document.getElementById('elemento-dos');
let eleTres = document.getElementById('elemento-tres');
let eleCuatro = document.getElementById('elemento-cuatro');
let eleCinco = document.getElementById('elemento-cinco');
let resetButton = document.getElementById('btn-reset');

// Funcion para el boton reset
let reset = function() {
  eleUno.style.width = ''
  eleDos .style.backgroundColor = ''
  eleTres.innerHTML = 'El mouse debe salir de la caja para cambiar el texto'
  eleCinco.style.display = "none"
};
resetButton.onclick = reset;
//resetButton.addEventListener('click',reset);

function incrementaAncho(){
  eleUno.style.width = '600px';
}

function normalEleuno(){
	eleUno.style.width = '';
}

eleUno.addEventListener('mouseover', incrementaAncho);
eleUno.addEventListener('mouseout', normalEleuno)

function cambiaFondo(){
  eleDos.style.backgroundColor = 'green';
}

eleDos.addEventListener('mouseup', cambiaFondo);

function cambiaTextoSalir(){
  eleTres.innerHTML = 'El mouse debe entrar al boton para cambiar';
}

function cambiaTextoDentro(){
	eleTres.innerHTML = 'El mouse debe salir de la caja para cambiar el texto';
}

eleTres.addEventListener('mouseout', cambiaTextoSalir)
eleTres.addEventListener('mouseover', cambiaTextoDentro);
var bandera = new Boolean(false);

function muestraElemento(){
		eleCinco.style.display = 'block';
}


eleCuatro.addEventListener('mousedown', muestraElemento);