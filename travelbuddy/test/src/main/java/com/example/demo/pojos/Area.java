package com.example.demo.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="area")
public class Area {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int area_id;
	@Column
	private int pincode;	
	@Column
    private String area_name;
	@Column
    private String city;
	
	public Area() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Area(int area_id, int pincode, String area_name, String city) {
		super();
		this.area_id = area_id;
		this.pincode = pincode;
		this.area_name = area_name;
		this.city = city;
	}

	public int getArea_id() {
		return area_id;
	}

	public void setArea_id(int area_id) {
		this.area_id = area_id;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public String getArea_name() {
		return area_name;
	}

	public void setArea_name(String area_name) {
		this.area_name = area_name;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	@Override
	public String toString() {
		return "Area [area_id=" + area_id + ", pincode=" + pincode + ", area_name=" + area_name + ", city=" + city
				+ "]";
	}
	
	
}
