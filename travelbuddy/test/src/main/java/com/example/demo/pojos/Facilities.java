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

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="facility")
public class Facilities {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int fid;
	@Column
	private String furnished;
	@Column
	private String parking;
	@Column
	private String security_guard;
	@Column
	private String lift;
	@Column
	private String cctv;
	@ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="pid")
    @JsonIgnoreProperties("facilityList")
	@JsonIgnore
    private PropertyDetails facilityData;
	
	public Facilities() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Facilities(String furnished, String parking, String security_guard, String lift, String cctv) {
		super();
		this.furnished = furnished;
		this.parking = parking;
		this.security_guard = security_guard;
		this.lift = lift;
		this.cctv = cctv;
	}

	public int getFid() {
		return fid;
	}

	public void setFid(int fid) {
		this.fid = fid;
	}

	public String getFurnished() {
		return furnished;
	}

	public void setFurnished(String furnished) {
		this.furnished = furnished;
	}

	public String getParking() {
		return parking;
	}

	public void setParking(String parking) {
		this.parking = parking;
	}

	public String getSecurity_guard() {
		return security_guard;
	}

	public void setSecurity_guard(String security_guard) {
		this.security_guard = security_guard;
	}

	public String getLift() {
		return lift;
	}

	public void setLift(String lift) {
		this.lift = lift;
	}

	public String getCctv() {
		return cctv;
	}

	public void setCctv(String cctv) {
		this.cctv = cctv;
	}

	public PropertyDetails getFacilityData() {
		return facilityData;
	}

	public void setFacilityData(PropertyDetails facilityData) {
		this.facilityData = facilityData;
	}

	@Override
	public String toString() {
		return "Facilities [fid=" + fid + ", furnished=" + furnished + ", parking=" + parking + ", security_guard="
				+ security_guard + ", lift=" + lift + ", cctv=" + cctv + "]";
	}
	
}
