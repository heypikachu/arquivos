$(document).ready(function(){
	
	//COPIA TEXTO
	$('.copy').click(function(){
		
		var texto = $(this).text();		
		var elemento = document.createElement('textarea');
		
		elemento.value = texto;
		document.body.appendChild(elemento);
		
		elemento.select();
		document.execCommand('copy');
		document.body.removeChild(elemento);

		//EFEITO
		$(this).css({"background":"#f7d38a"}).delay("100").queue(function() {$(this).css({"background":"000"});});   		
	});
	
	//EFEITO		
	$('.copy').mouseout(function(){$(this).css({"background":""})});
	
	
	
});
