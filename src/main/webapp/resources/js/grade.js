var grade = (function(){
	return {
		init : function(){
			$('#g_regist').click(function(){
				location.href=app.context()+"/grade/regist"});
			$('#g_update').click(function(){location.href=app.context()+"/grade/update"});
			$('#g_delete').click(function(){location.href=app.context()+"/grade/delete"});
			$('#g_list').click(function(){location.href=app.context()+"/grade/list"});
			$('#g_count').click(function(){location.href=app.context()+"/grade/count"});
			$('#g_find').click(function(){location.href=app.context()+"/grade/find"});
			
			$('#member_content_img_home').attr('src',app.img()+'/home.png');
		}
	};
})();
