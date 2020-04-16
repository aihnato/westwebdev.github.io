$(window).on('load', function() {
  if($('*').is('.iframe-from-youtube') == true){
    var youtubeContainer = $('.iframe-from-youtube');
    
    $.each(youtubeContainer, function(ind, el) {
      var frame = $(el).find('iframe');
      var source = frame.attr('src');
      if(source){
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = source.match(regExp);
        var videoId;
        if ( match && match[7].length == 11 ){
          videoId = match[7];
        }else{
          videoId = '';
        }
        console.log('youtube', videoId);
        
        $(el).attr('data-video-id', videoId);
        
        var url = 'https://img.youtube.com/vi/'+videoId+'/hqdefault.jpg'
        $(el).find('iframe').remove();
        
        if($(el).find('.videoBg').length == 0){
          $(el).prepend('<div class="videoBg"></div>');
          $(el).prepend('<div id="'+videoId+'"></div>');
          $(el).children('.videoBg').css({'background-image': 'url('+url+')', 'opacity': '1'});
        }
      }
    });
  }
});

