package com.example.demo.pojos;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="photos")
public class PropPhotos {	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int photo_id;
	@Lob
	private byte[] photos;
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name="pid")
	@JsonIgnoreProperties("propertyphoto")
	private PropertyDetails photoData;
	
	public PropPhotos() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PropPhotos(byte[] photos, PropertyDetails photoData) {
		super();
		this.photos = photos;
		this.photoData = photoData;
	}

	public int getPhoto_id() {
		return photo_id;
	}

	public void setPhoto_id(int photo_id) {
		this.photo_id = photo_id;
	}

	public byte[] getPhotos() {
		return photos;
	}

	public void setPhotos(byte[] photos) {
		this.photos = photos;
	}

	public PropertyDetails getPhotoData() {
		return photoData;
	}

	public void setPhotoData(PropertyDetails photoData) {
		this.photoData = photoData;
	}

	@Override
	public String toString() {
		return "PropPhotos [photo_id=" + photo_id + "]";
	}
		
}
