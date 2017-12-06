


/* Flexslider */
$(window).load(function(){
  try {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
    start: function(slider){
      $('body').removeClass('loading');
    }
  });
  } catch(e) {
	  return;
  }
});

// Basic FitVids Test
$(document).ready(function(){
    // Target your .container, .wrapper, .post, etc.
    $(".video-container").fitVids();
});
