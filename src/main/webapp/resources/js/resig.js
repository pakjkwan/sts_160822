var grade2 = (function(){ //grade랑 충돌나서 2로 바꿨어염
	return {
		init : function(){
			$('#grade_content').addClass('box');
			$('#img_home').css('width','30px');
			$('#grade_content > article')
			   .css('width','300px')
			   .css('text-align','left')
			   .css('margin','0 auto');
			$('#title').css('font-size','40px');
			$('#a_regist').click(function() {
				location.href = "${context}/grade/regist.do";
			});
			$('#a_update').click(function() {
				location.href ="${context}/grade/update.do";
			});
			$('#a_delete').click(function() {
				location.href = "${context}/grade/delete.do";
			});
			$('#a_list').click(function() {
				location.href = "${context}/grade/list.do";
			});
			$('#a_count').click(function() {
				location.href = "${context}/grade/count.do";
			});
			$('#a_find').click(function() {
				location.href = "${context}/grade/search.do";
			});
		}
	};
})();
