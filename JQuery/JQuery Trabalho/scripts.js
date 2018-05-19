$(document).ready(function(){
	//Menu
	$('#navigation').slimmenu({
		resizeWidth: '900',
		collapserTitle: 'MENU',
		animSpeed: 'medium',
		easingEffect: null,
		indentChildren: false,
		childrenIndenter: '&nbsp;'
	});

	//Slider
	$("#slideshow").craftyslide();


	//Formulario
	$('#data').pickadate();

	$.getJSON('estados-cidades.json', function( data ) {
		var itens = '<option name="">- Selecione um estado -</option>';

		$.each(data.estados, function (key, val) {
			itens = itens + '<option value="' + val.sigla + '">' + val.nome + '</option>';
		});

		$('#estado').html(itens);
		$('#estado').change(function () {
			var estado = $('#estado option:selected').val();
			var options_cidades = '<option value="">Cidades</option>';

			$.each(data.estados, function (key, val) {
				if( val.sigla == estado ){
					$.each(val.cidades, function (key, val) {
						options_cidades += "<option value='"+val+"'>"+val+"</option>";
					});
				}
			});

			$('#cidade').html(options_cidades);

		}).change();
	});

	$.validate({
		form: '#validation',
		validateOnBlur: true,
		showHelpOnFocus: false,
		addSuggestions: true
	});

    //Galeria
    $('#galeria').unitegallery();
    //Fim Galeria

	//Voltar Ao Topo
	if ($('#back-top').length) {
	    var scrollTrigger = 100, // px
	    backToTop = function () {
	    	var scrollTop = $(window).scrollTop();
	    	if (scrollTop > scrollTrigger) {
	    		$('#back-top').addClass('show');
	    	} else {
	    		$('#back-top').removeClass('show');
	    	}
	    };
	    backToTop();
	    $(window).on('scroll', function () {
	    	backToTop();
	    });
	    $('#back-top').on('click', function (e) {
	    	e.preventDefault();
	    	$('html,body').animate({
	    		scrollTop: 0
	    	}, 700);
	    });
	}
	//Fim Voltar Ao Topo

});