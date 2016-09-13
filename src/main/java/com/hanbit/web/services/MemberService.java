/**
 * 
 */
package com.hanbit.web.services;

import java.util.List;

import org.springframework.stereotype.Component;

import com.hanbit.web.domains.MemberDTO;


/**
 * @date   :2016. 6. 17. 
 * @author :pakjkwan@gmail.com
 * @file   :StudentService.java
 * @story  :
*/
@Component
public interface MemberService{
	public String regist(MemberDTO mem);
	public MemberDTO findById(String findID);
	public void update(MemberDTO stu2);
	public void delete(MemberDTO member);
	public void logout(MemberDTO member);
	public MemberDTO show();
	public MemberDTO login(MemberDTO member);
	public int count();
	public List<?> list();
	public List<?> findBy(String keyword);
	
}
