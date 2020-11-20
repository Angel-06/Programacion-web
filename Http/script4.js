//Ejemplo de solicitud sincrona con eventos mas utilizados de respuesta 
//load, error, progress
// 1. Se crea objeto de solicitud XMLHttpRequest
let xhr = new XMLHttpRequest();
//2. Se configura: solicitus-GET para URL http//localhost:3000/archivo.txt
xhr.open('GET', 'http://localhost:3000/archivo.txt');
//3. Se envia solicitud
xhr.send();
//4. Los siguientes seran invocados despues de que la respuesta sea recibida.
xhr.onload = function() {
	if (xhr.status != 200) {//Analaiza status de la respuesta HTTP
		alert(`Error ${xhr.status}: ${xhr.statusText}`);//Ejemplo. 404: Not found 
	}else{//Muestra resultado 
		alert(`Listo, se recibieron ${xhr.response.length} bytes`);
	}
};

xhr.onprogress = function(event){
	if (event.lengthComputable) {
		alert(`Recibidos ${event.loaded} de ${event.total} bytes`);
	}else{
		alert(`Recibidos ${event.loaded} bytes`);//No se recibido longitid del contenido Content-Length
	}
};

xhr.onerror = function(){
	alert("Fallo solicitud");
};