package com.example.demo.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="property_details")
public class PropertyDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pid;
	@Column
	private String address;
	@Column
	private int rent;
	@Column
	private String description;	
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="userid")
	@JsonIgnoreProperties("prolist")
	private Users ownerData;
	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name="area_id")
	@JsonIgnoreProperties("areaPropData")
	private Area areaData;
	@OneToMany(mappedBy = "photoData",cascade = CascadeType.ALL,orphanRemoval = true)
	@JsonIgnoreProperties("photoData")
	private List<PropPhotos>propertyphoto=new ArrayList<>();
	@OneToMany(mappedBy="facilityData",cascade = CascadeType.ALL,orphanRemoval = true)
	@JsonIgnoreProperties("facilityData")
	List<Facilities>facilityList=new ArrayList<>();
	public PropertyDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PropertyDetails(String address, int rent, String description) {
		super();
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

	public int getRent() {
		return rent;
	}

	public void setRent(int rent) {
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
	
	public List<PropPhotos> getPropertyphoto() {
		return propertyphoto;
	}

	public void setPropertyphoto(List<PropPhotos> propertyphoto) {
		this.propertyphoto = propertyphoto;
	}
	
	public List<Facilities> getFacilityList() {
		return facilityList;
	}

	public void setFacilityList(List<Facilities> facilityList) {
		this.facilityList = facilityList;
	}

	@Override
	public String toString() {
		return "PropertyDetails [pid=" + pid + ", address=" + address + ", rent=" + rent + ", description="
				+ description + "]";
	}

}
