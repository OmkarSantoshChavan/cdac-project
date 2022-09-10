package com.example.demo.pojos;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class PropertyDetails {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private int pid;
	@Column
    private String userid;
	@Column
	private String address;
	@Column
	private int area_id;
	@Column
	private double rent;
	@Column
	private String description;
}
