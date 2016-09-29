package com.hanbit.web.services.impl;

import java.util.ArrayList;
import java.util.List;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hanbit.web.controllers.MemberController;
import com.hanbit.web.domains.Command;
import com.hanbit.web.domains.MemberDTO;
import com.hanbit.web.domains.Retval;
import com.hanbit.web.mappers.MemberMapper;
import com.hanbit.web.services.MemberService;

@Service
public class MemberServiceImpl implements MemberService{
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired private SqlSession sqlSession;
	@Autowired Command command;
	@Autowired MemberDTO member;
	@Autowired Retval retval;
	@Override
	public String regist(MemberDTO member) {
		return (sqlSession.getMapper(MemberMapper.class).insert(member)==1)?"success": "fail";
	}
	@Override
	public String update(MemberDTO mem) {
		MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
		int result = mapper.update(mem);
		String retval = "";
		if (result == 1) {
			retval = "success";
		}else{
			retval = "fail";
		}
		return retval;
	}
	@Override
	public MemberDTO show() {
		return null;
	}
	@Override
	public void delete(MemberDTO member) {
		MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
		mapper.delete(member);
	}
	@Override
	public Retval count() {
		Retval r = sqlSession.getMapper(MemberMapper.class).count(retval); 
		if(r==null){
			System.out.println("RETVAL 널");
		}else{
			System.out.println("RETVAL 널 아님");
		}
		return r;
	}
	/*@Override
	public MemberDTO findOne(Command command) {
		MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
		return mapper.findOne(command);
	}*/
	@Override
	public List<?> list(Command command) {
		MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
		return mapper.list(command);
	}
	@Override
	public List<?> find(Command command) {
		MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
		return mapper.find(command);
	}
	@Override
	public void logout(MemberDTO member) {
		if (member.getId().equals(member.getId()) 
				&& member.getPw().equals(member.getPw())) {
			member = null;
		}
	}
	@SuppressWarnings("unchecked")
	@Override
	public MemberDTO login(MemberDTO param) {
		logger.info("MemberService login ID is {}",member.getId());
		MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
		List<MemberDTO> list = new ArrayList<MemberDTO>();
		command.setKeyword(member.getId());
		command.setKeyField("mem_id");
		list = (List<MemberDTO>) mapper.find(command);
		String pw = list.get(0).getPw();
		logger.info("MemberService PASSWORD(param) is {}",param.getPw());
		logger.info("MemberService PASSWORD(리스트에 등록된) is {}",pw);
		if(pw.equals(param.getPw())){
			logger.info("MemberService login is {}"," SUCCESS ");
			
			return list.get(0);
		}else{
			logger.info("MemberService login is {}"," FAIL ");
			return list.get(0);
		}
	}
	@Override
	public int existId(String id){
		logger.info("MemberService existId ID is {}",id);
		MemberMapper mapper = sqlSession.getMapper(MemberMapper.class);
		return mapper.existId(id);
	}
}
