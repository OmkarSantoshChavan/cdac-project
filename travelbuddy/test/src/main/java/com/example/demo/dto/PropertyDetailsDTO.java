package com.example.demo.dto;

import java.util.List;

import com.example.demo.pojos.Facilities;

public interface PropertyDetailsDTO {
	int getPid();
	String getAddress();
	String getRent();
	String getDescription();
   List <AreaInfo> getAreaData();
    interface AreaInfo{
    	 String getArea_name();
    	 String getCity();
    	 String getPincode();
    }
    List<Facilities> getFacilityList();
     interface FacilityInfo{
    	 String getFurnished();
    	 String getParking();
    	 String getSecurity_guard();
    	 String getLift();
    	 String getCctv();
     }
}
