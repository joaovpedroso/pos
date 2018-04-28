function soma(a,b){
	return a + b;
}

function subtracao(a,b){
	return a - b;
}

function multiplicacao(a,b){
	return a * b;
}

function divisao(a,b){
	return a / b;
}

function calculadora(a, b, operacao){
	return operacao(a,b);
}

console.log( resultado = calculadora(2,4, multiplicacao) );
