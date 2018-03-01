$(function() {
    $(document).ready(function() {

        //slick-slider init
        $('.single-item').slick({
         // autoplay: true,
         // autoplaySpeed: 2000,
         dots: true,
         infinite: true
        });

        // efw
        $('.side_bar_menu_capt').on('click', function() {
            $('.side_bar_menu_list_item').slideToggle(500);
        });

        $('.about_shop_mobile_btn').on('click', function() {
            $('.about_shop_block_mobile_hide').toggleClass('hide');
        });

    });

    $(document).scroll(function() {
            // $('#nav-menu').fadeOut();
            // $('.side_bar_menu_list_item').slideToggle(500);
            // $('#menu-button').fadeIn();
    });

        $(window).on("resize load", function(){
            var windowWidth = $(window).innerWidth();
            if(windowWidth < 464){
                $('.about_shop_block_mobile_hide').addClass('hide');
            } else{
                $('.about_shop_block_mobile_hide').removeClass('hide');
            }
        });
});