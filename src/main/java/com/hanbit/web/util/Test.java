package com.hanbit.web.util;

import org.springframework.beans.factory.annotation.Autowired;

import com.hanbit.web.domains.Command;
import com.hanbit.web.domains.MemberDTO;
import com.hanbit.web.services.impl.MemberServiceImpl;

public class Test {
	@Autowired MemberServiceImpl service;
	public String test(){
		Command c = new Command();
		c.setKeyword("hong");
		MemberDTO m = service.findOne(c);
	   return m.getName();
	}
	public static void main(String[] args) {
		Test t = new Test();
		MemberServiceImpl service = new MemberServiceImpl();
		String data = "홍";
		String member = "이";
		String data333 = member;
		System.out.println(data333);
	}
}
