var account = (function(){
	return {
		init : function(){
			$('#a_regist').click(function(){
				location.href=app.context()+"/account/regist"});
			$('#a_withdraw').click(function(){location.href=app.context()+"/account/withdraw"});
			$('#a_deposit').click(function(){location.href=app.context()+"/account/deposit"});
			$('#a_list').click(function(){location.href=app.context()+"/account/list"});
			$('#a_update').click(function(){location.href=app.context()+"/account/update"});
			$('#a_count').click(function(){location.href=app.context()+"/account/count"});
			$('#a_search').click(function(){location.href=app.context()+"/account/search"});
			$('#a_delete').click(function(){location.href=app.context()+"/account/delete"});
			
			$('#member_content_img_home').attr('src',app.img()+'/home.png');
		}
	};
})();