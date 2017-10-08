$(document).ready(function(){
	var h = $(window).height();

	$("#menu-button, .lang-panel").addClass('animated fadeInDown');
	$("#up, .logo").addClass('animated fadeIn');
	// $(".motto").addClass('animated fadeInUp');
	
	$(window).scroll(function(){
		if ( ($(this).scrollTop()+h) >= $(".carousel ").offset().top) {
			// $(".story-team").css({visibility:"visible"});
			$(".carousel ").addClass('animated fadeInLeft');
			// $(".h-capt").addClass('animated fadeInRight');
			// $(".paragraph").addClass('animated fadeInRight');
		
		} 
		if ( ($(this).scrollTop()+h) >= $(".make-list").offset().top) {
			// $("#ex3 .post").css({visibility:"visible"});
			$(".make-list").addClass('animated fadeInRight');
			// $("#ex3 .post").eq(1).addClass('animated fadeInUp');
		} 
		if ( ($(this).scrollTop()+h) >= $("#skills").offset().top) {
			// $("#ex4 .post").css({visibility:"visible"});
			// $(".skills").addClass('animated shake');
			$(".skill-text, .skills-bar").addClass('animated fadeIn');
		} 
		if ( ($(this).scrollTop()+h) >= $(".cont-list").offset().top) {
			// $("#ex4 .post").css({visibility:"visible"});
			$(".cont-list ").addClass('animated fadeInUp');
		}
		// if ( ($(this).scrollTop()+h) >= $(".cl").offset().top) {
		// 	$(".clphoto").addClass('animated fadeInUp');
		// } 
		// if ( ($(this).scrollTop()+h) >= $(".awards").offset().top) {
		// 	// $(".story-team").css({visibility:"visible"});
		// 	$(".section-h").addClass('animated fadeInDown');
		// }
		// if ( ($(this).scrollTop()+h) >= $(".awards-2").offset().top) {
		// 	$(".aw-left").addClass('animated fadeInLeft');
		// 	$(".aw-right").addClass('animated fadeInRight');
		// }
		// if ( ($(this).scrollTop()+h) >= $(".contacts").offset().top) {
		// 	// $(".story-team").css({visibility:"visible"});
		// 	$(".cont-left").addClass('animated fadeInUp');
		// 	$(".cont-right").addClass('animated fadeInUp');
		// }
		// if ( ($(this).scrollTop()+h) >= $("footer").offset().top) {
		// 	// $(".story-team").css({visibility:"visible"});
		// 	$("footer").addClass('animated fadeInUp');
		// 	$("footer .h").addClass('animated fadeInUp');
		// 	$("footer .capt").addClass('animated fadeInUp');
		// 	$("footer a").addClass('animated fadeInUp');

		// }

		// if ( $(this).scrollTop() == 0 ) {
		// 	$("#ex2 .post, #ex3 .post, #ex4 .post").each(function(){
		// 		if ( $(this).hasClass('last') ) {
		// 			$(this).removeClass().addClass('post last');
		// 		} else {
		// 			$(this).removeClass().addClass('post');
		// 		}
		// 		$(this).css({visibility:"hidden"});
		// 	});
		// }

	});
});