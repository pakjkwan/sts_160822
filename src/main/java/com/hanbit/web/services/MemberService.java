/**
 * 
 */
package com.hanbit.web.services;

import java.util.List;

import org.springframework.stereotype.Component;

import com.hanbit.web.domains.Command;
import com.hanbit.web.domains.MemberDTO;
import com.hanbit.web.domains.Retval;


/**
 * @date   :2016. 6. 17. 
 * @author :pakjkwan@gmail.com
 * @file   :StudentService.java
 * @story  :
*/
@Component
public interface MemberService{
	public String regist(MemberDTO mem);
	public MemberDTO findOne(Command command);
	public String update(MemberDTO member);
	public void delete(MemberDTO member);
	public void logout(MemberDTO member);
	public MemberDTO show();
	public MemberDTO login(MemberDTO member);
	public Retval count();
	public List<?> list(Command command);
	public List<?> find(Command command);
	public int existId(String id);
	
}
