function animacao(x,y, callback ){
	callback('Após o fim');
}

animacao(10,1, function(a){
	console.log(a);
})