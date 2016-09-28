package com.hanbit.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hanbit.web.handlers.ListHandler;
import com.hanbit.web.services.IntegerMath;

@Controller
@RequestMapping("/admin")
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@RequestMapping("/main")
	public String goMain(){
		return "admin:admin/content.tiles";
	}
	@RequestMapping("/header")
	public String adminHeader(){
		logger.info("----- ADMIN_CONTOLLER HEADER PASS -----");
		return "admin/header.jsp";
	}
	@RequestMapping("/nav")
	public String adminNav(){
		logger.info("----- ADMIN_CONTOLLER NAV PASS -----");
		return "admin/nav.jsp";
	}
	
}
