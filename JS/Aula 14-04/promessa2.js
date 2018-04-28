function pegarValor1( anterior ) {
	return new Promise( function(resolve, reject){

		let campo1 = document.getElementById('input1');
		setTimeout( () =>{
			anterior.valor1 = campo1.value;
			resolve(anterior);	
		}, 1500);

	});

}
function pegarValor2( anterior ) {

	/*
	let campo2 = document.getElementById('input2');
	anterior.valor2 = campo2.value;
	return Promise.resolve(anterior);
	*/

	return new Promise( function(resolve, reject){

		let campo2 = document.getElementById('input2');
		setTimeout( () =>{
			anterior.valor2 = campo2.value;
			resolve(anterior);	
		}, 3000);

	});
}

function pegarValores() {
	/*return {
		valor1: pegarValor1(),
		valor2: pegarValor2()
	}*/	
	return Promise.resolve({  })
		.then( pegarValor1 )
		.then (pegarValor2 )
		.then( (resultado) => {
			console.log(resultado);
			return resultado;
		} );
}

function transformarValores(anterior){

	anterior.valor1 = parseInt(anterior.valor1);
	anterior.valor2 = parseInt(anterior.valor2);

	return anterior;
}

function calcularResultado(anterior) {
/*
	anterior.soma = anterior.valor1 + anterior.valor2;
	anterior.subtracao = anterior.valor1 - anterior.valor2;
	anterior.multiplicacao = anterior.valor1 * anterior.valor2;
	anterior.divisao = anterior.valor1 / anterior.valor2;
	
	return anterior;
*/

	return Promise.all([
		calcularSoma(anterior.valor1,anterior.valor2),
		calcularMult(anterior.valor1,anterior.valor2),
		calcularDiv(anterior.valor1,anterior.valor2),
		calcularSub(anterior.valor1,anterior.valor2)
	]).then( (r) => {
		
		anterior.soma = r[0];
		anterior.multiplicacao = r[1];
		anterior.divisao = r[2];
		anterior.subtracao = r[3];

		return anterior;

	} );
}

function calcularSoma(valor1, valor2){
	return new Promise( (resolve, reject) => {
		setTimeout(() => {
			resolve(valor1 + valor2);
		}, 1000);
	} )
}

function calcularMult(valor1, valor2){
	return new Promise( (resolve, reject) => {
		setTimeout(() => {
			resolve(valor1 * valor2);
		}, 2000);
	} )
}

function calcularDiv(valor1, valor2){
	return new Promise( (resolve, reject) => {
		setTimeout(() => {
			resolve(valor1 / valor2);
		}, 3000);
	} )
}

function calcularSub(valor1, valor2){
	return new Promise( (resolve, reject) => {
		setTimeout(() => {
			resolve(valor1 - valor2);
		}, 4000);
	} )
}

function mostrarSaida(anterior){

	let html = `Soma: ${anterior.soma} <br> 
	Subtração: ${anterior.subtracao}<br> 
	Divisão: ${anterior.divisao}<br> 
	Multiplicação: ${anterior.multiplicacao}<br>`;

	document.getElementById('out').innerHTML = html;

	return anterior;
}

/* 
var x = pegarValores();
console.log(x);
*/

let frm = document.getElementById('form1');
frm.addEventListener('submit', (e) => {
	e.preventDefault();

	pegarValores()
	.then(transformarValores)
	.then(calcularResultado)
	.then(mostrarSaida)
	.then( ( resultado ) => {
		console.log(resultado);
	});

});