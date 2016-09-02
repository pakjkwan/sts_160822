<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<jsp:include page="slider.jsp"/>
<section id="global_content" >
	<a id="global_content_a_regist" ></a> <br />
	<a id="global_content_a_login" ></a><br />
	<a id="global_content_a_admin" ></a> 
</section>
<script>
$(function(){
	$('#test').click(function(){controller.move('public','slider');});
});
</script>
