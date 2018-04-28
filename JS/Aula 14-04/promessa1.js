var p = new Promise( function( resolve, reject ){

	//resolve("ALFA 2018");

	setTimeout( () =>{
		resolve("alfa 2018");
	}, 3000
	);

} );

console.log('p', p);
var p2 = p.then( ( resultado ) => {
	//console.log(resultado);
	//console.log(p);
	console.log(resultado);
	resultado = resultado.toUpperCase();
	return new Promise( (resolve, reject) =>{
		setTimeout( () => {
			resolve(resultado);
		}, 5000 );
	} );
} );
p2.then( (resultado)=>{
	console.log(resultado);
} );
console.log('p2', p2);