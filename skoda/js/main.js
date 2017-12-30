$(function(){
   $(window).on("load resize", function(){
    var windowWidth = $(document).width();
    if(windowWidth < 1531)
    {
        $('.dropdown_li').addClass('dropdown');
        $('.dropdown_menu').addClass('dropdown-menu');
        // $('.dropdown_menu').width(windowWidth*0.96);

    }
    else
    {
       $('.dropdown_li').removeClass('dropdown');
       $('.dropdown_menu').removeClass('dropdown-menu');
        // $('.dropdown_menu').width(windowWidth*0.4);

    }
    if(windowWidth < 983)
    {
        $('.skoda_jumbotron_section, .skoda_jumbotron_link_pic').height(windowWidth*0.6)
    }   
    else
    {
        $('.skoda_jumbotron_section, .skoda_jumbotron_link_pic').height(500)

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
