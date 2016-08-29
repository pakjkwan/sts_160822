package com.hanbit.web.util;

import org.springframework.beans.factory.annotation.Autowired;

import com.hanbit.web.member.MemberDAOImpl;
import com.hanbit.web.member.MemberVO;

public class Test {
	public String test(){
		MemberVO m = MemberDAOImpl.getInstance().findById("hong");
	   return m.getName();
	}
	public static void main(String[] args) {
		Test t = new Test();
		System.out.println(t.test());
	}
}
