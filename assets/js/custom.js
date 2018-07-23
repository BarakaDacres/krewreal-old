(function ($) {
	
	"use strict";

	// Header Scrolling Set White Background
	scrollNavBar();


	// Scroll animation init
	window.sr = new scrollReveal();
	

	// Menu Dropdown Toggle
	if($('.menu-trigger').length){
		$('.menu-trigger').click(function(){
			$(this).toggleClass('active');
			$('.header-area .nav').slideToggle(200);
		});
	}


	// Menu elevator animation
	$('a[href*=\\#]:not([href=\\#])').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				var width = $(window).width();
				if(width < 991) {
					$('.menu-trigger').removeClass('active');
					$('.header-area .nav').slideUp(200);	
				}				
				$('html,body').animate({
					scrollTop: (target.offset().top) - 30
				}, 700);
				return false;
			}
		}
	});



	// Home number counterup
	if($('.count-item').length){
		$('.count-item strong').counterUp({
			delay: 10,
			time: 1000
		});
	}


	// Blog cover image
	if($('.blog-post-thumb').length){
		$('.blog-post-thumb .img').imgfix();
	}


	// About Us Image
	if($('.about-image').length){
		$('.about-image').imgfix({
			scale: 1.1
		});
	}	


	// Set Testimonials User Image
	$(".testimonials-wrapper").find(".hexagon-in2").each(function(i){
		$('.hexagon-in2:eq(' +[i]+ ')').css("background-image", 'url(' + $('.hexagon-in2:eq(' + [i] + ')').data('profile-img') + ')');
	});


	// Page standard gallery
	if($('.page-gallery').length && $('.page-gallery-wrapper').length){
		$('.page-gallery').imgfix({
			scale: 1.1
		});

		$('.page-gallery').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			zoom: {
				enabled: true,
				duration: 300,
				easing: 'ease-in-out',
			}
		});
	}


	// Page loading animation
	$(window).on('load', function() {
		if($('.cover').length){
			$('.cover').parallax({
				imageSrc: $('.cover').data('image'),
				zIndex: '1'
			});
		}

		$(".preloader-wrapper").animate({
			'opacity': '0'
		}, 600, function(){
			setTimeout(function(){
				// Home Parallax
				if($('.parallax').length){
					$('.parallax').parallax({
						imageSrc: 'assets/images/photos/parallax.jpg',
						zIndex: '1'
					});
				}

				// Home Parallax Counterup
				if($('.parallax-counter').length){
					$('.parallax-counter').parallax({
						imageSrc: 'assets/images/photos/parallax-counter.jpg',
						zIndex: '1'
					});
				}
				$(".preloader-wrapper").css("visibility", "hidden").fadeOut();
			}, 300);
		});
	});


	// Header Scrolling Set White Background
	$(window).on('scroll', function() {
		scrollNavBar();
	});


	// Navbar Scroll Set White Background Function
	function scrollNavBar() {
		var width = $(window).width();
		if(width > 991) {
			var scroll = $(window).scrollTop();
			if (scroll >= 30) {
				$(".header-area").addClass("header-sticky");
			}else{
				$(".header-area").removeClass("header-sticky");
			}
		}
	}


})(window.jQuery);