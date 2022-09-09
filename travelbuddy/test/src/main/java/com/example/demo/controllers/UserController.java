package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pojos.Users;
import com.example.demo.service.UserService;


@RestController
public class UserController {
	@Autowired
	UserService us;
	
	@GetMapping("/all")
	public List<Users> getAll(){
		return us.getAll();
	}
	
	@PostMapping("/addUser")
	public Users addUser(@RequestBody Users u) {
		return us.addUser(u);	
	}
}
