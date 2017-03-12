$(document).ready(function(){
  $('.container>ul>li').on('mouseover',function(){
    $('.second').css('display','none');
    console.log(1); 
    $(this).find('.second').css('display','block');
  });

  $('.container>ul>li').on('mouseleave',function(){


    $(this).find('.second').css('display','none');
  });  
});