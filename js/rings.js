$(document).ready(function(){
	$('nav.clearfix li').on('click',function(e){
		e.preventDefault();
		var $this = $(this);
		var index = $this.index();
		console.log(index);
		$this.siblings().removeClass('active');
		$this.addClass('active');
		$this.parents('.merchant').find('section').removeClass('active');
		$this.parents('.merchant').find('section').eq(index).addClass('active');
	});
});