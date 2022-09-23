package com.example.demo.dto;

public class DateValidateDTO {
	private int pid;
	private String from_date;
	private String till_date;
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getFrom_date() {
		return from_date;
	}
	public void setFrom_date(String from_date) {
		this.from_date = from_date;
	}
	public String getTill_date() {
		return till_date;
	}
	public void setTill_date(String till_date) {
		this.till_date = till_date;
	}	
}
