var a , b;
var vetor = [2,4,6];

[a,b] = vetor;

console.log(a);
console.log(b);

[a,b, ...c] = vetor;

console.log(a);
console.log(b);
console.log(c);

/* DESESTRUTURAMENTO DE OBJETOS */
var nome, email;

var cliente = {
	nome: "João",
	email: "mail@mail.com"
}

function dados(){
	return{
		nome: "João Victor",
		email: "joao@mail.com"		
	}
}

