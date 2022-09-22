package com.example.demo.dto;

import java.util.List;

import com.example.demo.pojos.Area;
import com.example.demo.pojos.Facilities;
import com.example.demo.pojos.Users;

public interface PropertyDetailsDTO {
	int getPid();
	String getAddress();
	String getRent();
	String getDescription();
	Area getAreaData();
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
//     Users getOwnerData();
//     interface ownerInfo{
//    	 int getUserid();
//    	 String getName();
//     }
}
