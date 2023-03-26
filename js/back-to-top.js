/* null */
var c = 0;
/* if(localStorage.getItem("abc")) { c = localStorage.getItem("abc");}
c++;
document.getElementById("abc").innerHTML = c;
localStorage.setItem("abc", c); */
/* back to top */
$(document).ready(function(){

	// hide #back-top first
	$("#volver-arriba").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#volver-arriba').fadeIn();
			} else {
				$('#volver-arriba').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#volver-arriba a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});