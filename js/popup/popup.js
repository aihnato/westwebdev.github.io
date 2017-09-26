

function OffScroll() {
  var winScrollTop = $(window).scrollTop();
  $(window).bind('scroll', function() {
    $(window).scrollTop(winScrollTop);
  });
};




// =========================================================================  go_order
$(function() {
	//фкнкция вызова формы обратной связи
	$('#slick-popup').on('click', function() {
		//появление окна 
        $('#popup').fadeIn();
        $('#popup').css({'display' : 'flex'});
        q_width = $('#popup').outerWidth()/-2;
        q_height = $('#popup').outerHeight()/-2;
		//выводим затемение страницы и делаем полупрозрачным
        $('#fade-popup').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
        //убераем прокрутку
        OffScroll();
        return false;
    });

	//функция закрытия окна
	$('#fade-popup').on('click', function() {
		$('#fade-popup').fadeOut();	
        $('.popup').fadeOut();
        //востанавливаем прокрутку
        $(window).unbind('scroll');
		// });
	});

    $('#slick-popup2').on('click', function() {
        //появление окна 
        // $('.popup').addClass('flex');
        $('#popup2').fadeIn();
         $('#popup2').css({'display' : 'flex'});
       
        q_width = $('#popup2').outerWidth()/-2;
        q_height = $('#popup2').outerHeight()/-2;
        //выводим затемение страницы и делаем полупрозрачным
        $('#fade-popup').fadeIn();
        //убераем прокрутку
        OffScroll();
        return false;
    });

        $('#slick-popup3').on('click', function() {
        //появление окна 
        // $('.popup').addClass('flex');
        $('#popup3').fadeIn();
        $('#popup3').css({'display' : 'flex'});
        q_width = $('#popup3').outerWidth()/-2;
        q_height = $('#popup3').outerHeight()/-2;
        //выводим затемение страницы и делаем полупрозрачным
        $('#fade-popup').fadeIn();
        //убераем прокрутку
        OffScroll();
        return false;
    });
    $('#slick-popup4').on('click', function() {
        //появление окна 
        // $('.popup').addClass('flex');
        $('#popup4').fadeIn();
        $('#popup4').css({'display' : 'flex'});
        
        q_width = $('#popup4').outerWidth()/-2;
        q_height = $('#popup4').outerHeight()/-2;
        //выводим затемение страницы и делаем полупрозрачным
        $('#fade-popup').fadeIn();
        //убераем прокрутку
        OffScroll();
        return false;
    });
    $('#slick-popup5').on('click', function() {
        //появление окна 
        // $('.popup').addClass('flex');
        $('#popup5').fadeIn();
        $('#popup5').css({'display' : 'flex'});
        
        q_width = $('#popup5').outerWidth()/-2;
        q_height = $('#popup5').outerHeight()/-2;
        //выводим затемение страницы и делаем полупрозрачным
        $('#fade-popup').fadeIn();
        //убераем прокрутку
        OffScroll();
        return false;
    });
});


$(function() {
    //фкнкция вызова формы обратной связи
    $('#about').on('click', function() {
        //появление окна 
        $('#popup-about').fadeIn();
        // $('#popup-about').show().fadeIn().addClass('animated fadeInUp');
        // $('#popup').css({'display' : 'flex'});
        q_width = $('#popup-about').outerWidth()/-2;
        q_height = $('#popup-about').outerHeight()/-2;
        //выводим затемение страницы и делаем полупрозрачным
        $('#fade-popup').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
        //убераем прокрутку
        OffScroll();
        return false;
    });

    //функция закрытия окна
    $('#fade-popup').on('click', function() {
        $('#fade-popup').fadeOut(); 
        $('.popup').fadeOut();
        // $('#popup-about')hide().removeClass('fadeInUp').addClass('fadeOutDown');

        //востанавливаем прокрутку
        $(window).unbind('scroll');
        // });
    });

    $('#gallery').on('click', function() {
        //появление окна 
        // $('.popup').addClass('flex');
        $('#popup-gallery').fadeIn();
         // $('#popup2').css({'display' : 'flex'});
       
        q_width = $('#popup-gallery').outerWidth()/-2;
        q_height = $('#popup-gallery').outerHeight()/-2;
        //выводим затемение страницы и делаем полупрозрачным
        $('#fade-popup').fadeIn();
        //убераем прокрутку
        OffScroll();
        return false;
    });
});