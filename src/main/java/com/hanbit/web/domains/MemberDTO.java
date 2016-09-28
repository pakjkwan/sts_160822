/**
 * 
 */
package com.hanbit.web.domains;

import java.io.Serializable;

import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @date   :2016. 6. 16. 
 * @author :pakjkwan@gmail.com
 * @file   :Student.java
 * @story  :
*/
@Component
@ToString
@Data
public class MemberDTO implements Serializable{
	private static final long serialVersionUID = 1L;
	@Getter @Setter private String id,pw,name,regDate,gender,ssn,profileImg,email,phone,role;
	@Getter @Setter private int birth;
	

}
