package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.customexception.ResourceNotFoundException;
import com.example.demo.dto.ResponseDTO;
import com.example.demo.service.AdminService;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:3000/")
public class AdminController {
	@Autowired
	private AdminService adminService;
	public AdminController()
	{
		System.out.println("in ctor:-"+getClass().getName());
	}
	@GetMapping("/fetchallusers")
	public ResponseDTO<?> fetchAllUsers()
	{
		return new ResponseDTO<>(HttpStatus.OK, "Fetching user list successfully", adminService.fetchAllUsers());
	}

}
