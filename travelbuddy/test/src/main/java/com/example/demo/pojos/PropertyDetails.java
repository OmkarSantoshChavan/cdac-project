package com.example.demo.pojos;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public class PropertyDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pid;
	@Column
	private String address;
	@Column
	private double rent;
	@Column
	private String description;	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="userid")
	private Users ownerData;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="area_id")
	private Area areaData;
	
	public PropertyDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PropertyDetails(int pid, String address, double rent, String description) {
		super();
		this.pid = pid;
		this.address = address;
		this.rent = rent;
		this.description = description;
	}

	public int getPid() {
		return pid;
	}

	public void setPid(int pid) {
		this.pid = pid;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public double getRent() {
		return rent;
	}

	public void setRent(double rent) {
		this.rent = rent;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Users getOwnerData() {
		return ownerData;
	}

	public void setOwnerData(Users ownerData) {
		this.ownerData = ownerData;
	}

	public Area getAreaData() {
		return areaData;
	}

	public void setAreaData(Area areaData) {
		this.areaData = areaData;
	}

	@Override
	public String toString() {
		return "PropertyDetails [pid=" + pid + ", address=" + address + ", rent=" + rent + ", description="
				+ description + "]";
	}
	
	
	
}
