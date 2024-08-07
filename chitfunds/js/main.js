$(document).ready(function(){
	// testimonial slider

	if($('#testimonial').length){
		$('#testimonial').slick({
		  infinite: true,
		  slidesToShow: 1,
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
		        slidesToShow: 1,
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

})