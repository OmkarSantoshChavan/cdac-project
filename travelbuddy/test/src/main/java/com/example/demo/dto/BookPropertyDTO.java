package com.example.demo.dto;

import java.time.LocalDate;

public class BookPropertyDTO {
	private int pid;
	private LocalDate booking_date;
	private LocalDate from_date;
	private LocalDate till_date;
	private int total_amt;
	private int amount;
	private String pmode;
	private String ptype;
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public LocalDate getBooking_date() {
		return booking_date;
	}
	public void setBooking_date(LocalDate booking_date) {
		this.booking_date = booking_date;
	}
	public LocalDate getFrom_date() {
		return from_date;
	}
	public void setFrom_date(LocalDate from_date) {
		this.from_date = from_date;
	}
	public LocalDate getTill_date() {
		return till_date;
	}
	public void setTill_date(LocalDate till_date) {
		this.till_date = till_date;
	}
	public int getTotal_amt() {
		return total_amt;
	}
	public void setTotal_amt(int total_amt) {
		this.total_amt = total_amt;
	}
	public int getAmount() {
		return amount;
	}
	public void setAmount(int amount) {
		this.amount = amount;
	}
	public String getPmode() {
		return pmode;
	}
	public void setPmode(String pmode) {
		this.pmode = pmode;
	}
	public String getPtype() {
		return ptype;
	}
	public void setPtype(String ptype) {
		this.ptype = ptype;
	}
}
