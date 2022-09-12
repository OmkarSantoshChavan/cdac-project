package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.LoginRequest;
import com.example.demo.pojos.Users;
import com.example.demo.service.UserService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
public class UserController {
	@Autowired
	UserService us;
	
	@PostMapping("/login")
	public Object Login(@RequestBody LoginRequest request)
	{
		return us.loginRequest(request.getEmail(),request.getPassword());
	}
	
	@PostMapping("/registeruser")
	public Users RegisterUser(@RequestBody Users u) {
		return us.RegisterUser(u);	
	}
}
