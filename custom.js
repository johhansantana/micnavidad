$(document).ready(function(){
	$.fn.snow();
	$('.tlt').textillate({ initialDelay: 100, in: { effect: 'fadeInRight', delay: 40, shuffle: false } });
	$('.tlt2').textillate({ initialDelay: 300, in: { effect: 'fadeInRight', delay: 40, shuffle: false } });
	$('.tlt3').textillate({ initialDelay: 500, in: { effect: 'fadeInRight', delay: 40, shuffle: false } });
	$('.tlt4').textillate({ initialDelay: 900, in: { effect: 'fadeInRight', delay: 40, shuffle: false } });
	$('#firsth3').delay(3000).fadeIn(1000);
});