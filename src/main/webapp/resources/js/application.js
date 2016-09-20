/*
========= META_GROUP ====
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2016-9-8
@UPDATE DATE : 2016-9-9
@DESC : 메타데이터
==============================
*/	
var app = (function(){
	var init = function(context) {
		session.init(context);
		onCreate();
		member.init();
		user.init();
		account.init();
		kaup.init();
		grade.init();
		nav.init();
		admin.init();
	};
	var context = function(){return session.getContextPath();};
	var js = function(){return session.getJavascriptPath('js');};
	var css = function(){return session.getCssPath('css');};
	var img = function(){return session.getImagePath('img');};
	var setContentView = function(){
		$('#header_brand').attr('src',app.img()+'/default/hanbit.jpg').css('height','80px').css('width','100px').css('padding-bottom','20px');
		$('#footer').addClass('bottom').addClass('footer');
		$('#global_content').addClass('box');
		$('#global_content a').addClass('cursor');
		$('#global_content_a_regist').text('SIGN UP').click(function(){controller.move('member','regist');});
		$('#global_content_a_login').text('LOG IN').click(function(){controller.move('member','login');});
		$('#global_content_a_admin').text('ADMIN MODE').click(function(){admin.check();});
	};
	var onCreate = function(){
		setContentView();
		$('#a_member').click(function(){controller.move('member','main');});
		$('#a_grade').click(function(){controller.move('grade','main');});
		$('#a_account').click(function(){controller.move('account','main');});
		$('#a_shool').click(function(){controller.move('global','school_info');});
		$('#free_board_table .name').click(function(){controller.moveWithKey('member','a_detail','hong');});
		$('#free_board_table .regist').click(function(){controller.moveWithKey('grade','regist','hong');});
		$('#free_board_table .update').click(function(){controller.moveWithKey('grade','update','hong');});
		$('#go_public_home').click(function(){controller.home()});
		$('#school_info').click(function(){controller.move('public','school_info');});
		$('#contact').click(function(){controller.move('public','contact');});
		$('#free_board').click(function(){controller.move('public','free_board');});
		$('#user_content #kaup').addClass('cursor').click(function(){controller.move('member','kaup');});
		$('#user_content #rock_sissor_paper').addClass('cursor').click(function(){controller.move('member','rock_sissor_paper');});
		$('#user_content #lotto').addClass('cursor').click(function(){controller.move('member','lotto');});
		var key = $('#user_content_subject #major_subject_1 input[type="hidden"]').val();
		$('#user_content_subject #major_subject_1 input[type="button"]').click(function(){alert('************');controller.moveWithKey('subject','detail',key)});
		$('#user_content_subject #major_subject_2').click(function(){});
		$('#user_content_subject #major_subject_3').click(function(){});
	};
	
	return {
		init : init,
		onCreate : onCreate,
		setContentView : setContentView,
		context : context,
		img : img,
		js : js,
		css : css
	}
})();
var session = (function(){
	var init = function(context){
		sessionStorage.setItem('context',context);
		sessionStorage.setItem('js',context+'/resources/js');
		sessionStorage.setItem('css',context+'/resources/css');
		sessionStorage.setItem('img',context+'/resources/img');
	};
	var getContextPath = function(){return sessionStorage.getItem('context');};
	var getJavascriptPath = function(){return sessionStorage.getItem('js');};
	var getCssPath = function(){return sessionStorage.getItem('js');};
	var getImagePath = function(){return sessionStorage.getItem('img');};
	return {
		init : init,
		getContextPath : getContextPath,
		getJavascriptPath : getJavascriptPath,
		getCssPath : getCssPath,
		getImagePath : getImagePath
	};
	
})();
var controller = (function(){
	var _page,_directory,_key;
	var setPage=function(page){this._page=page;};
	var setDirectory=function(directory){this._directory=directory;};
	var setKey=function(key){this._key=key;};
	var getPage = function(){return this._page;};
	var getDirectory = function(){return this._directory;};
	var getKey = function(){return this._key;};
	return {
		setPage : setPage,
		getPage : getPage,
		setDirectory : setDirectory,
		getDirectory : getDirectory,
		setKey : setKey,
		getKey : getKey,
		moveWithKey : function(directory,page,key){
			setDirectory(directory);
			setPage(page);
			setKey(key);
			location.href = app.context()+'/'+getDirectory()+'/'+getPage()+'?key='+getKey();
		},
		move : function(directory,page){
			setDirectory(directory);
			setPage(page);
			location.href = app.context()+'/'+getDirectory()+'/'+getPage();
		},
		home : function(){location.href=app.context()+'/'}
	};
})();
var util = (function(){
	return {
		isNumber : function(value){
			return typeof value === 'number' && isFinite(value);
		}
	};
})();
var nav = (function(){
	var init = function(){onCreate();};
	var setContentView = function(){
		$('#nav ul').addClass('list_style_none').addClass('over_hidden').addClass('bg_color_black')
		.css('margin','0').css('padding','0');
		$('#nav li').addClass('float_left').addClass('display_inline')
		.css('border-right','1px').css('solid','#bbb');
		$('#nav li:last-child').css('border-right','none');
		$('#nav li a').addClass('display_block').addClass('font_color_white').addClass('text_center').addClass('text_deco_none')
		.css('padding','14px 16px')
		$('#nav li a:hover:not(.active)').addClass('bg_color_green')
		$('#nav .active').addClass('bg_color_black');
	};
	var onCreate = function(){
		setContentView();
	};
	return {
		init : init
	};
})();
/*
============ MAJOR_JS =====
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2016-9-8
@UPDATE DATE : 2016-9-9
@DESC : 전공
==============================
*/
var major = (function(){})();
/*
========= PROF_JS =======
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2016-9-8
@UPDATE DATE : 2016-9-9
@DESC : 교수
==============================
*/
var member = (function(){
	var _age,_gender,_name,_ssn;
	var setAge = function(age){this._age=age;}
	var setGender = function(gender){this._gender=gender;}
	var setSSN = function(ssn){this._ssn=ssn;}
	var setName = function(name){this._name=name;}
	var getAge = function(){return this._age;}
	var getSSN = function(){return this._ssn;}
	var getName = function(){return this._name;}
	var getGender = function(){return this._gender;}
	var init = function(){onCreate()};
	var setContentView = function(){
		$('#member_content_img_home').attr('src',app.img()+'/home.png').css('width','30px');
		$('#member_content_a_home').attr('alt','home').click(function(){controller.home();});
		$('#member_content').addClass('box').css('font-size','20px');
		$('#member_content > article').css('width','300px').addClass('center').addClass('text_left');
		$('#member_content a').css('font-size','15px').addClass('cursor');
		$('#member_content > h1').text('MEMBER MGMT');
		$('#member_content_ol > li > a').addClass('remove_underline');
		$('#member_content_ol > li:first > a').text('SIGN UP');
		$('#member_content_ol > li:nth(1) > a').text('DETAIL');
		$('#member_content_ol > li:nth(2) > a').text('UPDATE');
		$('#member_content_ol > li:nth(3) > a').text('DELETE');
		$('#member_content_ol > li:nth(4) > a').text('LOG IN');
		$('#member_content_ol > li:nth(5) > a').text('LOG OUT');
		$('#member_content_ol > li:nth(6) > a').text('LIST');
		$('#member_content_ol > li:nth(7) > a').text('SEARCH');
		$('#member_content_ol > li:nth(8) > a').text('COUNT');
		$('#member_regist').addClass('box');
		$('#member_regist #bt_join').addClass('btn').addClass(' btn-primary');
		$('#member_regist #bt_cancel').addClass('btn').addClass(' btn-danger');
		$('#member_regist_form').addClass('form-horizontal');
		$('#member_regist_form > div').addClass('form-group').addClass('form-group-lg');
		$('#member_regist_form > div > label').addClass('col-sm-2').addClass('control-label');
		$('#member_regist_form > div > div').addClass('col-sm-10');
		$('#member_regist_form > div > div > input').addClass('form-control');
		$('#member_regist #rd_major > label:gt(1)').addClass('radio-inline');
		$('#member_regist #ck_subject').addClass('checkbox');
		$('#member_regist #ck_subject > label').addClass('checkbox-inline');
		$('#member_find_form').attr('action',app.context()+'/member/search');
		$('#member_find_form input[type="hidden"]').attr('name','context').attr('value',app.context());
		$('#member_detail img').attr('src',app.img()+'/member/hong.jpg').css('width','104px').css('height','142px');
		$('#member_login_form').attr('method','post').attr('action',app.context()+'/member/login');
		$('#member_login_form input[type="hidden"]').attr('value',app.context());
	};
	var onCreate = function(){
		setContentView();
		$('#regist').click(function(){controller.move('member','regist');});
		$('#detail').click(function(){controller.move('member','detail');});
		$('#update').click(function(){controller.move('member','update');});
		$('#delete').click(function(){controller.move('member','delete');});
		$('#login').click(function(){controller.move('member','login');});
		$('#logout').click(function(){controller.move('member','logout');});
		$('#list').click(function(){controller.move('member','list');});
		$('#find_by').click(function(){controller.move('member','find_by');});
		$('#count').click(function(){controller.move('member','count');});
		$('#member_find_form input[type="submit"]').click(function(){$('#member_find_form').submit();});
		$('#member_list_table .name').click(function(){controller.moveWithKey('member','a_detail','hong');});
		$('#member_list_table .regist').click(function(){controller.moveWithKey('grade','regist','hong');});
		$('#member_list_table .update').click(function(){controller.moveWithKey('grade','update','hong');});
		$('#member_list_table .name').click(function(){controller.moveWithKey('member','a_detail','hong');});
		$('#member_list_table .regist').click(function(){controller.moveWithKey('grade','regist','hong');});
		$('#member_list_table .update').click(function(){controller.moveWithKey('grade','update','hong');});
		
		$('#member_login_form input[type="submit"]').click(function() {$('#member_login_form').submit();});
	};
	return {
		setSSN : setSSN,
		setName : setName,
		setAge : setAge,
		setGender : setGender,
		getName : getName,
		getAge : getAge,
		getSSN : getSSN,
		getGender : getGender,
		init : init,
		spec : function (){
			
		}
		
	};	
})();
/*
============ STUDENT_JS ==========
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2016-8-1
@UPDATE DATE : 2016-9-20
@DESC : 학생
==================================
*/
var user = (function(){
	var init = function(){onCreate();};
	var setContentView = function(){
		$('#member_content_img_home').attr('src',app.img()+'/home.png');
	};
	var onCreate = function(){
		setContentView();
		$('#bt_bom').click(function(){controller.move('','bom');});
		$('#bt_dom').click(function(){controller.move('','dom');});
		$('#bt_kaup').click(function(){controller.move('','kaup');});
		$('#bt_account').click(function(){controller.move('','account');});
		$('#a_regist').click(function(){controller.move('account','regist');});
		$('#a_withdraw').click(function(){controller.move('account','withdraw');});
		$('#a_deposit').click(function(){controller.move('account','deposit');});
		$('#a_list').click(function(){controller.move('account','list');});
		$('#a_update').click(function(){controller.move('account','update');});
		$('#a_count').click(function(){controller.move('account','count');});
		$('#a_search').click(function(){controller.move('account','search');});
		$('#a_delete').click(function(){controller.move('account','delete');});
		$('#go_user_home').click(function(){controller.move('member','content');});
		$('#user_header').css('height','50px');
		$('#user_header #a_mypage').click(function(){controller.move('member','content');});
		$('#user_header #a_detail').click(function(){controller.move('member','detail');});
		$('#user_header #a_update').click(function(){controller.move('member','update');});
		$('#user_header #a_delete').click(function(){controller.move('member','delete');});
		$('.navbar-header').css('height','50px');
		$('#user_header #logout').addClass('cursor').click(function() {controller.home();});
		$("#user_header #account li:eq(0) a").click(function(){controller.move('account','detail');});
		$("#user_header #account li:eq(1) a").click(function(){controller.move('account','open');});
		$("#user_header #account li:eq(2) a").click(function(){controller.move('account','transaction');});
		$("#user_header #account li:eq(3) a").click(function(){controller.move('account','delete');});
		$("#user_header #grade li:eq(0) a").click(function(){controller.move('grade','detail');});
		$("#user_header #grade li:eq(1) a").click(function(){controller.move('grade','find');});
	};
	return {
		init : init
	};
})();
/*
============ ADMIN_JS ==========
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2016-8-1
@UPDATE DATE : 2016-9-20
@DESC : 관리자
==================================
*/
var admin = (function() {
	var _pass;
    var	getPass = function(){return this._pass;};
    var setPass = function(pass){this._pass=pass;};
    var init = function(){onCreate();};
    var setContentView = function(){
    	$('#admin_content #img_1').attr('src',app.img()+'/member_mgmt.PNG');
    	$('#admin_content #img_2').attr('src',app.img()+'/grade_mgmt.PNG');
    	$('#admin_content #img_3').attr('src',app.img()+'/account_mgmt.PNG');
    	$('#admin_content h3').addClass('text_center');
    	$('#admin_content #img_1').attr('src',app.img()+'/default/member_mgmt.PNG');
    	$('#admin_content #img_2').attr('src',app.img()+'/default/grade_mgmt.PNG');
    	$('#admin_content #img_3').attr('src',app.img()+'/default/account_mgmt.PNG');
    	$('#admin_header').css('height','50px');
    	$('.navbar-header').css('height','50px');
    	$('#admin_header #exit').addClass('cursor');
    	$('#admin_nav').css('height','50px');
    };
    var onCreate = function(){
    	setContentView();
    	$('#admin_nav #member_mgmt #list').click(function(){controller.move('member','list');});
    	$('#admin_nav #member_mgmt #find_by').click(function(){controller.move('member','find');});
    	$('#admin_nav #member_mgmt #count').click(function(){controller.move('member','count');});
    	$('#admin_nav #account_mgmt #list').click(function(){controller.move('account','list');});
    	$('#admin_nav #account_mgmt #open').click(function(){controller.move('account','open');});
    	$('#admin_nav #account_mgmt #delete').click(function(){controller.move('account','delete');});
    	$('#admin_nav #account_mgmt #find').click(function(){controller.move('account','find');});
    	$('#admin_nav #account_mgmt #count').click(function(){controller.move('account','count');});
    	$('#admin_header #exit').click(function() {controller.home();});
    	$('#go_admin_home').click(function() {controller.move('admin','main');});
    };
    return {
    	getPass : getPass,
    	setPass : setPass,
    	init : init,
    	check : function() {
    		setPass(1);
			var isAdmin = confirm('관리자입니까?');
			if (!isAdmin) {
				alert('관리자만 접근 가능합니다.');
			} else {
				var password = prompt('관리자 비번을 입력바랍니다');
				if(password == getPass()){
					controller.move('admin','main');
				}else{
					alert('관리자 비번이 틀립니다.');
				}
			}
		}
    };
})();
/*
=========== SUBJECT_JS =========
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2016-9-8
@UPDATE DATE : 2016-9-9
@DESC : 과목
=============================
*/
var subject = (function(){})();
/*
=========== EXAM_JS =====
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2016-9-8
@UPDATE DATE : 2016-9-9
@DESC : 시험
============================
*/
var exam = (function(){})();
/*
======== GRADE_JS ======
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2016-9-8
@UPDATE DATE : 2016-9-9
@DESC : 성적
============================
*/
var grade = (function(){
	var init = function(){onCreate();};
	var setContentView = function(){
		$('#member_content_img_home').attr('src',app.img()+'/home.png');
		$('#grade_content').addClass('box');
		$('#img_home').css('width','30px');
		$('#grade_content > article').css('width','300px').css('text-align','left').css('margin','0 auto');
		$('#title').css('font-size','40px');
		$('#grade_regist').addClass('box').css('padding-top','0');
		$('#grade_regist #bt_send').addClass('btn').addClass(' btn-primary');
		$('#grade_regist #bt_cancel').addClass('btn').addClass(' btn-danger');
		$('#grade_regist_form').addClass('form-horizontal');
		$('#grade_regist_form > div').addClass('form-group').addClass('form-group-lg');
		$('#grade_regist_form > div > label').addClass('col-sm-2').addClass('control-label');
		$('#grade_regist_form > div > div').addClass('col-sm-10');
		$('#grade_regist_form > div > div > input').addClass('form-control');
		$('#grade_regist #rd_major > label:gt(1)').addClass('radio-inline');
		$('#grade_update').addClass('box').css('padding-top','0');
		$('#grade_update #bt_send').addClass('btn').addClass(' btn-primary');
		$('#grade_update #bt_cancel').addClass('btn').addClass(' btn-danger');
		$('#grade_update_form').addClass('form-horizontal');
		$('#grade_update_form > div').addClass('form-group').addClass('form-group-lg');
		$('#grade_update_form > div > label').addClass('col-sm-2').addClass('control-label');
		$('#grade_update_form > div > div').addClass('col-sm-10');
		$('#grade_update_form > div > div > input').addClass('form-control');
		$('#grade_update #rd_major > label:gt(1)').addClass('radio-inline');
	};
	var onCreate = function(){
		setContentView();
		$('#g_regist').click(function(){controller.move('grade','regist');});
		$('#g_update').click(function(){controller.move('grade','update');});
		$('#g_delete').click(function(){controller.move('grade','delete');});
		$('#g_list').click(function(){controller.move('grade','list');});
		$('#g_count').click(function(){controller.move('grade','count');});
		$('#g_find').click(function(){controller.move('grade','find');});
		$('#a_regist').click(function() {location.href = "${context}/grade/regist.do";});
		$('#a_update').click(function() {location.href ="${context}/grade/update.do";});
		$('#a_delete').click(function() {location.href = "${context}/grade/delete.do";});
		$('#a_list').click(function() {location.href = "${context}/grade/list.do";});
		$('#a_count').click(function() {location.href = "${context}/grade/count.do";});
		$('#a_find').click(function() {location.href = "${context}/grade/search.do";});
		
	};
	return {
		init : init,
	};
})();
/*
========== QNA_JS ========
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2016-9-8
@UPDATE DATE : 2016-9-9
@DESC : QNA
=============================
*/
var qna = (function(){})();
/*
========= NOTICE_JS ======
@AUTHOR : pakjkwan@gmail.com
@CREATE DATE : 2016-9-8
@UPDATE DATE : 2016-9-9
@DESC : 공지사항
=============================
*/
var notice = (function(){})();













