package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.customexception.ResourceNotFoundException;
import com.example.demo.pojos.Users;
import com.example.demo.repositories.AdminRepository;
import com.example.demo.repositories.PropertyRepository;

@Service
public class AdminService {
	@Autowired
	AdminRepository arepo;
	 @Autowired
     private PropertyRepository prepo;
	public List<Users> fetchAllUsers() {
		
		return arepo.findAll();
	}

	public String deletePropertyById(int propId) throws ResourceNotFoundException {
		boolean exists=prepo.existsById(propId);
		if(!exists)
			 throw new ResourceNotFoundException("wrong property data");
		      prepo.deleteById(propId); 
		return "property is deleted with id"+propId;
	}
}
