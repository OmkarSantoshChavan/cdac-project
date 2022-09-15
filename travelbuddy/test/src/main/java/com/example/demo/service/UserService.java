package com.example.demo.service;

import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.customexception.CustomerHandlingException;
import com.example.demo.customexception.ResourceNotFoundException;
import com.example.demo.dto.UpdateDTO;
import com.example.demo.pojos.Users;
import com.example.demo.repositories.UserRepository;


@Service
public class UserService {
	
	@Autowired
	UserRepository urepo;
	
	 public Optional<Users> loginRequest(String email, String password) {
		 
 		return Optional.ofNullable(urepo.Login(email, password)
 				.orElseThrow(() -> new CustomerHandlingException("Invalid Credentials!!!!")));						
	 }
	
	public Users RegisterUser(Users u) {	
		
		return urepo.save(u);	
	}
	
	public  Users updateProfile(int userid, UpdateDTO user) throws ResourceNotFoundException {
	    boolean exists=urepo.existsById(userid);
	     if(!exists)
	    	 throw new ResourceNotFoundException("Invalid user id!!!!!");
	         Users userDetails=urepo.findById(userid).get();
	         userDetails.setName(user.getName());
	         userDetails.setPassword(user.getPassword());
	         userDetails.setEmail(user.getEmail());
	         userDetails.setContact_no(user.getContact_no());
<<<<<<< HEAD
	         userDetails.setAddress(user.getAddress());	         
=======
	         userDetails.setAddress(user.getAddress());
	         
>>>>>>> 292fe8b5a59680e57ec891a079ef9c4066fab19a
	         urepo.save(userDetails);
	         return userDetails;
}
}