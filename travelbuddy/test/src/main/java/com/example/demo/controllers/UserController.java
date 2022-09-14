package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.customexception.ResourceNotFoundException;
import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.ResponseDTO;
import com.example.demo.dto.UpdateDTO;
import com.example.demo.pojos.Users;
import com.example.demo.service.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
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
	
	@PostMapping("/updateprofile/{userid}")
    public ResponseDTO<?> updateProfile(@PathVariable int userid,@RequestBody UpdateDTO user)
    {
   	  try {
			return new ResponseDTO<>(HttpStatus.OK, "Update operation done successfully",us.updateProfile(userid, user));
		} catch (ResourceNotFoundException e) {
			return new ResponseDTO<>(HttpStatus.BAD_GATEWAY,"Use valid userid",null);
		} 
    }
}
