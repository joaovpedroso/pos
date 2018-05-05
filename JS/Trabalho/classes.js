class Loja{
	constructor(nome, cnpj){
		this.nome = nome;
		this.cnpj = cnpj;
	}

	contratarVendedor(nome){
		return nome+" contratado como vendedor";
	}
}

class Livro{
	constructor(codigo, titulo, escritor){
		this.codigo = codigo;
		this.titulo = titulo;
		this.escritor = escritor;
	}
	getTitulo(){
		return this.titulo;
	}
	getEscritor(){
		return this.escritor;
	}
	getLivro(){
		return "Livro: "+this.titulo+" - Código: "+this.codigo+" - Escritor: "+this.escritor;
	}
}

class LivroImpresso extends Livro{
	constructor(peso){
		this.peso = peso;
	}
	getPeso(){
		return this.peso;
	}
}

class Ebook extends Livro{
	constructor(link){
		this.link = link;
	}
	download(){
		return "Download do livro";
	}
}

class Venda{
	constructor(cliente, vendedor, livro){
		this.cliente = cliente;
		this.vendedor = vendedor;
		this.livro = livro;
	}

	imprimirVenda(){
		return "Venda para o cliente: "+this.cliente+", Realizada por: "+this.vendedor+" do livro: "+this.livro;
	}
}

class Pessoa{
	constructor(nome, cpf, codigo){
		this.codigo = codigo
		this.nome = nome;
		this.cpf = cpf;
	}
}

class Vendedor extends Pessoa{
	constructor(salario){
		this.salario = salario;
	}
	realizarVenda(codigoLivro, codigoCliente ){
		return "Livro"+codigoLivro+" vendido para: "+codigoCliente;
	}
	atenderCliente(nome){
		return "Cliente "+nome+" sendo atendido";
	}
}

class Cliente extends Pessoa{
	constructor(email){
		this.email = email;
	}
	comprarLivro(titulo){
		return "Locar o livro "+livro;
	}
}

let venda = new Venda(1001, 123, 'Venda 01');
console.log(venda.imprimirVenda());

let livro = new Livro('1010', 'Livro Teste', 'Joao da Silva');
console.log(livro.getEscritor());