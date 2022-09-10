package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.pojos.Area;
import com.example.demo.service.AreaService;

@RestController
public class AreaController {
	@Autowired
	AreaService as;
	
	@GetMapping("/allarea")
	public List<Area> getAll(){
		return as.getAll();
	}
	
	@PostMapping("/addArea")
	public Area addArea(@RequestBody Area a) {
		return as.addArea(a);	
	}
}
