let req = new XMLHttpRequest(); 
req.open('GET', 'http://localhost:3000/archivo.txt', true); //True indica asincrona
req.onreadystatechange = function(aEvt){ //onreadysatatechange se invoca siempre que el estado de la 
	if (req.readyState == 4) {           //solicitud cambia
		if (req.status == 200) 
			console.log(req.responseText);
		else
			console.log("Error al cargar\n");
		}
	};
	req.send(null); //Inicia solicitud.
