package com.example.demo.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="payment")
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int pay_id;
	@Column
	private int amount;
	@Column
	private String pmode;
	@Column
	private String ptype;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="bid")
	private Booking bookingData;
	
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Payment(int amount, String pmode, String ptype) {
		super();
		this.amount = amount;
		this.pmode = pmode;
		this.ptype = ptype;
	}

	public int getPay_id() {
		return pay_id;
	}

	public void setPay_id(int pay_id) {
		this.pay_id = pay_id;
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

	public Booking getBookingData() {
		return bookingData;
	}

	public void setBookingData(Booking bookingData) {
		this.bookingData = bookingData;
	}

	@Override
	public String toString() {
		return "Payment [pay_id=" + pay_id + ", amount=" + amount + ", pmode=" + pmode + ", ptype=" + ptype + "]";
	}		
}
