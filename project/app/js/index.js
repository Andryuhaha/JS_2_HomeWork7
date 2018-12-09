$('.burger').on('click', function(){
  if( $(this).is('.expand')){
    $('nav').fadeOut('fast');
    $(this).delay(100).queue(function(){
      $(this).removeClass('expand').dequeue();
    });
  } else{
    $(this).delay(100).queue(function(){
      $(this).addClass('expand').dequeue();
    });
    $('nav').delay(200).fadeIn('fast');
  }
});