$(document).ready(function(){

	var products = [
		{
			img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
			name: '珂兰 黄金手 猴哥款',
			price: '￥405.00'
		},{
			img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
			name: '珂兰 黄金转运珠 猴哥款',
			price: '￥100.00'
		},{
			img: 'http://img10.360buyimg.com/N3/jfs/t2242/92/1446546284/374195/9196ac66/56af0958N1a723458.jpg',
			name: '珂兰 黄金手链 3D猴哥款',
			price: '￥45.00'
		}
	];

	function getHtml(obj){
		var html = '';
		html += '<div class="goods">';
		html += '<div class="cover">';
		html += '<button>立即抢购</button>';
		html += '</div>';
		html += '<img src="' + obj.img + '">';
		html += '<div class="good-name">' + obj.name + '</div>';
		html += '<div class="price">' + obj.price + '</div>';
		html += '</div>';
		return html;
	}
	$('.add').on('click',function(){
		$.each(products,function(index,item){
			var html = getHtml(item);
			$('section').append(html);
		});		
	})

});