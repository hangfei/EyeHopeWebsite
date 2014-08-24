$("body").append("<div id = 'scroll-tag'></div>")

	$("#scroll-tag").append("<a><span></span>Back to Top</a>");
	$("#scroll-tag").css({"bottom": "0px", "position": "fixed", "margin-left": window.innerWidth * 4 / 8 - 108+"px", "cursor":"pointer"});

	$("#scroll-tag a").css({
		"width": "216px",
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

	$("#scroll-tag span").css({
		"width": "216px",
		"height": "108px",
		"display": "block",
		"margin-bottom": "7px",
		"background": "url('dist/scroll-to-tag/down-arrow.png') no-repeat center center",

		"-webkit-transition": "1s",
		"-moz-transition": "1s",
		"transition": "1s"
	});
	// $("#scroll-tag").hide();



$(document).ready(function(){

	// hide #back-top first
	window.initScroll = function(tagName){
		function getTargetDistance(){
			return $(tagName).offset().top - 85 // hard coded 85 is for navigationbar height
		}

		$(window).scroll(function () {
			if (getTargetDistance() -$(this).scrollTop() > 600) {
				$('#scroll-tag').fadeIn();
			} else {
				$('#scroll-tag').fadeOut();
			}
		});
		$("#scroll-tag").show();
		$(function () {
		// scroll body to 0px on click
			$('#scroll-tag a').click(function () {
				console.log(getTargetDistance());
				$('body,html').animate({
					scrollTop: getTargetDistance()
				}, 800);
				return false;
			});
			$('#scroll-tag a').hover(function () {
			 	$('#scroll-tag a').css({"color": "#000"});
			 	// $('#scroll-tag a span').css({"background-color": "#777"});
			}, function(){
				$('#scroll-tag a').css({"color": "#bbb"});
				// $('#scroll-tag a span').css({"background-color": "#ddd"});
			});
		
		});
	}
	
	// fade in #back-top
	

});

