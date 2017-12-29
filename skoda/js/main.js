$(function(){
 $(window).on("load resize", function(){
    var windowWidth = $(window).width();
    if(windowWidth < 1513)
    {
        $('.dropdown_li').addClass('dropdown');
        $('.dropdown_menu').addClass('dropdown-menu');

    }
    else
    {
     $('.dropdown_li').removeClass('dropdown');
     $('.dropdown_menu').removeClass('dropdown-menu');
 }
    if(windowWidth < 800)
    {
        $('.bottom_menu_dropdown').addClass('dropdown-menu');
    }
    else
    {
     $('.bottom_menu_dropdown').removeClass('dropdown-menu');
 }

});

 $(function() {
    $('.skoda_tools_item').mouseenter(function() {
        $('.hover-overshadow').show();
        $(this).children('.hover-overshadow').hide();
    })
    $('.skoda_tools_item').mouseleave(function() {
        $('.hover-overshadow').hide();
    })
});

});
