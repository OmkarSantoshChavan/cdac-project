package com.example.demo.pojos;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="booking")
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bid;
	@Column
	private LocalDate booking_date;
	@Column
	private LocalDate from_date;
	@Column
	private LocalDate till_date;
	@Column
	private int total_amt;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="userid")
	@JsonIgnoreProperties("prolist")
	private Users userData;
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="pid")
    @JsonIgnoreProperties("facilityList")
	@JsonIgnore
    private PropertyDetails propertyData;
	
	public Booking(LocalDate booking_date, LocalDate from_date, LocalDate till_date, int total_amt) {
		super();
		this.booking_date = booking_date;
		this.from_date = from_date;
		this.till_date = till_date;
		this.total_amt = total_amt;
	}

	public int getBid() {
		return bid;
	}

	public void setBid(int bid) {
		this.bid = bid;
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

	public Users getUserData() {
		return userData;
	}

	public void setUserData(Users userData) {
		this.userData = userData;
	}

	public PropertyDetails getPropertyData() {
		return propertyData;
	}

	public void setPropertyData(PropertyDetails propertyData) {
		this.propertyData = propertyData;
	}

	@Override
	public String toString() {
		return "Booking [bid=" + bid + ", booking_date=" + booking_date + ", from_date=" + from_date + ", till_date="
				+ till_date + ", total_amt=" + total_amt + "]";
	}
		
}
