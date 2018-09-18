$( document ).ready(function() {
	var skillNum = document.getElementsByClassName('gauge').length;
	console.log(skillNum);
	for(var i=0; i < skillNum; i++){
	    $(".gauge:eq("+i+")").mouseenter(function(){
		    console.log('Show!');
		    	$('.popUp:eq('+i+')').css('display', 'inline-block');
		}).mouseleave(function(){
		    console.log('Hide!');
		    	$('.popUp:eq('+i+')').css('display', 'none');
		});
	}
});