var slickslider = document.getElementsByClassName('slick-track')[0];

window.onresize = function () {
	// slider.width = window.clientWidth;
	slickslider.height = window.innerHeigth*0.2;
};

window.onresize();
