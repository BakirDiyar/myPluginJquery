(function($){
	$.fn.myfn = function (e) {
		var el =  $(this);
		el.click(function(){
			el.css({background : '#880e79'})
			console.log(el);
		})
	}
}(jQuery));