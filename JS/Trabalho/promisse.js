let formu = document.getElementById("promisse");

formu.addEventListener('submit', (e) => {
	e.preventDefault();

	let gasolina = document.getElementById('gasolina');
	let etanol = document.getElementById('etanol');

	gas = parseFloat(gasolina.value);
	et = parseFloat(etanol.value);
	
	if( Number.isNaN(gas) ){
		gasolina.value = "";
		window.alert('Valor inválido para gasolina');
	} else if( Number.isNaN(et) ){
		etanol.value = "";
		window.alert('Valor inválido para etanol');
	}else {

		consumo = ( etanol / gasolina );
		if( consumo >= 0.7 ){
			window.alert('Compensa Gasolina');
		}else {
			window.alert('Compensa Etanol');
		}

	}

});