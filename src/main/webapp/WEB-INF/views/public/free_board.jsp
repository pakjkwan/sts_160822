<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<style>
table {font-family: arial, sans-serif;border-collapse: collapse;width: 100%;}


td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even) {
    background-color: #dddddd;
}
</style>
<div class="box" style='padding-top:0;width:90%'>
<ul class="list-group">
  <li class="list-group-item">총게시글 : 120 개</li>
</ul>
		<div class="panel panel-primary">
  <div class="panel-heading">자유 게시판</div>
<table id="free_board_table">
  <tr>
     <th>NO.</th>
	 <th>제목</th>
	 <th>등록일</th>
	 <th>조회수</th>
  </tr>
  <tr>
    <td>12</td>
    <td><a class="name">하이 방가 방가 !!</a></td>
    <td>1999.12.20</td>
    <td>10000</td>
  </tr>
  <tr>
    <td>12</td>
    <td><a class="name">하이 방가 방가 !!</a></td>
    <td>1999.12.20</td>
    <td>10000</td>
  </tr>
   <tr>
    <td>12</td>
    <td><a class="name">하이 방가 방가 !!</a></td>
    <td>1999.12.20</td>
    <td>10000</td>
  </tr>
  
</table>
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li><a href="#">1</a></li>
    <li><a href="#">2</a></li>
    <li><a href="#">3</a></li>
    <li><a href="#">4</a></li>
    <li><a href="#">5</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>
	</div>
<script type="text/javascript">
$(function(){
	$('#free_board_table .name').click(function(){controller.moveWithKey('member','a_detail','hong');});
	$('#free_board_table .regist').click(function(){controller.moveWithKey('grade','regist','hong');});
	$('#free_board_table .update').click(function(){controller.moveWithKey('grade','update','hong');});
});
</script>
