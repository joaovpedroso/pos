/*var funcao = (argumentos) => {
	console.log(argumentos);
}
*/
var funcao = (...argumentos) => {
	console.log(argumentos);
}

funcao('a');
funcao('a','b');
funcao('a','b','c');