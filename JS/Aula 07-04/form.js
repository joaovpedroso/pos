window.onload = init;

var frm;

function init(e) {
//	window.alert('Load OK');

	frm = document.getElementById('frmCadastro');

	frm.addEventListener('submit', submitForm);
}

function submitForm(event){
	var nomeInput = document.getElementById('nome');
	var cpfInput = document.getElementById('cpf');

	var nome = nomeInput.value;
	var cpf = cpfInput.value;

	console.log(nome, cpf);

	var msg = [];

	if( nome.length < 5 ){
		msg.push('Informe o seu nome completo');
		nomeInput.style.border = '1px solid red';
	}

	if( !TestaCPF(cpf) ){
		msg.push('CPF Inválido');
		cpfInput.style.border = '1px solid red';
	}

	if( msg.length > 0 ){
		event.preventDefault();		
		window.alert( msg.join("\n") );
	}
}