<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<ul id="admin_nav" class="nav nav-tabs" style='height:50px'>
  <li role="presentation" class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
       회원 관리<span class="caret"></span>
    </a>
    <ul id="member_mgmt" class="dropdown-menu">
		<li><a id="list">목 록</a></li>
		<li><a id="find_by">검 색</a></li>
		<li><a id="count">학생수</a></li>
    </ul>
  </li>
  <li role="presentation" class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
      성적 관리 <span class="caret"></span>
    </a>
    <ul id="grade_mgmt" class="dropdown-menu">
      	<li><a href="#" id="g_regist">등록</a></li>
		<li><a href="#" id="g_update">수정</a></li>
		<li><a href="#" id="g_delete">삭제</a></li>
		<li><a href="#" id="g_list">목록 </a></li>
		<li><a href="#" id="g_count">카운트</a></li>
		<li><a href="#" id="g_find">검색 </a></li>
    </ul>
  </li>
  <li role="presentation" class="dropdown">
    <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
      계좌 관리 <span class="caret"></span>
    </a>
    <ul id="account_mgmt" class="dropdown-menu">
    	<li><a href="${context}/account/regist.do">개설</a></li>
		<li><a href="${context}/account/deposit.do">입금</a></li>
		<li><a href="${context}/account/withdraw.do">출금</a></li>
		<li><a href="${context}/account/update.do">비번수정 </a></li>
		<li><a href="${context}/account/delete.do">해지</a></li>
		<li><a href="${context}/account/list.do">목록 </a></li>
		<li><a href="${context}/account/search.do">조회 </a></li>
		<li><a href="${context}/account/count.do">통장수</a></li>
    </ul>
  </li>
</ul>
