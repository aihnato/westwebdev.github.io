$(document).ready(function(){
	$("#header, .navbar, navbar-header, .sl-slider ").on("click","a", function (event) {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0JChcIiNoZWFkZXIsIC5uYXZiYXIsIG5hdmJhci1oZWFkZXIsIC5zbC1zbGlkZXIgXCIpLm9uKFwiY2xpY2tcIixcImFcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcblx0XHQvL9C+0YLQvNC10L3Rj9C10Lwg0YHRgtCw0L3QtNCw0YDRgtC90YPRjiDQvtCx0YDQsNCx0L7RgtC60YMg0L3QsNC20LDRgtC40Y8g0L/QviDRgdGB0YvQu9C60LVcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0Ly/Qt9Cw0LHQuNGA0LDQtdC8INC40LTQtdC90YLQuNGE0LjQutCw0YLQvtGAINCx0L7QutCwINGBINCw0YLRgNC40LHRg9GC0LAgaHJlZlxyXG5cdFx0dmFyIGlkICA9ICQodGhpcykuYXR0cignaHJlZicpLFxyXG5cclxuXHRcdC8v0YPQt9C90LDQtdC8INCy0YvRgdC+0YLRgyDQvtGCINC90LDRh9Cw0LvQsCDRgdGC0YDQsNC90LjRhtGLINC00L4g0LHQu9C+0LrQsCDQvdCwINC60L7RgtC+0YDRi9C5INGB0YHRi9C70LDQtdGC0YHRjyDRj9C60L7RgNGMXHJcblx0XHRcdHRvcCA9ICQoaWQpLm9mZnNldCgpLnRvcDtcclxuXHRcdFxyXG5cdFx0Ly/QsNC90LjQvNC40YDRg9C10Lwg0L/QtdGA0LXRhdC+0LQg0L3QsCDRgNCw0YHRgdGC0L7Rj9C90LjQtSAtIHRvcCDQt9CwIDE1MDAg0LzRgVxyXG5cdFx0JCgnYm9keSxodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiB0b3B9LCAxMDAwKTtcclxuXHR9KTtcclxufSk7XHJcblxyXG5cclxuXHJcbiQoXCIubmF2YmFyLWNvbGxhcHNlIGFcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAgJChcIi5uYXZiYXItY29sbGFwc2VcIikuY29sbGFwc2UoJ2hpZGUnKTtcclxuIH0pO1xyXG5cclxuLy9hcnJvdy1kb3duXHJcbiQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cclxuXHRpZigkKHdpbmRvdykuc2Nyb2xsVG9wKCk+PTUwKXtcclxuXHJcbiQoJy5hcnItZG93bicpLmZhZGVPdXQoNTAwKTtcclxuXHRcdFxyXG5cdFx0fVxyXG5cdGVsc2V7XHJcbiQoJy5hcnItZG93bicpLmZhZGVJbig1MDApO1xyXG5cdFx0XHJcblx0fVxyXG59KTtcclxuXHJcblxyXG4vLyB1cCBidXR0b24gXHJcbiQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpe1xyXG5cdGlmKCQod2luZG93KS5zY3JvbGxUb3AoKT49NDAwKXtcclxuXHJcblx0XHQkKCcjdXAnKS5hZGRDbGFzcyhcImFuaW1hdGVkIGZhZGVJblwiKS5yZW1vdmVDbGFzcyhcImZhZGVPdXRcIik7XHJcblx0XHQkKCcjdXAnKS5mYWRlSW4oNTAwKTtcclxuXHRcdH1cclxuXHRlbHNle1xyXG5cclxuXHRcdCQoJyN1cCcpLmFkZENsYXNzKFwiYW5pbWF0ZWQgZmFkZU91dFwiKS5yZW1vdmVDbGFzcyhcImZhZGVJblwiKTtcclxuXHRcdCQoJyN1cCcpLmZhZGVPdXQoNTAwKTtcclxuXHR9XHJcbn0pO1xyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAkKCcjc2xpZGVyJykuaGVpZ2h0KCQod2luZG93KS5oZWlnaHQoKSk7XHJcblxyXG4gICQod2luZG93KS5yZXNpemUoZnVuY3Rpb24oKXtcclxuICAgICQoJyNzbGlkZXInKS5oZWlnaHQoJCh3aW5kb3cpLmhlaWdodCgpKTtcclxuICB9KTtcclxufSk7Il0sImZpbGUiOiJtYWluLmpzIn0=
