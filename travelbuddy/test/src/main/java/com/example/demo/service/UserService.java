package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.pojos.Users;
import com.example.demo.repositories.UserRepository;


@Service
public class UserService {
	
	@Autowired
	UserRepository urepo;
	
	public List<Users> getAll(){
		return urepo.findAll();
	}
	
	public Users addUser(Users u) {		
		return urepo.save(u);	
	}
}