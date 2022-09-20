package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.customexception.CustomerHandlingException;
import com.example.demo.customexception.ResourceNotFoundException;
import com.example.demo.dto.PropertyDetailsDTO;
import com.example.demo.dto.UpdateDTO;
import com.example.demo.pojos.Users;
import com.example.demo.repositories.PropertyRepository;
import com.example.demo.repositories.UserRepository;


@Service
public class UserService {
	
	@Autowired
	UserRepository urepo;
	@Autowired
	PropertyRepository prepo;
	
	 public Users loginRequest(String email, String password) {
		 
 		return urepo.Login(email, password)
 				.orElseThrow(() -> new CustomerHandlingException("Invalid Credentials!!!!"));						
	 }
	
	public Users registerUser(Users u) {	
		System.out.println("user info"+u);
		return urepo.save(u);	
	}
	
	public String deleteUserById(int userid) throws ResourceNotFoundException {
		boolean exists=urepo.existsById(userid);
		if(!exists)
			 throw new ResourceNotFoundException("wrong userid");
		Users u=urepo.findById(userid).get();
		urepo.delete(u);
		return "User is deleted with id:"+userid;	
	}
	
	public Users updateProfile(int userid, UpdateDTO user) throws ResourceNotFoundException {
	    boolean exists=urepo.existsById(userid);
	     if(!exists)
	    	 throw new ResourceNotFoundException("Invalid user id!!!!!");
         Users userDetails=urepo.findById(userid).get();
         userDetails.setName(user.getName());
         userDetails.setPassword(user.getPassword());
         userDetails.setEmail(user.getEmail());
         userDetails.setContact_no(user.getContact_no());
         userDetails.setAddress(user.getAddress());
         urepo.save(userDetails);
         return userDetails;
	}
	
	public List<PropertyDetailsDTO> getAllProperty() {
		return prepo.getAllPropertList();
	}
	
	public PropertyDetailsDTO getPropertyDetails(int pid) {
		 return prepo.getPropertyDetails(pid);
	}

}