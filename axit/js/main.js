$(document).ready(function(){
	$(".navbar").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});



$(".navbar-collapse a").click(function() {
    $(".navbar-collapse").collapse('hide');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0JChcIi5uYXZiYXJcIikub24oXCJjbGlja1wiLFwiYVwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdC8v0L7RgtC80LXQvdGP0LXQvCDRgdGC0LDQvdC00LDRgNGC0L3Rg9GOINC+0LHRgNCw0LHQvtGC0LrRgyDQvdCw0LbQsNGC0LjRjyDQv9C+INGB0YHRi9C70LrQtVxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHQvL9C30LDQsdC40YDQsNC10Lwg0LjQtNC10L3RgtC40YTQuNC60LDRgtC+0YAg0LHQvtC60LAg0YEg0LDRgtGA0LjQsdGD0YLQsCBocmVmXHJcblx0XHR2YXIgaWQgID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcblxyXG5cdFx0Ly/Rg9C30L3QsNC10Lwg0LLRi9GB0L7RgtGDINC+0YIg0L3QsNGH0LDQu9CwINGB0YLRgNCw0L3QuNGG0Ysg0LTQviDQsdC70L7QutCwINC90LAg0LrQvtGC0L7RgNGL0Lkg0YHRgdGL0LvQsNC10YLRgdGPINGP0LrQvtGA0YxcclxuXHRcdFx0dG9wID0gJChpZCkub2Zmc2V0KCkudG9wO1xyXG5cdFx0XHJcblx0XHQvL9Cw0L3QuNC80LjRgNGD0LXQvCDQv9C10YDQtdGF0L7QtCDQvdCwINGA0LDRgdGB0YLQvtGP0L3QuNC1IC0gdG9wINC30LAgMTUwMCDQvNGBXHJcblx0XHQkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHRvcH0sIDE1MDApO1xyXG5cdH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuJChcIi5uYXZiYXItY29sbGFwc2UgYVwiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoXCIubmF2YmFyLWNvbGxhcHNlXCIpLmNvbGxhcHNlKCdoaWRlJyk7XHJcbn0pOyJdLCJmaWxlIjoibWFpbi5qcyJ9
