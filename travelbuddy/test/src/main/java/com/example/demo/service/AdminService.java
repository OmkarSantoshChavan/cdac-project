package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.customexception.ResourceNotFoundException;
import com.example.demo.pojos.Users;
import com.example.demo.repositories.AdminRepository;


@Service
public class AdminService {
	@Autowired
	AdminRepository arepo;
    
	public List<Users> fetchAllUsers() {
		
		return arepo.findAll();
	}


}
