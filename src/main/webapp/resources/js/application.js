// var application = (function(){})();  IIFE 패턴
var app = (function(){
	var init = function(context) {
		sessionStorage.setItem('context',context);
		go_home();
	};
	var context = function(){
		return sessionStorage.getItem('context');
	};
	var to_douglas = function() {
		location.href=context()+"/douglas.do";
	};
	var go_home = function(){
		$('#title').click(function(){
			location.href=context()+"/";
		});
		
	}
	return {
		init : init,
		to_douglas : to_douglas,
		go_home : go_home,
		context : context
	}
})();


