$('.btn').on('click',function(){
	$(this).css({'background-color':'rgba(255,0,0,1)'})
	setTimeout(function(){
		$('.btn').css({'background-color':'rgba(0,0,255,1)'});
	},1000);
	
})

$(window).on('scroll',function(){
	$('.vertical>span').text($(this).scrollTop())
})

$('.bg').on('mouseenter',function(){
	$(this).css({backgroundColor:'red'})
}).on('mouseleave',function(){
	$(this).css({backgroundColor:'white'})
})

$('input').on('focus',function(){
	$(this).css({borderColor:'blue'})

}).on('keyup',function(){
	$(this).val($(this).val().toUpperCase())
	console.log($(this).val())
}).on('blur',function(){
	$(this).css({borderColor:'red'})
})
$('select').on('change',function(){
	$('.salary span').text($('select>option:selected').val())
})

