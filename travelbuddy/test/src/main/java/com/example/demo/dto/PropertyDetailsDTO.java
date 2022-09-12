package com.example.demo.dto;

import java.util.List;

public interface PropertyDetailsDTO {
	 int getPid();
		String getAddress();
		String getRent();
		String getDescription();
	   List <AreaInfo> getAreadata();
	    interface AreaInfo{
	    	 String getArea_name();
	    }
}
