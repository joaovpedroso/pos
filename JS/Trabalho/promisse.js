//Atribuindo a variavel Formu o controle do formulario HTML
let formu = document.getElementById("promisse");

formu.addEventListener('submit', (e) => {
	//Evitar Carregamento da Página
	e.preventDefault();

	//Recebendo valores do HTML
	let gasolina = document.getElementById('gasolina');
	let etanol = document.getElementById('etanol');
	let fieldGasolina = document.getElementById('fieldGasolina');
	let fieldEtanol = document.getElementById('fieldEtanol');

	//Transformando os valores informados em Float
	gas = parseFloat(gasolina.value);
	et = parseFloat(etanol.value);
	
	if( Number.isNaN(gas) ){
		gasolina.value = "";
		window.alert('Valor inválido para gasolina');
	} else if( Number.isNaN(et) ){
		etanol.value = "";
		window.alert('Valor inválido para etanol');
	}else {

	/*	consumo = ( etanol / gasolina );
		if( consumo >= 0.7 ){
			window.alert('Compensa Gasolina');
		}else {
			window.alert('Compensa Etanol');
		}
	*/

		var promisse = new  Promise((resolve)=>{
		    if( ( gas/et ) > 0.7) {
		      fieldGasolina.style.background ="green";
		      fieldEtanol.style.background ="white";
		    }else{
		      fieldEtanol.style.background ="green";
		      fieldGasolina.style.background ="white";

		    }
		    resolve("Gasol.");
	    });

	}

});


