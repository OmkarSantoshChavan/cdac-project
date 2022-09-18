package com.example.demo.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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
	public Users Login(@RequestBody LoginRequest request)
	{
		return us.loginRequest(request.getEmail(),request.getPassword());
	}
	
	@PostMapping("/registeruser")
	public ResponseDTO<?> registerUser(@RequestBody Users u) {
		return new ResponseDTO<>(HttpStatus.OK,"registeration done successfully",us.registerUser(u));
	}
	
	@DeleteMapping("/deleteuserbyid/{userid}")
	public ResponseDTO<?> deleteUserById(@PathVariable int userid) {
		 try {
			 return new ResponseDTO<>(HttpStatus.OK,"User removed succssfully",us.deleteUserById(userid));
		} catch (ResourceNotFoundException e) {
			return new ResponseDTO<>(HttpStatus.BAD_REQUEST,"This user is not present",null);
		}

	}
	
	@PutMapping("/updateprofile/{userid}")
    public ResponseDTO<?> updateProfile(@PathVariable int userid,@RequestBody UpdateDTO user)
    {
   	  try {
			return new ResponseDTO<>(HttpStatus.OK, "Update operation done successfully",us.updateProfile(userid, user));
		} catch (ResourceNotFoundException e) {
			return new ResponseDTO<>(HttpStatus.BAD_GATEWAY,"Use valid userid",null);
		} 
    }
	
	@GetMapping("/getallproperty")
   	public ResponseDTO<?> getAllPropertyHomePage()
   	{
   		return new ResponseDTO<>(HttpStatus.OK,"Fetching property list successfully",us.getAllProperty());
   	}
	@GetMapping("/propertydetails/{pid}")
  	public ResponseDTO<?> getAllPropertyHomePage(@PathVariable int pid)
  	{
  		return new ResponseDTO<>(HttpStatus.OK,"Fetching property details successfully",us.getPropertyDetails(pid));
  	}
	
}
