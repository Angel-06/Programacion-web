class Media{
	constructor(tipo){
		this._tipo = tipo;
	}
	get tipo(){
		return this._tipo;
	}
	set tipo(tipo){
		this._tipo;
	}
}

class Libro extends Media{
	constructor(autorL,tituloL, paginasL, calificacionAgreL){
		super(autorL,tituloL,paginasL);
		this._autorL = autorL;
		this._tituloL = tituloL;
		this._paginasL = paginasL;
		this._prestadoL = false;
		this._calificacionesL = [8,9,10];
		this._calificacionAgreL = calificacionAgreL;
	}
	get calificacionAgreL(){
		return this._calificacionAgreL;
	}
	get autorL(){
		return this._autorL;
	}
	get tituloL(){
		return this._tituloL;
	}
	get paginasL(){
		return this._paginasL;
	}
	get prestadoL(){
		return this._prestadoL;
	}
	get calificacionesL(){
		return this._calificacionesL;
	}
	obtenerCalificionPromedioL(){
			var suma = 0;
			var promedio = 0;
			for (var i = 0; i <this._calificacionesL.length ;i++) {
				suma+=this._calificacionesL[i];
			}
			promedio = suma/this._calificacionesL.length;
			console.log(`calificacion promedio del Libro: ${promedio}`);
	}
	cambiarEstatusPrestadoL(prestadoL){
		if (this._prestadoL == false) {
			this._prestadoL = true;
		} else {
			this._prestadoL = false;
		}
	}
	agregarCalificacionL(calificacionAgreL){
		this._calificacionAgreL = calificacionAgreL;
		this._calificacionesL.push(calificacionAgreL);
		this._calificacionAgreL = calificacionAgreL;
	}
}

class CD extends Media{
	constructor(artista,titulo,calificacionAgre){
		super(artista,titulo,calificacionAgre);
		this._artista = artista;
		this._titulo = titulo;
		this._calificacionAgre = calificacionAgre;
		this._prestado = false;
		this._calificaciones = [];
		this._caciones = ['Livin on a Prayer','You Give Love a Bad Name','Wanted Dead or Alive','It’s my Life','Always'];
	}
	get calificacionAgre(){
		return this._calificacionAgre;
	}
	get artista(){
		return this._artista;
	}
	get titulo(){
		return this._titulo;
	}
	get prestado(){
		return this._prestado;
	}
	get calificaciones(){
		return this._calificaciones;
	}
	get canciones(){
		return this._caciones;
	}
	obtenerCalificionPromedio(){
			var suma = 0;
			var promedio = 0;
			for (var i = 0; i <this._calificaciones.length ;i++) {
				suma+=this._calificaciones[i];
			}
			promedio = suma/this._calificaciones.length;
			console.log(`calificacion promedio del CD: ${promedio}`);
	}
	cambiarEstatusPrestado(prestado){
		if (this._prestado == false) {
			this._prestado = true;
		} else {
			this._prestado = false;
		}
	}
	agregarCalificacion(calificacionAgre){
		this._calificacionAgre = calificacionAgre;
		this._calificaciones.push(calificacionAgre);
		this._calificacionAgre = calificacionAgre;
	}
}

class Video extends Media{
	constructor(directorV,tituloV,duracionV,calificacionAgreV){
		super(directorV,tituloV,duracionV,calificacionAgreV);
		this._directorV = directorV;
		this._tituloV = tituloV;
		this._duracionV = duracionV;
		this._calificacionAgreV = calificacionAgreV;
		this._prestadoV = false;
		this._calificacionesV = [];
	}
	get calificacionAgreV(){
		return this._calificacionAgreV;
	}
	get directorV(){
		return this._directorV;
	}
	get tituloV(){
		return this._tituloV;
	}
	get prestadoV(){
		return this._prestadoV;
	}
	get calificacionesV(){
		return this._calificacionesV;
	}
	get duracionV(){
		return this._duracionV;
	}

	obtenerCalificionPromedioV(){
			var suma = 0;
			var promedio = 0;
			for (var i = 0; i <this._calificacionesV.length ;i++) {
				suma+=this._calificacionesV[i];
			}
			promedio = suma/this._calificacionesV.length;
			console.log(`calificacion promedio del Video: ${promedio}`);
	}
	cambiarEstatusPrestadoV(prestadoV){
		if (this._prestadoV == false) {
			this._prestadoV = true;
		} else {
			this._prestadoV = false;
		}
	}
	agregarCalificacionV(calificacionAgreV){
		this._calificacionAgreV = calificacionAgreV;
		this._calificacionesV.push(calificacionAgreV);
		this._calificacionAgreV = calificacionAgreV;
	}
}
const PMedia = new Media('Libro');
const PLibro = new Libro('Suzanne Collins','Juegos del hambre: En llamas',391);
console.log(`\nEsto es un: ${PMedia.tipo}\nTitulo: ${PLibro.tituloL}\nAutor@: ${PLibro.autorL}\nPaginas: ${PLibro.paginasL}`);
PLibro.agregarCalificacionL(10);
console.log(`El libro esta disponible: ${PLibro.prestadoL}\nCalificacion agregada: ${PLibro.calificacionAgreL}`);
PLibro.cambiarEstatusPrestadoL(PLibro.prestadoL);
PLibro.obtenerCalificionPromedioL();

const SMedia = new Media('CD');
const SCD = new CD('Bon Jovi','Slippery When Wet');
console.log(`\nEsto es un: ${SMedia.tipo}\nTitulo: ${SCD.titulo}\nArtista: ${SCD.artista}\nCanciones: ${SCD.canciones}`);
SCD.agregarCalificacion(7);
console.log(`El CD esta disponible: ${SCD.prestado}\nCalificacion agregada: ${SCD.calificacionAgre}`);
SCD.cambiarEstatusPrestado(SCD.prestado);
SCD.obtenerCalificionPromedio();

const VMedia = new Media('Video');
const TVideo = new Video('Colin Trevorrow','Jurassic World: Mundo Jurásico','2h 4m');
console.log(`\nEsto es un: ${VMedia.tipo}\nTitulo: ${TVideo.tituloV}\nDirector: ${TVideo.directorV}\nDuracion: ${TVideo.duracionV}`);
TVideo.agregarCalificacionV(10);
console.log(`El video esta disponible: ${TVideo.prestadoV}\nCalificacion agregada: ${TVideo.calificacionAgreV}`);
TVideo.cambiarEstatusPrestadoV(TVideo.prestadoV);
TVideo.obtenerCalificionPromedioV();


