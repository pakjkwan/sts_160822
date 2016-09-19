package com.hanbit.web.util;

public class CommandFactory {
	public Command2 createCommand(String directory,
			String action,String page){
		return new Command2(directory,action,page);
	}
}
