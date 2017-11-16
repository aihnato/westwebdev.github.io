$(document).ready(function(){
	$(".navbar-li").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body, html').animate({scrollTop: top}, 1000);
	});
});

// $(document).ready(function(){
// 	$(".navbar-link").on("click", function (event) {
// 		// $(this).prev()[0].click();
// 		document.location.href = $(this).prev().attr('https://www.facebook.com')

// 	});

// });




$(".navbar-collapse a").click(function() {
     $(".navbar-collapse").collapse('hide');
 });

//arrow-down
$(document).scroll(function(){

	if($(window).scrollTop()>=50){

$('.arr-down').fadeOut(500);
		
		}
	else{
$('.arr-down').fadeIn(500);
		
	}
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


$(function(){
  $('#slider').height($(window).height());

  $(window).resize(function(){
    $('#slider').height($(window).height());
  });
});



$(document).ready(function(){
	var h = $(window).height();
	
	$(window).scroll(function(){
		if ( ($(this).scrollTop()+h) >= $(".course ").offset().top) {
			$(".course ").addClass('animated fadeInDown');
		} 
		if ( ($(this).scrollTop()+h) >= $(".pricing").offset().top) {
			$(".pricing-slot").addClass('animated rotateInDownLeft');
		} 
		if ( ($(this).scrollTop()+h) >= $(".fancybox-button").offset().top) {
			$(".fancybox-button").addClass('animated slideInDown');
		} 
		if ( ($(this).scrollTop()+h) >= $(".contact").offset().top) {
			$(".contact-form").addClass('animated fadeInRight');
		}
	});
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0JChcIi5uYXZiYXItbGlcIikub24oXCJjbGlja1wiLFwiYVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdC8v0L7RgtC80LXQvdGP0LXQvCDRgdGC0LDQvdC00LDRgNGC0L3Rg9GOINC+0LHRgNCw0LHQvtGC0LrRgyDQvdCw0LbQsNGC0LjRjyDQv9C+INGB0YHRi9C70LrQtVxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHQvL9C30LDQsdC40YDQsNC10Lwg0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LHQvtC60LAg0YEg0LDRgtGA0LjQsdGD0YLQsCBocmVmXHJcblx0XHR2YXIgaWQgID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcblxyXG5cdFx0Ly/Rg9C30L3QsNC10Lwg0LLRi9GB0L7RgtGDINC+0YIg0L3QsNGH0LDQu9CwINGB0YLRgNCw0L3QuNGG0Ysg0LTQviDQsdC70L7QutCwINC90LAg0LrQvtGC0L7RgNGL0Lkg0YHRgdGL0LvQsNC10YLRgdGPINGP0LrQvtGA0YxcclxuXHRcdFx0dG9wID0gJChpZCkub2Zmc2V0KCkudG9wO1xyXG5cdFx0XHJcblx0XHQvL9Cw0L3QuNC80LjRgNGD0LXQvCDQv9C10YDQtdGF0L7QtCDQvdCwINGA0LDRgdGB0YLQvtGP0L3QuNC1IC0gdG9wINC30LAgMTUwMCDQvNGBXHJcblx0XHQkKCdib2R5LCBodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3B9LCAxMDAwKTtcclxuXHR9KTtcclxufSk7XHJcblxyXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4vLyBcdCQoXCIubmF2YmFyLWxpbmtcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuLy8gXHRcdC8vICQodGhpcykucHJldigpWzBdLmNsaWNrKCk7XHJcbi8vIFx0XHRkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gJCh0aGlzKS5wcmV2KCkuYXR0cignaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tJylcclxuXHJcbi8vIFx0fSk7XHJcblxyXG4vLyB9KTtcclxuXHJcblxyXG5cclxuXHJcbiQoXCIubmF2YmFyLWNvbGxhcHNlIGFcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgJChcIi5uYXZiYXItY29sbGFwc2VcIikuY29sbGFwc2UoJ2hpZGUnKTtcclxuIH0pO1xyXG5cclxuLy9hcnJvdy1kb3duXHJcbiQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cclxuXHRpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCk+PTUwKXtcclxuXHJcbiQoJy5hcnItZG93bicpLmZhZGVPdXQoNTAwKTtcclxuXHRcdFxyXG5cdFx0fVxyXG5cdGVsc2V7XHJcbiQoJy5hcnItZG93bicpLmZhZGVJbig1MDApO1xyXG5cdFx0XHJcblx0fVxyXG59KTtcclxuXHJcblxyXG4vLyB1cCBidXR0b24gXHJcbiQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cdGlmKCQod2luZG93KS5zY3JvbGxUb3AoKT49NDAwKXtcclxuXHJcblx0XHQkKCcjdXAnKS5hZGRDbGFzcyhcImFuaW1hdGVkIGZhZGVJblwiKS5yZW1vdmVDbGFzcyhcImZhZGVPdXRcIik7XHJcblx0XHQkKCcjdXAnKS5mYWRlSW4oNTAwKTtcclxuXHRcdH1cclxuXHRlbHNle1xyXG5cclxuXHRcdCQoJyN1cCcpLmFkZENsYXNzKFwiYW5pbWF0ZWQgZmFkZU91dFwiKS5yZW1vdmVDbGFzcyhcImZhZGVJblwiKTtcclxuXHRcdCQoJyN1cCcpLmZhZGVPdXQoNTAwKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAkKCcjc2xpZGVyJykuaGVpZ2h0KCQod2luZG93KS5oZWlnaHQoKSk7XHJcblxyXG4gICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICQoJyNzbGlkZXInKS5oZWlnaHQoJCh3aW5kb3cpLmhlaWdodCgpKTtcclxuICB9KTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0dmFyIGggPSAkKHdpbmRvdykuaGVpZ2h0KCk7XHJcblx0XHJcblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cdFx0aWYgKCAoJCh0aGlzKS5zY3JvbGxUb3AoKStoKSA+PSAkKFwiLmNvdXJzZSBcIikub2Zmc2V0KCkudG9wKSB7XHJcblx0XHRcdCQoXCIuY291cnNlIFwiKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluRG93bicpO1xyXG5cdFx0fSBcclxuXHRcdGlmICggKCQodGhpcykuc2Nyb2xsVG9wKCkraCkgPj0gJChcIi5wcmljaW5nXCIpLm9mZnNldCgpLnRvcCkge1xyXG5cdFx0XHQkKFwiLnByaWNpbmctc2xvdFwiKS5hZGRDbGFzcygnYW5pbWF0ZWQgcm90YXRlSW5Eb3duTGVmdCcpO1xyXG5cdFx0fSBcclxuXHRcdGlmICggKCQodGhpcykuc2Nyb2xsVG9wKCkraCkgPj0gJChcIi5mYW5jeWJveC1idXR0b25cIikub2Zmc2V0KCkudG9wKSB7XHJcblx0XHRcdCQoXCIuZmFuY3lib3gtYnV0dG9uXCIpLmFkZENsYXNzKCdhbmltYXRlZCBzbGlkZUluRG93bicpO1xyXG5cdFx0fSBcclxuXHRcdGlmICggKCQodGhpcykuc2Nyb2xsVG9wKCkraCkgPj0gJChcIi5jb250YWN0XCIpLm9mZnNldCgpLnRvcCkge1xyXG5cdFx0XHQkKFwiLmNvbnRhY3QtZm9ybVwiKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZUluUmlnaHQnKTtcclxuXHRcdH1cclxuXHR9KTtcclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
