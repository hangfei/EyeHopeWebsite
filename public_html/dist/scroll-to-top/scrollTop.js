$("body").append("<div id = 'back-top'></div>")
	$("#back-top").append("<a><span></span>Back to Top</a>");
	$("#back-top").css({"bottom": "30px", "position": "fixed", "margin-left": window.innerWidth * 7 / 8+"px", "cursor":"pointer"});

	$("#back-top a").css({
		"width": "108px",
		"display": "block",
		"text-align": "center",
		"font": "11px/100% Arial, Helvetica, sans-serif",
		"text-transform": "uppercase",
		"text-decoration": "none",
		"color": "#bbb",
	/* background color transition */
		"-webkit-transition": "1s",
		"-moz-transition": "1s",
		"transition": "1s"
	});

	$("#back-top span").css({
		"width": "108px",
		"height": "108px",
		"display": "block",
		"margin-bottom": "7px",
		"background": "#ddd url('scroll-to-top/up-arrow.png') no-repeat center center",

	/* rounded corners */
		"-webkit-border-radius": "15px",
		"-moz-border-radius": "15px",
		"border-radius": "15px",
	/* background color transition */
		"-webkit-transition": "1s",
		"-moz-transition": "1s",
		"transition": "1s"
	});




$(document).ready(function(){
	$("#back-top").hide();

	// hide #back-top first

	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
		$('#back-top a').hover(function () {
			 	$('#back-top a').css({"color": "#000"});
			 	$('#back-top a span').css({"background-color": "#777"});
			}, function(){
				$('#back-top a').css({"color": "#bbb"});
				$('#back-top a span').css({"background-color": "#ddd"});
		});
	});

});

