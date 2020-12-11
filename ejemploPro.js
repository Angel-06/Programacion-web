console.log("Ejemplo\n");
	const promesa = new Promise((resolve,reject) => {
		setTimeout(()=> {console.log('Adios :)');},3000);

		resolve();
	})
	.then(() => {
		throw new Error('Ocurrio una exepcion');
		console.log('Bye');
	})
	.catch(()=> {
		setTimeout(()=> {console.log('Como estas?');},1000);
	})
	.then(() => {
		setTimeout(()=> {console.log('Muy bien, gracias!');},2000);
	});

	promesa.then();