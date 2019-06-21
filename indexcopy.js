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
		$(this).css({"background":"#bcff97"}).delay("100").queue(function() {$(this).css({"background":"fcd8b2"});});   
		
		//MENSAGEM EFEITO
		$('span').fadeIn('slow', function () {$(this).delay(750).fadeOut('slow');});			
	});
	
	//EFEITO		
	$('.copy').mouseout(function(){$(this).css({"background":""})});
	
	
	
});