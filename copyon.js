$('.copy').click(function(){
     var texto = $(this).text();		
     var elemento = document.createElement('textarea');
		
     elemento.value = texto;
     document.body.appendChild(elemento);
		
     elemento.select();
     document.execCommand('copy');
     document.body.removeChild(elemento);			
});
