// ========= (c)2015 :: html & css & jquery coding :: Polyakov - http://polyakov.co.ua  =========

// =========================================================================  contact_form
// $(function() {
// 	//Функция проверяет заполнено ли поле с телефоном
// 	function formValide() {			
// 		var str = $('#contact_form input[name=tel]').val();
// 		str = jQuery.trim(str);                
// 		if(str.length < 5){                
// 			alert ('Введите телефон');			
// 			return false;
// 		}	
// 		return true;
// 	}

// 	//при нажатии на кнопку button нужной формы запускаем функцию обработки данных
// 	$('#contact_form .button').live('click', function() {
// 		if (formValide()) {
// 			//если форма прошла проверку, выводим блок с текстом ожидания
// 			$('#contact_form').before('<h3 id="contact_form_info">Оформление заявки. Подождите...</h3>');
// 			$('#contact_form').hide();
// 			//берем путь php обработчика
// 			order_url = $('#contact_form').attr('action');			
// 			//посылаем асинхронный запрос на сервер и передаем все данные формы
// 			$.post(order_url,{
// 					name: $('#contact_form input[name=name]').val(),
// 					tel: $('#contact_form input[name=tel]').val(),
//                     email: $('#contact_form input[name=email]').val(),
//                     message: $('#contact_form textarea[name=message]').val(),
// 					send: "1"
// 				}, function(data) {
// 					//выводим возврашаемый сервером код html вместо содержимого формы
// 				$('#contact_form').html(data);
// 				$('#contact_form').show();
// 				$('#contact_form_info').remove();
// 			}, "html");			
// 		}
// 		return false;
// 	});
// });


function OffScroll() {
  var winScrollTop = $(window).scrollTop();
  $(window).bind('scroll', function() {
    $(window).scrollTop(winScrollTop);
  });
};


// $(document).ready(function() {
//   $('.open').click(function() {
//     $(window).unbind('scroll');
//   });
// });



// =========================================================================  go_order
$(function() {
	//фкнкция вызова формы обратной связи
	$('#slick-popup').on('click', function() {
		//появление окна 

        // $('body').append('<div id="fade-popup"></div>')

        $('#fade-popup').fadeIn();

        // $('.popup').addClass('flex');

        $('.popup').css({'display' : 'flex'});

        $('#popup').fadeIn();
        q_width = $('#popup').outerWidth()/-2;
        q_height = $('#popup').outerHeight()/-2;
        // $('#popup').css({'margin-left': q_width,'margin-top': q_height});
        
        // $('#popup').css({'margin-left': 'auto'});
        
        // $('#popup').addClass('flex');


		//выводим затемение страницы и делаем полупрозрачным
        // $('body').append('<div id="fade"></div>');
        OffScroll();

        return false;
    });
	//функция закрытия окна
	$('#fade-popup').on('click', function() {
		// $('#fade').fadeOut(function() {
			$('#fade-popup').fadeOut();	
            // $('#fade-popup').hide(); 

            // $('.popup').addClass('animated fadeOut');
            $('.popup').fadeOut();

            $(window).unbind('scroll');

    // $('.page').show();
    // $('header').show();

		// });
	});

	$('#slick-popup2').on('dblclick', function() {
		//появление окна обратной связи
		$('#popup2').fadeIn();
		//добавляем к окну иконку закрытия
        // $('#popup2').append('<a id="popup_close"></a>');
		//расчитываем высоту и ширину всплывающего окна что бы вывести окно прямо по центру экрана
        q_width = $('#popup2').outerWidth()/-2;
        q_height = $('#popup2').outerHeight()/-2;
        $('#popup2').css({
            'margin-left': q_width,
            'margin-top': q_height
        });
        $('.page').hide();

        $('header').hide();

		//выводим затемение страницы и делаем полупрозрачным
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
        return false;
    });

	$('#slick-popup3').on('dblclick', function() {
		//появление окна обратной связи
		$('#popup3').fadeIn();
		//добавляем к окну иконку закрытия
        // $('#popup2').append('<a id="popup_close"></a>');
		//расчитываем высоту и ширину всплывающего окна что бы вывести окно прямо по центру экрана
        q_width = $('#popup3').outerWidth()/-2;
        q_height = $('#popup3').outerHeight()/-2;
        $('#popup3').css({
            'margin-left': q_width,
            'margin-top': q_height
        });
        $('.page').hide();

        $('header').hide();

		//выводим затемение страницы и делаем полупрозрачным
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
        return false;
    });

	$('#slick-popup4').on('dblclick', function() {
		//появление окна обратной связи
		$('#popup4').fadeIn();
		//добавляем к окну иконку закрытия
        // $('#popup2').append('<a id="popup_close"></a>');
		//расчитываем высоту и ширину всплывающего окна что бы вывести окно прямо по центру экрана
        q_width = $('#popup4').outerWidth()/-2;
        q_height = $('#popup4').outerHeight()/-2;
        $('#popup4').css({
            'margin-left': q_width,
            'margin-top': q_height
        });
        $('.page').hide();

        $('header').hide();

		//выводим затемение страницы и делаем полупрозрачным
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
        return false;
    });

	$('#slick-popup5').on('dblclick', function() {
		//появление окна обратной связи
		$('#popup5').fadeIn();
		//добавляем к окну иконку закрытия
        // $('#popup2').append('<a id="popup_close"></a>');
		//расчитываем высоту и ширину всплывающего окна что бы вывести окно прямо по центру экрана
        q_width = $('#popup5').outerWidth()/-2;
        q_height = $('#popup5').outerHeight()/-2;
        $('#popup5').css({
            'margin-left': q_width,
            'margin-top': q_height
        });
        $('.page').hide();

        $('header').hide();

		//выводим затемение страницы и делаем полупрозрачным
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
        return false;
    });

	
	//функция вызова всплывающего окна с видео-блоком
	 // $('#video_btn').on('click', function() {
  //       $('#popup_video').fadeIn();
		// $('#popup_video').append('<a id="popup_video_close"></a>');
  //           $('#popup_video_block').append('<iframe width="580" height="326" src="https://www.youtube.com/embed/wCc2v7izk8w?autoplay=1" frameborder="0" allowfullscreen></iframe>');
  //           q_width = $('#popup').outerWidth()/-2;
  //           q_height = $('#popup').outerHeight()/-2;
  //           $('#popup_video').css({
  //               'margin-left': q_width,
  //               'margin-top': q_height
  //           });
  //           $('body').append('<div id="fade"></div>');
  //           $('#fade').css({'filter' : 'alpha(opacity=40)'}).fadeIn();
  //   });

	// $('body').on('click', '#fade, #popup_video_close', function() {
 //        $('#fade , #popup').fadeOut(function() {
	// 		$('#popup_video_block').empty();
 //            $('#popup_video').fadeOut();
	// 		$('#popup_video_close').remove();
 //            $('#fade').remove();
 //        });
 //    });

});