	$(function() {	
		$('#nav-menu').fadeOut().hide();
});

// menu
$(function() {
	$('#menu-button').on('click', function() {
		$('#menu-button').fadeOut().hide();
		$('#nav-menu').fadeIn();
		// $('#nav-menu').addClass('animated fadeInLeft').removeClass('fadeOutLeft');

		// $('#nav-menu').show();
	});
	
	$('#menu-close').on('click',function() {
			$('#nav-menu').fadeOut();
			// $('#nav-menu').addClass('fadeOutLeft');

			$('#menu-button').fadeIn();
	});

	$(document).scroll(function() {
			$('#nav-menu').fadeOut();
			$('#menu-button').fadeIn();
	});
	
});


// navpanel
$(window).ready(function(){
	$("body").on("click",".ancor", function (event) {
	//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
	//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
});



// up button 
$(document).scroll(function(){
	if($(window).scrollTop()>=400){

		$('#up').addClass("animated fadeIn").removeClass("fadeOut");
		$('#up').fadeIn(500);

		}
	else{

		$('#up').addClass("animated fadeOut").removeClass("fadeIn");
		$('#up').fadeOut(500);

	}
});

//arrow down fadeout

$(document).scroll(function(){
		// $('.arr-down').show();

	if($(window).scrollTop()>=50){
		// $('.arr-down').hide();

$('.arr-down').fadeOut(500);
		
		}
	else{
		// $('.arr-down').show();
$('.arr-down').fadeIn(500);
		
	}
});


// skills resize
$(document).ready(function() {
 
  $(window).on("load resize", function(){
    var windowWidth = $(window).width();
    if(windowWidth < 1250)$(".c100").addClass("small");
    else
    	if(windowWidth < 426)$(".c100").addClass("smaller");
    else $(".c100").removeClass("small");
  });
});



// work slider resize
$(function(){
  $('.carousel').height($('.carousel').width() * 0.3);

  $(window).resize(function(){
    $('.carousel').height($('.carousel').width() * 0.3);
  });
});


// $(function(){
//   $('#make').height($('#make').width() / 1.1);

//   $(window).resize(function(){
//     $('#make').height($('#make').width() / 1.1);
//   });
// });


// gallery item resize

$(function() {
  // $('.gallery-item').height($('.gallery-item').width() * 0.5);

$(window).on("resize", function(){
  $('.gallery-item').height($('.gallery-item').width() * 0.5);

  // $(window).resize(function(){
  //   $('.gallery-item').height($('.gallery-item').width() * 0.5);
  // });
});
});

//open form

$(function() {
	$('#show-form').on('click', function() {
		// $('.row').addClass('animated fadeInTop').show()
		// $('.row').css({'position': 'relative'});
		$('.row').show(500).fadeIn(500).addClass('animated fadeInDown');
		$('#name').addClass('animated fadeInRight');
		$('#email').addClass('animated fadeInLeft');
		$('#message').addClass('animated fadeInUp');

	});
	$('#form-close, #up').on('click', function() {
		$('.row').hide(500);
	});

});
	
//language
$(function() {
	$('.ua-button').on('click', function() {
		$('.ua').fadeIn();
		$('.ru').hide().fadeOut();
		$('.en').hide().fadeOut();
	});
  $('.ru-button').on('click', function() {
		$('.ua').hide().fadeOut();
		$('.ru').fadeIn();
		$('.en').hide().fadeOut();
	});
    $('.en-button').on('click', function() {
		$('.ua').hide().fadeOut();
		$('.ru').hide().fadeOut();
		$('.en').fadeIn();
	});
});



		// $('.row').removeClass('animated fadeInTop').addClass('animated fadeOutDown');
		// $('.row').delay(1000);
		// $('.row').fadeOut().css({'display': 'none'});

		// $('.row').css({'position': 'fixed'});

		// $('.row').addClass('animated fadeOutDown');
		// $('.row').delay(500);
		// $('.row').hide();


