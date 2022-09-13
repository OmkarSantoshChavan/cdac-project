package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.customexception.ResourceNotFoundException;
import com.example.demo.dto.ResponseDTO;
import com.example.demo.service.AdminService;

@RestController
@EnableAutoConfiguration
public class AdminController {
	@Autowired
	private AdminService adminService;
	public AdminController()
	{
		System.out.println("in ctor:-"+getClass().getName());
	}
	@GetMapping("/users")
	public ResponseDTO<?> fetchAllUsers()
	{
		return new ResponseDTO<>(HttpStatus.OK, "Fetching user list successfully", adminService.fetchAllUsers());
	}
	@DeleteMapping("/delete/{propId}")
	 public ResponseDTO<?> deleteById(@PathVariable int propId)
	 {
		  try {
			 return new ResponseDTO<>(HttpStatus.OK,"Property removed succssfully",adminService.deletePropertyById(propId));
		} catch (ResourceNotFoundException e) {
			return new ResponseDTO<>(HttpStatus.BAD_REQUEST,"This property is not present",null);
		}
	 }
}
