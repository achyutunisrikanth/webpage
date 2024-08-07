$(document).ready(function(){
	// testimonial slider

	if($('#testimonial').length){
		$('#testimonial').slick({
		  infinite: true,
		  slidesToShow: 3,
		  centerMode: true,
		  centerPadding: '0px',
		  slidesToScroll: 3,
		  arrows: false,
		  speed: 1200,
		  dots: true,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 767,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    },
		  ]
		});
	}

	// hamburger click
	$('.hamburger-menu').click(function(){
		$(this).toggleClass('active');
		$('.menu-icons').toggleClass('active');
		if ($('.menu-text').text() == "Close")
	       $('.menu-text').text("Menu")
	    else
	       $('.menu-text').text("Close");
	});


	// animate on scroll intialize
	AOS.init();
})