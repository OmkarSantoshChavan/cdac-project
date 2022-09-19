package com.example.demo.controllers;

import java.sql.Blob;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.AddPropertyDTO;
import com.example.demo.dto.ResponseDTO;
import com.example.demo.pojos.PropPhotos;
import com.example.demo.service.OwnerService;

@RestController
@EnableAutoConfiguration
@CrossOrigin(origins = "http://localhost:3000/")
public class OwnerController {
	@Autowired
	OwnerService os;
	
	 @PostMapping("/addproperty/{userid}")
     public ResponseDTO<?>addProperty(@PathVariable int userid,@RequestBody AddPropertyDTO request)
     {
  	   return new ResponseDTO<>(HttpStatus.OK, "Property added successfully", os.addProperty(userid,request));
     }
	 
	 @PostMapping("/uploadphoto/{pid}")
	 public ResponseDTO<?>addPhoto(@PathVariable int pid,@RequestBody byte[] pic)
     {
  	   return new ResponseDTO<>(HttpStatus.OK, "Photo added successfully", os.AddPhoto(pid,pic));
     }
}
