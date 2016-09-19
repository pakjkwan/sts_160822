package com.hanbit.web.services.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hanbit.web.domains.GradeDTO;
import com.hanbit.web.services.GradeService;
@Service
@Transactional
public class GradeServiceImpl implements GradeService {
	@Override
	public int insert(GradeDTO grade) {
		return 0;
	}

	@Override
	public void update(GradeDTO grade) {
		
	}
	@Override
	public String delete(String del) {
		String msg = "";
		return msg;
	}
	@Override
	public GradeDTO findBySeq(String seq) {
		return null;
	}
	@Override
	public int count(String examDate) {
		return 0;
	}
	@Override
	public void score(String[] a) {
		GradeDTO g = new GradeDTO();
		g.setId(a[0]);
		
		this.insert(g);
	}

}
