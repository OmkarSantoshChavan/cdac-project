package com.example.demo.dto;

import com.example.demo.pojos.PropertyDetails;

public interface BookingDetailsDTO {
	int getBid();
	String getBooking_date();
	String getFrom_date();
	String getTill_date();
	PropertyDetails getPropertyData();
	interface propInfo{
		int getPid();
		String getAddress();
	}
	
}
