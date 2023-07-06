// Back To Top
$(document).ready(function(){

	$("#volver-arriba").hide();
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#volver-arriba').fadeIn();
			} else {
				$('#volver-arriba').fadeOut();
			}
		});
		$('#volver-arriba a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});