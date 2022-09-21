package com.example.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.dto.BookPropertyDTO;
import com.example.demo.dto.ResponseDTO;
import com.example.demo.service.CustomerService;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:3000/")
public class CustomerController {
	@Autowired
	CustomerService cs;

	@GetMapping("getbookings/{pid}")
	 public ResponseDTO<?>getBookings(@PathVariable int pid)
    {
 	   return new ResponseDTO<>(HttpStatus.OK, "Dates booked", cs.getBookings(pid));
    }
	
	 @PostMapping("/bookproperty/{userid}")
    public ResponseDTO<?>addProperty(@PathVariable int userid,@RequestBody BookPropertyDTO bprop)
    {
 	   return new ResponseDTO<>(HttpStatus.OK, "Property booked successfully", cs.bookProperty(userid,bprop));
    }
}
