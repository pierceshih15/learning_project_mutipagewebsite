$(document).ready(function(){
	// Menu 下拉式選單
	$('.dropdown').click(function(){
		event.preventDefault();
		$('.dropdown').toggleClass('active');
    	$('.dropdown-content').slideToggle();
	});
	// 上滑至Top
	$('.scroll_top').click(function(){ 
		$('html,body').animate({scrollTop:0}, 333);
	});
	// 限制範圍
	$(window).scroll(function() {
		if ( $(this).scrollTop() > 200 ){
			$('.scroll_top').fadeIn(333);
		} else {
			$('.scroll_top').stop().fadeOut(333);
		}
	}).scroll();
});
